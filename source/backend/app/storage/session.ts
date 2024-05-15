import {AvsEncryption}        from "../lib/encryption";
import {AvsStoragePayload}    from "./payload";
import axios, {AxiosResponse} from "axios";

const uaParser = require('ua-parser-js');

export class AvsStorageSession {

	static VERIFICATION_STANDARD_V1 = 1;
	static VERIFICATION_IFRAME_V1   = 2;

	static SESSION_STATE_IN_PROGRESS       = 1;
	static SESSION_STATE_SUCCESS           = 2;
	static SESSION_STATE_FAILED            = 3;
	static SESSION_STATE_LINK_EXPIRED      = 4;
	static SESSION_STATE_LINK_ALREADY_USED = 5;

	static STEP_START_PAGE                         = 1;
	static STEP_SELFIE_AGE_DETECTION_INTRO         = 2;
	static STEP_SELFIE_AGE_DETECTION_PAGE          = 3;
	static STEP_SCAN_ID_AGE_VERIFICATION_INTRO     = 4;
	static STEP_SCAN_ID_AGE_VERIFICATION_PAGE      = 5;
	static STEP_CREDIT_CARD_AGE_VERIFICATION_INTRO = 6;
	static STEP_CREDIT_CARD_AGE_VERIFICATION_PAGE  = 7;

	private sessionList: ISessionList;
	private payloadInstance: AvsStoragePayload;
	private sessionIdStart: number;

	private stateMap: {
		[key: number]: string
	}

	constructor() {

		this.sessionIdStart  = this.getNow();
		this.sessionList     = {};
		this.payloadInstance = new AvsStoragePayload();

		this.stateMap = AvsStorageSession.getStateMap();

	}

	static getStateMap() {

		return {
			[AvsStorageSession.SESSION_STATE_IN_PROGRESS]      : 'inProgress',
			[AvsStorageSession.SESSION_STATE_SUCCESS]          : 'success',
			[AvsStorageSession.SESSION_STATE_FAILED]           : 'fail',
			[AvsStorageSession.SESSION_STATE_LINK_EXPIRED]     : 'expired',
			[AvsStorageSession.SESSION_STATE_LINK_ALREADY_USED]: 'alreadyUsed',
		};

	}

