import Express = require('express');
import {AvsResponse}       from "../lib/response";
import {AvsStorageSession} from "../storage/session";
import {config}            from "../config";

const ROUTE_ROOT: string = '/result';

const MAX_TEST_DURATION: number             = config.test.maxDuration;
const DEVICE_LOCATION_VERIFICATION_INTERNAL = 0;
// const DEVICE_LOCATION_VERIFICATION_EXTERNAL = 1;

export function load(app: Express.Application, storage: AvsStorageSession) {

	app.post(ROUTE_ROOT + '/success', (req: Express.Request, res: Express.Response) => {

		let token                      = req.body.token;
		let stepId                     = req.body.stepId;
		let deviceLocationVerification = req.body.deviceLocationVerification;
		let idCountry                  = req.body.idCountry;
		let idState                    = req.body.idState;
		let idType                     = req.body.idType;

		/*
		let sessionId = req.body.sessionId;
		if (!req.cookies['connect.sid']) {
			req.cookies['connect.sid'] = sessionId;
		}
		*/

		let sessionResult = {
			stepId   : stepId,
			idCountry: idCountry,
			idState  : idState,
			idType   : idType,
			errorCode: 0,
		};

		if (!AvsStorageSession.isValidStep(stepId)) {
			sessionResult.stepId    = 0;
			sessionResult.errorCode = 30007;
			storage.updateState(req.session.sessionStartId, sessionResult);
			res.send(AvsResponse.errorResponse(30007, 'Invalid step id'));
			return;
		}

		if (!isMaxAllowedTestTime(req)) {
			sessionResult.errorCode = 30008;
			storage.updateState(req.session.sessionStartId, sessionResult);
			res.send(AvsResponse.errorResponse(30008, 'Test max allowed time expired'));
			return;
		}

		if (deviceLocationVerification == DEVICE_LOCATION_VERIFICATION_INTERNAL) {
			if (!(req.session.successKey && token == req.session.successKey)) {
				sessionResult.errorCode = 30009;
				storage.updateState(req.session.sessionStartId, sessionResult);
				res.send(AvsResponse.errorResponse(30009, 'Invalid token'));
				return;
			}
		}


		let avsSession = storage.end(
			req.session.sessionStartId,
			AvsStorageSession.SESSION_STATE_SUCCESS,
			stepId,
			0,
			idCountry,
			idState,
			idType
		);

		if (typeof avsSession == 'undefined') {
			sessionResult.errorCode = 30010;
			storage.updateState(req.session.sessionStartId, sessionResult);
			res.send(AvsResponse.errorResponse(30010, 'Failed to save session data'));
			return;
		}

		let successPayload = avsSession.payload;

		res.cookie('isAgeVerified', successPayload, {
			httpOnly: config.cookie.httpOnly,
			secure  : config.cookie.secure,
			maxAge  : config.cookie.maxAge,
		});

		res.send(AvsResponse.successResponse({
			successPayload: successPayload,
		}));

	});

	app.post(ROUTE_ROOT + '/fail', (req: Express.Request, res: Express.Response) => {

		let token                      = req.body.token;
		let stepId                     = req.body.stepId;
		let deviceLocationVerification = req.body.deviceLocationVerification;
		let errorCode                  = req.body.errorCode;
		let idCountry                  = req.body.idCountry;
		let idState                    = req.body.idState;
		let idType                     = req.body.idType;

		/*
		let sessionId                  = req.body.sessionId;
		if (!req.cookies['connect.sid']) {
			req.cookies['connect.sid'] = sessionId;
		}
		*/

		let sessionResult = {
			stepId   : stepId,
			idCountry: idCountry,
			idState  : idState,
			idType   : idType,
			errorCode: errorCode,
		};

		if (!AvsStorageSession.isValidStep(stepId)) {
			sessionResult.stepId    = 0;
			sessionResult.errorCode = 30011;
			storage.updateState(req.session.sessionStartId, sessionResult);
			res.send(AvsResponse.errorResponse(30011, 'Invalid step id'));
			return;
		}

		if (!isMaxAllowedTestTime(req)) {
			sessionResult.errorCode = 30012;
			storage.updateState(req.session.sessionStartId, sessionResult);
			res.send(AvsResponse.errorResponse(30012, 'Test max allowed time expired'));
			return;
		}

		if (deviceLocationVerification == DEVICE_LOCATION_VERIFICATION_INTERNAL) {
			if (!(req.session.successKey && token == req.session.successKey)) {
				sessionResult.errorCode = 30013;
				storage.updateState(req.session.sessionStartId, sessionResult);
				res.send(AvsResponse.errorResponse(30013, 'Invalid token'));
				return;
			}
		}

		let avsSession = storage.end(
			req.session.sessionStartId,
			AvsStorageSession.SESSION_STATE_FAILED,
			stepId,
			errorCode,
			idCountry,
			idState,
			idType
		);

		if (typeof avsSession == 'undefined') {
			sessionResult.errorCode = 30014;
			storage.updateState(req.session.sessionStartId, sessionResult);
			res.send(AvsResponse.errorResponse(30014, 'Failed to save session data'));
			return;
		}

		res.send(AvsResponse.successResponse());

	});

	app.post(ROUTE_ROOT + '/isSuccess', (req: Express.Request, res: Express.Response) => {

		let payload = req.body['d'];

		res.send(AvsResponse.successResponse({
			isValidated: storage.isPayloadValidated(payload),
		}));

	});

	let isMaxAllowedTestTime = (req: Express.Request) => {

		let delta = +new Date() - req.session.accessTime;
		return delta < MAX_TEST_DURATION;
	}

}
