"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const URL = require("url");
const encryption_1 = require("../lib/encryption");
const config_1 = require("../config");
const response_1 = require("../lib/response");
const session_1 = require("../storage/session");
const fs = require('node:fs');
const path = require('path');
function load(app, storage) {
    app.use((req, res, next) => {
        next();
    });
    app.get('/', (req, res) => {
        res.render('home/index.twig', {
            js: {
                onDocumentReady: 'AvsHome.main',
            }
        });
    });
    app.post('/getVerificationPayloadAndUrl', (req, res) => {
        let colorConfigBodyBackgroundInput = req.body['colorConfigBodyBackgroundInput'];
        let colorConfigBodyForegroundInput = req.body['colorConfigBodyForegroundInput'];
        let colorConfigButtonBackgroundInput = req.body['colorConfigButtonBackgroundInput'];
        let colorConfigButtonForegroundInput = req.body['colorConfigButtonForegroundInput'];
        let colorConfigButtonForegroundCTAInput = req.body['colorConfigButtonForegroundCTAInput'];
        let callbackUrl = req.body['callbackUrl'];
        if (colorConfigBodyBackgroundInput == undefined ||
            colorConfigBodyForegroundInput == undefined ||
            colorConfigButtonBackgroundInput == undefined ||
            colorConfigButtonForegroundInput == undefined ||
            colorConfigButtonForegroundCTAInput == undefined ||
            callbackUrl == undefined) {
            res.send(response_1.AvsResponse.errorResponse(30000, 'Invalid payload config'));
            return;
        }
        let userAgent = req.headers['user-agent'];
        let linkBack = '/';
        let userIpCountry = 'US';
        let userIpState = 'TX';
        let creationTimestamp = +new Date();
        let testPathRedirect = '/token';
        let testPathIframe = '/token/iframeCheck';
        let requestPayload = encryption_1.AvsEncryption.encryptObject({
            userData: {
                userId: 0,
                colorConfig: {
                    body: {
                        background: colorConfigBodyBackgroundInput,
                        foreground: colorConfigBodyForegroundInput,
                        button: {
                            background: colorConfigButtonBackgroundInput,
                            foreground: colorConfigButtonForegroundInput,
                            foregroundCallToAction: colorConfigButtonForegroundCTAInput,
                        }
                    }
                },
            },
            httpUserAgent: userAgent,
            websiteHostname: config_1.config.httpServerHost,
            httpParamList: {
                userAgent: userAgent,
                websiteHostname: config_1.config.httpServerHost,
                showDetectedAgeNumber: true,
            },
            verificationVersion: session_1.AvsStorageSession.VERIFICATION_IFRAME_V1,
            linkBack: linkBack,
            userIpCountry: userIpCountry,
            userIpState: userIpState,
            userIpStr: req.ip,
            callbackUrl: callbackUrl,
            creationTimestamp: creationTimestamp,
        });
        const urlToken = {
            protocol: config_1.config.httpServerProtocol,
            hostname: config_1.config.httpServerHost,
            port: config_1.config.httpServerPort,
            pathname: testPathRedirect,
            query: {
                d: requestPayload
            },
        };
        const urlTokenString = URL.format(urlToken);
        const urlIframe = {
            protocol: config_1.config.httpServerProtocol,
            hostname: config_1.config.httpServerHost,
            port: config_1.config.httpServerPort,
            pathname: testPathIframe,
            query: {
                d: requestPayload
            },
        };
        const urlIframeString = URL.format(urlIframe);
        res.send(response_1.AvsResponse.successResponse({
            payload: requestPayload,
            url: urlTokenString,
            iframeUrl: urlIframeString
        }));
    });
    app.post('/validateVerificationPayload', (req, res) => {
        let verificationPayload = req.body.verificationPayload;
        if (typeof verificationPayload == 'undefined') {
            res.send(response_1.AvsResponse.errorResponse(30001, 'Invalid payload'));
            return;
        }
        let payloadParsed = encryption_1.AvsEncryption.decryptString(verificationPayload);
        if (typeof payloadParsed.verificationResult == 'undefined') {
            res.send(response_1.AvsResponse.errorResponse(30002, 'Verification payload integrity check failed'));
            return;
        }
        if (payloadParsed.verificationResult.stateInt != session_1.AvsStorageSession.SESSION_STATE_SUCCESS) {
            res.send(response_1.AvsResponse.errorResponse(30003, 'Payload state invalid'));
            return;
        }
        res.send(response_1.AvsResponse.successResponse({
            sessionId: payloadParsed.verificationResult.sessionId,
        }));
    });
    app.post('/callback', (req, res) => {
        let responseString = JSON.stringify(req.body) + "\n";
        fs.appendFile(path.join(__dirname, './../../../log/callback.log'), responseString, (err) => {
            if (err) {
                res.send(response_1.AvsResponse.errorResponse(30004, 'Callback file log error: ' + err.toString()));
                return;
            }
            else {
                res.send(response_1.AvsResponse.successResponse());
                return;
            }
        });
    });
    app.get('/test', (req, res) => {
        res.send('test');
    });
    app.all('*', (req, res) => {
        res.send('404');
    });
}
exports.load = load;
