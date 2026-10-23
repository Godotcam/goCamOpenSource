import Express from 'express';
import fs from 'node:fs';
import path from 'path';
import url from 'url';
import { config } from "../config";
import { AvsEncryption } from '../lib/encryption';
import { AvsResponse } from "../lib/response";
import { AvsStorageSession } from "../storage/session";

export function load(app: Express.Application, storage: AvsStorageSession) {

	app.use((req: Express.Request, res: Express.Response, next: Function) => {

		res.setHeader('Permissions-Policy', 'publickey-credentials-get=(self), publickey-credentials-create=(self), camera=(self)');

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
		let demoPageUrl                         = req.body['demoPageUrl'];

		let demoPageUrlInstance: URL;
		try {
			demoPageUrlInstance = new URL(demoPageUrl || `${config.httpServerProtocol}://${config.httpServerHost}`);
			const callback = new URL(callbackUrl);
			const allowed = config.callbackAllowedOrigins.includes(callback.origin) ||
				(callback.protocol === 'https:' && !callback.port && config.callbackAllowedHostSuffixes.some(
					suffix => suffix.startsWith('.') && callback.hostname.endsWith(suffix)
				));
			if (config.apiIntegration && (!allowed || callback.username || callback.password)) {
				res.status(400).send(AvsResponse.errorResponse(30000, 'Callback origin is not allowed'));
				return;
			}
		} catch {
			res.status(400).send(AvsResponse.errorResponse(30000, 'Invalid verification URL configuration'));
			return;
		}

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

		const sessionId = storage.getUniqueId();
		let requestPayload = AvsEncryption.encryptObject(
			{
				sessionId,
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
					verificationTypeList : ['selfie', 'scanId'],
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
			protocol: demoPageUrlInstance.protocol,
			hostname: demoPageUrlInstance.hostname,
			port    : demoPageUrlInstance.port,
			pathname: testPathRedirect,
			query   : {
				d: requestPayload
			},
		};
		const urlTokenString = url.format(urlToken);

		const urlIframe       = {
			protocol: demoPageUrlInstance.protocol,
			hostname: demoPageUrlInstance.hostname,
			port    : demoPageUrlInstance.port,
			pathname: testPathIframe,
			query   : {
				d: requestPayload
			},
		};
		const urlIframeString = url.format(urlIframe);

		res.send(AvsResponse.successResponse({
			payload  : config.apiIntegration ? JSON.stringify({ sessionId }) : requestPayload,
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
			(err: any) => {
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
