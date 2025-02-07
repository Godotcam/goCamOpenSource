const URL            = require("url");
const fs             = require('node:fs');
const path           = require('path');
const AvsNodejsSdkV1 = require('../lib/avsNodejsSdkV1');
const ROUTE_ROOT     = '/redirect';

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
			verificationVersion: AvsNodejsSdkV1.VERIFICATION_VERSION_STANDARD_V1,
			linkBack           : 'http://localhost:8000/redirect',
			callbackURL        : 'http://localhost:3300/callback',
			ipStr              : '127.0.0.1',
			// optional
			countryCode: 'FR',
			stateCode  : '',
		});

		let goCamRedirectUrl = avsSdk.toUrl();

		res.render('redirect.twig', {
			goCamRedirectUrl: goCamRedirectUrl
		});

	});

}

exports.load = load;
