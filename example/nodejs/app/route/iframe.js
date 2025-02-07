const URL            = require("url");
const fs             = require('node:fs');
const path           = require('path');
const AvsNodejsSdkV1 = require('../lib/avsNodejsSdkV1');
const ROUTE_ROOT     = '/iframe';

function load(app, appConfig) {

	app.get(ROUTE_ROOT, (req, res) => {

		const avsSdk = new AvsNodejsSdkV1(appConfig.cipherKey);

		avsSdk.fillRequest({
			userData           : {
				// optional
				userId: 123,
				// optional
				colorConfig: {
					body: {
						background: '#ffffff',
						foreground: '#000000',
						button    : {
							background            : '#9acd1f',
							foreground            : '#ffffff',
							foregroundCallToAction: '#ffffff',
						}
					}
				}
			},
			httpParamList      : {
				userAgent      : 'Mozilla/5.0',
				websiteHostname: 'example.com',
				paramList      : {
					// optional
					showDetectedAgeNumber: false
				}
			},
			verificationVersion: AvsNodejsSdkV1.VERIFICATION_VERSION_IFRAME_V1,
			linkBack           : 'http://localhost:8000/iframe',
			callbackURL        : 'http://localhost:3300/callback',
			ipStr              : '127.0.0.1',
			// optional
			countryCode: 'FR',
			stateCode  : '',
		});

		let goCamIframeUrl = avsSdk.toIframeUrl();

		res.render('iframe.twig', {
			goCamIframeUrl: goCamIframeUrl
		});

	});

	app.post(ROUTE_ROOT + '/payloadIntegrityCheck', (req, res) => {

		const verificationPayload = req.body.verificationResultPayload;
		if (typeof verificationPayload == 'undefined') {
			res.send({
				error: {
					code: 10000,
					msg : 'Invalid verification payload'
				}
			});
			return;
		}

		const avsSdk = new AvsNodejsSdkV1(appConfig.cipherKey);

		const payloadParsed = avsSdk.fromPayload(verificationPayload);
		if (!payloadParsed) {
			res.send({
				error: {
					code: 10001,
					msg : 'Invalid verification payload'
				}
			});
			return;
		}

		if (avsSdk.verificationResult['state'] === 'success') {
			res.send({
				success  : 1,
				sessionId: avsSdk.verificationResult['sessionId']
			});
			return;
		}

		res.send({
			error: {
				code: 10002,
				msg : 'Payload integrity check failed'
			}
		});


	});

}

exports.load = load;