	static isValidStep(step: number) {

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

	public start(payload: string) {

		this.payloadInstance.store(payload);

		let payloadParsed = AvsEncryption.decryptString(payload);

		let sessionId = this.getUniqueId();
		let uaParsed  = uaParser(payloadParsed.httpParamList.userAgent);

		let sessionState = AvsStorageSession.SESSION_STATE_IN_PROGRESS;
		if (this.payloadInstance.isStored(payload)) {
			sessionState = AvsStorageSession.SESSION_STATE_LINK_ALREADY_USED;
		}

		if (this.payloadInstance.isExpired(payload)) {
			sessionState = AvsStorageSession.SESSION_STATE_LINK_EXPIRED;
		}

		this.create({
			sessionId          : sessionId,
			userData           : payloadParsed.userData,
			ip                 : payloadParsed.userIpStr,
			ipCountry          : payloadParsed.userIpCountry,
			ipState            : payloadParsed.userIpState,
			websiteHostname    : payloadParsed.websiteHostname,
			verificationVersion: payloadParsed.verificationVersion,
			deviceType         : uaParsed.device.type,
			userAgent          : payloadParsed.httpParamList.userAgent,
			stateInt           : sessionState,
			state              : this.stateMap[sessionState],
			callbackUrl        : payloadParsed.callbackUrl,
			payload            : payload,
		});

		return {
			sessionInfo : this.getById(sessionId),
			sessionId   : sessionId,
			sessionState: sessionState,
			linkBack    : payloadParsed.linkBack,
			http        : {
				userAgent: payloadParsed.httpParamList.userAgent,
				paramList: payloadParsed.httpParamList
			}
		};

	}

	public end(
		sessionId: number,
		sessionStateInt: number,
		stepIp: number,
		errorCode: number,
		idCountry: string,
		idState: string,
		idType: string
	) {

		let sessionData = this.getById(sessionId);
		if (sessionData == null) {
			return;
		}

		sessionData.stateInt  = sessionStateInt;
		sessionData.state     = this.stateMap[sessionStateInt];
		sessionData.stepIp    = stepIp;
		sessionData.idCountry = idCountry;
		sessionData.idState   = idState;
		sessionData.idType    = idType;
		sessionData.errorCode = errorCode;

		axios({
			method : 'post',
			url    : sessionData.callbackUrl,
			headers: {
				'Content-Type'               : 'application/x-www-form-urlencoded; charset=UTF-8',
				"Access-Control-Allow-Origin": "*",
			},
			data   : {
				userData       : JSON.stringify(sessionData.userData),
				state          : AvsStorageSession.getStateMap()[AvsStorageSession.SESSION_STATE_SUCCESS],
				stateInt       : AvsStorageSession.SESSION_STATE_SUCCESS,
				sessionId      : sessionId,
				errorCode      : errorCode,
				deviceType     : sessionData.deviceType,
				stepId         : stepIp,
				idCountry      : idCountry,
				idState        : idState,
				idType         : idType,
				websiteHostname: sessionData.websiteHostname,
				ip             : sessionData.ip,
			}
		})
			.then(
				(response: AxiosResponse) => {
					console.log('Callback data success!');
				}
			)
			.catch(
				(err: Error) => {
					console.log('Error: ', err.message);
				}
			);

		this.update(sessionId, sessionData);

		let payload                = AvsEncryption.decryptString(sessionData.payload);
		payload.userIpStr          = '127.0.0.1';
		payload.userIpCountry      = 'A1';
		payload.userData           = sessionData.userData;
		payload.callbackUrl        = '';
		payload.verificationResult = {
			state    : this.stateMap[sessionStateInt],
			stateInt : sessionStateInt,
			sessionId: sessionId,
			errorCode: errorCode,
		};

		return {
			payload: AvsEncryption.encryptObject(payload),
		}

	}

	public updateState(
		sessionId: number,
		stateData: IStateData
	) {

		let sessionData = this.getById(sessionId);
		if (sessionData == null) {
			return false;
		}

		sessionData.stepIp    = stateData.stepId;
		sessionData.idCountry = stateData.idCountry;
		sessionData.idState   = stateData.idState;
		sessionData.idType    = stateData.idType;
		sessionData.errorCode = stateData.errorCode;

		this.update(sessionId, sessionData);

		return true;

	}

	public isPayloadValidated(payload: string) {

		for (let i in this.sessionList) {
			if (this.sessionList[i].payload == payload && this.sessionList[i].stateInt == AvsStorageSession.SESSION_STATE_SUCCESS) {
				return true;
			}
		}

		return false;

	}

	private getUniqueId() {

		this.sessionIdStart++;

		return this.sessionIdStart;

	}

	private create(sessionData: ISessionListItem) {

		this.sessionList[sessionData.sessionId] = sessionData;

	}

	private getById(sessionId: number) {

		if (typeof this.sessionList[sessionId] == 'undefined') {
			return null;
		}

		return this.sessionList[sessionId];

	}

	private update(sessionId: number, sessionData: ISessionListItem) {

		this.sessionList[sessionId] = sessionData;

	}

	private getNow() {

		return +new Date();

	}

}

export interface ISessionList {
	[key: string]: ISessionListItem
}

export interface ISessionListItem {
	sessionId: number,
	userData: string,
	ip: string,
	ipCountry: string,
	ipState: string,
	websiteHostname: string,
	verificationVersion: number,
	deviceType: string,
	userAgent: string,
	state: string,
	stateInt: number,
	callbackUrl: string,
	payload: string,
	stepIp?: number,
	idCountry?: string,
	idState?: string,
	idType?: string,
	errorCode?: number
}

export interface IStateData {
	stepId: number,
	idCountry: string,
	idState: string,
	idType: string,
	errorCode: number,
}
