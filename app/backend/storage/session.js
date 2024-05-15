"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvsStorageSession = void 0;
const encryption_1 = require("../lib/encryption");
const payload_1 = require("./payload");
const axios_1 = __importDefault(require("axios"));
const uaParser = require('ua-parser-js');
class AvsStorageSession {
    constructor() {
        this.sessionIdStart = this.getNow();
        this.sessionList = {};
        this.payloadInstance = new payload_1.AvsStoragePayload();
        this.stateMap = AvsStorageSession.getStateMap();
    }
    static getStateMap() {
        return {
            [AvsStorageSession.SESSION_STATE_IN_PROGRESS]: 'inProgress',
            [AvsStorageSession.SESSION_STATE_SUCCESS]: 'success',
            [AvsStorageSession.SESSION_STATE_FAILED]: 'fail',
            [AvsStorageSession.SESSION_STATE_LINK_EXPIRED]: 'expired',
            [AvsStorageSession.SESSION_STATE_LINK_ALREADY_USED]: 'alreadyUsed',
        };
    }
    static isValidStep(step) {
        const stepList = [
            AvsStorageSession.STEP_START_PAGE,
            AvsStorageSession.STEP_SELFIE_AGE_DETECTION_INTRO,
            AvsStorageSession.STEP_SELFIE_AGE_DETECTION_PAGE,
            AvsStorageSession.STEP_SCAN_ID_AGE_VERIFICATION_INTRO,
            AvsStorageSession.STEP_SCAN_ID_AGE_VERIFICATION_PAGE,
            AvsStorageSession.STEP_CREDIT_CARD_AGE_VERIFICATION_INTRO,
            AvsStorageSession.STEP_CREDIT_CARD_AGE_VERIFICATION_PAGE,
        ];
        for (let i in stepList) {
            if (stepList[i] == step) {
                return true;
            }
        }
        return false;
    }
    start(payload) {
        this.payloadInstance.store(payload);
        let payloadParsed = encryption_1.AvsEncryption.decryptString(payload);
        let sessionId = this.getUniqueId();
        let uaParsed = uaParser(payloadParsed.httpParamList.userAgent);
        let sessionState = AvsStorageSession.SESSION_STATE_IN_PROGRESS;
        if (this.payloadInstance.isStored(payload)) {
            sessionState = AvsStorageSession.SESSION_STATE_LINK_ALREADY_USED;
        }
        if (this.payloadInstance.isExpired(payload)) {
            sessionState = AvsStorageSession.SESSION_STATE_LINK_EXPIRED;
        }
        this.create({
            sessionId: sessionId,
            userData: payloadParsed.userData,
            ip: payloadParsed.userIpStr,
            ipCountry: payloadParsed.userIpCountry,
            ipState: payloadParsed.userIpState,
            websiteHostname: payloadParsed.websiteHostname,
            verificationVersion: payloadParsed.verificationVersion,
            deviceType: uaParsed.device.type,
            userAgent: payloadParsed.httpParamList.userAgent,
            stateInt: sessionState,
            state: this.stateMap[sessionState],
            callbackUrl: payloadParsed.callbackUrl,
            payload: payload,
        });
        return {
            sessionInfo: this.getById(sessionId),
            sessionId: sessionId,
            sessionState: sessionState,
            linkBack: payloadParsed.linkBack,
            http: {
                userAgent: payloadParsed.httpParamList.userAgent,
                paramList: payloadParsed.httpParamList
            }
        };
    }
    end(sessionId, sessionStateInt, stepIp, errorCode, idCountry, idState, idType) {
        let sessionData = this.getById(sessionId);
        if (sessionData == null) {
            return;
        }
        sessionData.stateInt = sessionStateInt;
        sessionData.state = this.stateMap[sessionStateInt];
        sessionData.stepIp = stepIp;
        sessionData.idCountry = idCountry;
        sessionData.idState = idState;
        sessionData.idType = idType;
        sessionData.errorCode = errorCode;
        (0, axios_1.default)({
            method: 'post',
            url: sessionData.callbackUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            },
            data: {
                userData: JSON.stringify(sessionData.userData),
                state: AvsStorageSession.getStateMap()[AvsStorageSession.SESSION_STATE_SUCCESS],
                stateInt: AvsStorageSession.SESSION_STATE_SUCCESS,
                sessionId: sessionId,
                errorCode: errorCode,
                deviceType: sessionData.deviceType,
                stepId: stepIp,
                idCountry: idCountry,
                idState: idState,
                idType: idType,
                websiteHostname: sessionData.websiteHostname,
                ip: sessionData.ip,
            }
        })
            .then((response) => {
            console.log('Callback data success!');
        })
            .catch((err) => {
            console.log('Error: ', err.message);
        });
        this.update(sessionId, sessionData);
        let payload = encryption_1.AvsEncryption.decryptString(sessionData.payload);
        payload.userIpStr = '127.0.0.1';
        payload.userIpCountry = 'A1';
        payload.userData = sessionData.userData;
        payload.callbackUrl = '';
        payload.verificationResult = {
            state: this.stateMap[sessionStateInt],
            stateInt: sessionStateInt,
            sessionId: sessionId,
            errorCode: errorCode,
        };
        return {
            payload: encryption_1.AvsEncryption.encryptObject(payload),
        };
    }
    updateState(sessionId, stateData) {
        let sessionData = this.getById(sessionId);
        if (sessionData == null) {
            return false;
        }
        sessionData.stepIp = stateData.stepId;
        sessionData.idCountry = stateData.idCountry;
        sessionData.idState = stateData.idState;
        sessionData.idType = stateData.idType;
        sessionData.errorCode = stateData.errorCode;
        this.update(sessionId, sessionData);
        return true;
    }
    isPayloadValidated(payload) {
        for (let i in this.sessionList) {
            if (this.sessionList[i].payload == payload && this.sessionList[i].stateInt == AvsStorageSession.SESSION_STATE_SUCCESS) {
                return true;
            }
        }
        return false;
    }
    getUniqueId() {
        this.sessionIdStart++;
        return this.sessionIdStart;
    }
    create(sessionData) {
        this.sessionList[sessionData.sessionId] = sessionData;
    }
    getById(sessionId) {
        if (typeof this.sessionList[sessionId] == 'undefined') {
            return null;
        }
        return this.sessionList[sessionId];
    }
    update(sessionId, sessionData) {
        this.sessionList[sessionId] = sessionData;
    }
    getNow() {
        return +new Date();
    }
}
exports.AvsStorageSession = AvsStorageSession;
AvsStorageSession.VERIFICATION_STANDARD_V1 = 1;
AvsStorageSession.VERIFICATION_IFRAME_V1 = 2;
AvsStorageSession.SESSION_STATE_IN_PROGRESS = 1;
AvsStorageSession.SESSION_STATE_SUCCESS = 2;
AvsStorageSession.SESSION_STATE_FAILED = 3;
AvsStorageSession.SESSION_STATE_LINK_EXPIRED = 4;
AvsStorageSession.SESSION_STATE_LINK_ALREADY_USED = 5;
AvsStorageSession.STEP_START_PAGE = 1;
AvsStorageSession.STEP_SELFIE_AGE_DETECTION_INTRO = 2;
AvsStorageSession.STEP_SELFIE_AGE_DETECTION_PAGE = 3;
AvsStorageSession.STEP_SCAN_ID_AGE_VERIFICATION_INTRO = 4;
AvsStorageSession.STEP_SCAN_ID_AGE_VERIFICATION_PAGE = 5;
AvsStorageSession.STEP_CREDIT_CARD_AGE_VERIFICATION_INTRO = 6;
AvsStorageSession.STEP_CREDIT_CARD_AGE_VERIFICATION_PAGE = 7;
