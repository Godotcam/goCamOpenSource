import Express = require('express');
import URL = require('url');
import {AvsEncryption}     from '../lib/encryption';
import {config}            from "../config";
import {AvsResponse}       from "../lib/response";
import {AvsStorageSession} from "../storage/session";

const fs   = require('node:fs');
const path = require('path');

export function load(app: Express.Application, storage: AvsStorageSession) {

	app.use((req: Express.Request, res: Express.Response, next: Function) => {
		next();
	});

	app.get('/', (req: Express.Request, res: Express.Response) => {

		res.render('home/index.twig', {
			js: {
				onDocumentReady: 'AvsHome.main',
			}
		});

	});

	app.post('/getVerificationPayloadAndUrl', (req: Express.Request, res: Express.Response) => {

		let colorConfigBodyBackgroundInput      = req.body['colorConfigBodyBackgroundInput'];
		let colorConfigBodyForegroundInput      = req.body['colorConfigBodyForegroundInput'];
		let colorConfigButtonBackgroundInput    = req.body['colorConfigButtonBackgroundInput'];
		let colorConfigButtonForegroundInput    = req.body['colorConfigButtonForegroundInput'];
		let colorConfigButtonForegroundCTAInput = req.body['colorConfigButtonForegroundCTAInput'];
		let callbackUrl                         = req.body['callbackUrl'];

		if (
			colorConfigBodyBackgroundInput == undefined ||
			colorConfigBodyForegroundInput == undefined ||
			colorConfigButtonBackgroundInput == undefined ||
			colorConfigButtonForegroundInput == undefined ||
			colorConfigButtonForegroundCTAInput == undefined ||
			callbackUrl == undefined
		) {
			res.send(AvsResponse.errorResponse(30000, 'Invalid payload config'));
			return;
		}

		let userAgent         = req.headers['user-agent'];
		let linkBack          = '/';
		let userIpCountry     = 'US';
		let userIpState       = 'TX';
		let creationTimestamp = +new Date();
		let testPathRedirect  = '/token';
		let testPathIframe    = '/token/iframeCheck';

		let requestPayload = AvsEncryption.encryptObject(
			{
				userData           : {
					userId: 0,
					colorConfig: {
						body: {
							background: colorConfigBodyBackgroundInput,
							foreground: colorConfigBodyForegroundInput,
							button    : {
								background            : colorConfigButtonBackgroundInput,
								foreground            : colorConfigButtonForegroundInput,
								foregroundCallToAction: colorConfigButtonForegroundCTAInput,
							}
						}
					},
				},
				httpUserAgent      : userAgent,
				websiteHostname    : config.httpServerHost,
				httpParamList      : {
					userAgent            : userAgent,
					websiteHostname      : config.httpServerHost,
					showDetectedAgeNumber: true,
				},
				verificationVersion: AvsStorageSession.VERIFICATION_IFRAME_V1,
				linkBack           : linkBack,
				userIpCountry      : userIpCountry,
				userIpState        : userIpState,
				userIpStr          : req.ip,
				callbackUrl        : callbackUrl,
				creationTimestamp  : creationTimestamp,
			}
		);

		const urlToken       = {
			protocol: config.httpServerProtocol,
			hostname: config.httpServerHost,
			port    : config.httpServerPort,
			pathname: testPathRedirect,
			query   : {
				d: requestPayload
			},
		};
		const urlTokenString = URL.format(urlToken);

		const urlIframe       = {
			protocol: config.httpServerProtocol,
			hostname: config.httpServerHost,
			port    : config.httpServerPort,
			pathname: testPathIframe,
			query   : {
				d: requestPayload
			},
		};
		const urlIframeString = URL.format(urlIframe);

		res.send(AvsResponse.successResponse({
			payload  : requestPayload,
			url      : urlTokenString,
			iframeUrl: urlIframeString
		}));

	});

	app.post('/validateVerificationPayload', (req: Express.Request, res: Express.Response) => {

		let verificationPayload = req.body.verificationPayload;

		if (typeof verificationPayload == 'undefined') {
			res.send(AvsResponse.errorResponse(30001, 'Invalid payload'));
			return;
		}

		let payloadParsed = AvsEncryption.decryptString(verificationPayload);
		if (typeof payloadParsed.verificationResult == 'undefined') {
			res.send(AvsResponse.errorResponse(30002, 'Verification payload integrity check failed'));
			return;
		}

		if (payloadParsed.verificationResult.stateInt != AvsStorageSession.SESSION_STATE_SUCCESS) {
			res.send(AvsResponse.errorResponse(30003, 'Payload state invalid'));
			return;
		}

		res.send(AvsResponse.successResponse({
			sessionId: payloadParsed.verificationResult.sessionId,
		}));

	});

	app.post('/callback', (req: Express.Request, res: Express.Response) => {

		let responseString = JSON.stringify(req.body) + "\n";
		fs.appendFile(
			path.join(__dirname, './../../../log/callback.log'),
			responseString,
			(err: Error) => {
				if (err) {
					res.send(AvsResponse.errorResponse(30004, 'Callback file log error: ' + err.toString()));
					return;
				}
				else {
					res.send(AvsResponse.successResponse());
					return;
				}
			}
		);

	});

	app.get('/test', (req: Express.Request, res: Express.Response) => {
		res.send('test');
	});

	app.all('*', (req: Express.Request, res: Express.Response) => {
		res.send('404');
	});

}
