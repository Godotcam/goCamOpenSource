import Express = require('express');
import {config}            from '../config';
import {AvsEncryption}     from '../lib/encryption';
import {AvsRandom}         from '../lib/random';
import {AvsStorageSession} from "../storage/session";

const uaParser = require('ua-parser-js');

const ROUTE_ROOT = '/token';

export function load(app: Express.Application, storage: AvsStorageSession) {

	app.get(ROUTE_ROOT, (req: Express.Request, res: Express.Response) => {

		return renderTokenPage(req, res, AvsStorageSession.VERIFICATION_STANDARD_V1);

	});

	app.get(ROUTE_ROOT + '/iframeRender', (req: Express.Request, res: Express.Response) => {

		return renderTokenPage(req, res, AvsStorageSession.VERIFICATION_IFRAME_V1);

	});


	app.get(ROUTE_ROOT + '/iframeCheck', (req: Express.Request, res: Express.Response) => {

		let isAgeVerified       = typeof req.cookies['isAgeVerified'] != 'undefined';
		let verificationPayload = null;

		if (isAgeVerified) {
			verificationPayload = req.cookies['isAgeVerified'];
		}

		res.render('token/embedCheck.twig', {
			js: {
				isAgeVerified      : isAgeVerified,
				verificationPayload: verificationPayload,
			}
		});

	});

	let renderTokenPage = (req: Express.Request, res: Express.Response, verificationVersion: number = 1) => {

		let payload = req.query['d'];
		if (typeof payload == 'undefined') {
			res.render('token/error.twig', {
					code: 30005,
					msg : 'Invalid payload',
				}
			);
			return;
		}

		let avsSession = null;
		try {
			avsSession = storage.start(payload.toString());
		}
		catch (e) {

		}

		if (avsSession == null) {
			res.render('token/error.twig', {
					code: 30006,
					msg : 'Invalid payload',
				}
			);
			return;
		}

		let payloadParsed = payload ? AvsEncryption.decryptString(payload.toString()) : null;
		let successKey    = AvsRandom.generateRandomString(32);
		let failKey       = AvsRandom.generateRandomString(32);

		let sessionId = req.session.id;
		let ipCountry = 'FR';

		req.session.successKey     = successKey;
		req.session.failKey        = failKey;
		req.session.accessTime     = +new Date();
		req.session.sessionStartId = avsSession.sessionId;
		req.session.payload        = payload;

		res.render('token/index.twig', {
			js   : {
				onDocumentReady      : 'AvsToken.main',
				token                : AvsEncryption.base64EncodeObject({
					successKey: successKey,
					failKey   : failKey,
					backLink  : avsSession.linkBack,
				}),
				isLiveness           : true,
				showDetectedAgeNumber: false,
				verificationVersion  : verificationVersion,
				d                    : payload,
				sessionId            : sessionId,
				partnerColorConfig   : payloadParsed['userData']['colorConfig'],
				ipCountry            : ipCountry,
				deviceInfo           : uaParser(req.headers['user-agent']),
				countryAgeMajority   : config.countryAgeMajority,
			},
			debug: config.enableFrontEndDebug,
		});

	}

}
