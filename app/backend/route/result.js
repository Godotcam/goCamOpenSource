"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const response_1 = require("../lib/response");
const session_1 = require("../storage/session");
const config_1 = require("../config");
const ROUTE_ROOT = '/result';
const MAX_TEST_DURATION = config_1.config.test.maxDuration;
const DEVICE_LOCATION_VERIFICATION_INTERNAL = 0;
// const DEVICE_LOCATION_VERIFICATION_EXTERNAL = 1;
function load(app, storage) {
    app.post(ROUTE_ROOT + '/success', (req, res) => {
        let token = req.body.token;
        let stepId = req.body.stepId;
        let deviceLocationVerification = req.body.deviceLocationVerification;
        let idCountry = req.body.idCountry;
        let idState = req.body.idState;
        let idType = req.body.idType;
        /*
        let sessionId = req.body.sessionId;
        if (!req.cookies['connect.sid']) {
            req.cookies['connect.sid'] = sessionId;
        }
        */
        let sessionResult = {
            stepId: stepId,
            idCountry: idCountry,
            idState: idState,
            idType: idType,
            errorCode: 0,
        };
        if (!session_1.AvsStorageSession.isValidStep(stepId)) {
            sessionResult.stepId = 0;
            sessionResult.errorCode = 30007;
            storage.updateState(req.session.sessionStartId, sessionResult);
            res.send(response_1.AvsResponse.errorResponse(30007, 'Invalid step id'));
            return;
        }
        if (!isMaxAllowedTestTime(req)) {
            sessionResult.errorCode = 30008;
            storage.updateState(req.session.sessionStartId, sessionResult);
            res.send(response_1.AvsResponse.errorResponse(30008, 'Test max allowed time expired'));
            return;
        }
        if (deviceLocationVerification == DEVICE_LOCATION_VERIFICATION_INTERNAL) {
            if (!(req.session.successKey && token == req.session.successKey)) {
                sessionResult.errorCode = 30009;
                storage.updateState(req.session.sessionStartId, sessionResult);
                res.send(response_1.AvsResponse.errorResponse(30009, 'Invalid token'));
                return;
            }
        }
        let avsSession = storage.end(req.session.sessionStartId, session_1.AvsStorageSession.SESSION_STATE_SUCCESS, stepId, 0, idCountry, idState, idType);
        if (typeof avsSession == 'undefined') {
            sessionResult.errorCode = 30010;
            storage.updateState(req.session.sessionStartId, sessionResult);
            res.send(response_1.AvsResponse.errorResponse(30010, 'Failed to save session data'));
            return;
        }
        let successPayload = avsSession.payload;
        res.cookie('isAgeVerified', successPayload, {
            httpOnly: config_1.config.cookie.httpOnly,
            secure: config_1.config.cookie.secure,
            maxAge: config_1.config.cookie.maxAge,
        });
        res.send(response_1.AvsResponse.successResponse({
            successPayload: successPayload,
        }));
    });
    app.post(ROUTE_ROOT + '/fail', (req, res) => {
        let token = req.body.token;
        let stepId = req.body.stepId;
        let deviceLocationVerification = req.body.deviceLocationVerification;
        let errorCode = req.body.errorCode;
        let idCountry = req.body.idCountry;
        let idState = req.body.idState;
        let idType = req.body.idType;
        /*
        let sessionId                  = req.body.sessionId;
        if (!req.cookies['connect.sid']) {
            req.cookies['connect.sid'] = sessionId;
        }
        */
        let sessionResult = {
            stepId: stepId,
            idCountry: idCountry,
            idState: idState,
            idType: idType,
            errorCode: errorCode,
        };
        if (!session_1.AvsStorageSession.isValidStep(stepId)) {
            sessionResult.stepId = 0;
            sessionResult.errorCode = 30011;
            storage.updateState(req.session.sessionStartId, sessionResult);
            res.send(response_1.AvsResponse.errorResponse(30011, 'Invalid step id'));
            return;
        }
        if (!isMaxAllowedTestTime(req)) {
            sessionResult.errorCode = 30012;
            storage.updateState(req.session.sessionStartId, sessionResult);
            res.send(response_1.AvsResponse.errorResponse(30012, 'Test max allowed time expired'));
            return;
        }
        if (deviceLocationVerification == DEVICE_LOCATION_VERIFICATION_INTERNAL) {
            if (!(req.session.successKey && token == req.session.successKey)) {
                sessionResult.errorCode = 30013;
                storage.updateState(req.session.sessionStartId, sessionResult);
                res.send(response_1.AvsResponse.errorResponse(30013, 'Invalid token'));
                return;
            }
        }
        let avsSession = storage.end(req.session.sessionStartId, session_1.AvsStorageSession.SESSION_STATE_FAILED, stepId, errorCode, idCountry, idState, idType);
        if (typeof avsSession == 'undefined') {
            sessionResult.errorCode = 30014;
            storage.updateState(req.session.sessionStartId, sessionResult);
            res.send(response_1.AvsResponse.errorResponse(30014, 'Failed to save session data'));
            return;
        }
        res.send(response_1.AvsResponse.successResponse());
    });
    app.post(ROUTE_ROOT + '/isSuccess', (req, res) => {
        let payload = req.body['d'];
        res.send(response_1.AvsResponse.successResponse({
            isValidated: storage.isPayloadValidated(payload),
        }));
    });
    let isMaxAllowedTestTime = (req) => {
        let delta = +new Date() - req.session.accessTime;
        return delta < MAX_TEST_DURATION;
    };
}
exports.load = load;
