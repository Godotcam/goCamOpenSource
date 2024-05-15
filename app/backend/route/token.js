"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const config_1 = require("../config");
const encryption_1 = require("../lib/encryption");
const random_1 = require("../lib/random");
const session_1 = require("../storage/session");
const uaParser = require('ua-parser-js');
const ROUTE_ROOT = '/token';
function load(app, storage) {
    app.get(ROUTE_ROOT, (req, res) => {
        return renderTokenPage(req, res, session_1.AvsStorageSession.VERIFICATION_STANDARD_V1);
    });
    app.get(ROUTE_ROOT + '/iframeRender', (req, res) => {
        return renderTokenPage(req, res, session_1.AvsStorageSession.VERIFICATION_IFRAME_V1);
    });
    app.get(ROUTE_ROOT + '/iframeCheck', (req, res) => {
        let isAgeVerified = typeof req.cookies['isAgeVerified'] != 'undefined';
        let verificationPayload = null;
        if (isAgeVerified) {
            verificationPayload = req.cookies['isAgeVerified'];
        }
        res.render('token/embedCheck.twig', {
            js: {
                isAgeVerified: isAgeVerified,
                verificationPayload: verificationPayload,
            }
        });
    });
    let renderTokenPage = (req, res, verificationVersion = 1) => {
        let payload = req.query['d'];
        if (typeof payload == 'undefined') {
            res.render('token/error.twig', {
                code: 30005,
                msg: 'Invalid payload',
            });
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
                msg: 'Invalid payload',
            });
            return;
        }
        let payloadParsed = payload ? encryption_1.AvsEncryption.decryptString(payload.toString()) : null;
        let successKey = random_1.AvsRandom.generateRandomString(32);
        let failKey = random_1.AvsRandom.generateRandomString(32);
        let sessionId = req.session.id;
        let ipCountry = 'FR';
        req.session.successKey = successKey;
        req.session.failKey = failKey;
        req.session.accessTime = +new Date();
        req.session.sessionStartId = avsSession.sessionId;
        req.session.payload = payload;
        res.render('token/index.twig', {
            js: {
                onDocumentReady: 'AvsToken.main',
                token: encryption_1.AvsEncryption.base64EncodeObject({
                    successKey: successKey,
                    failKey: failKey,
                    backLink: avsSession.linkBack,
                }),
                isLiveness: true,
                showDetectedAgeNumber: false,
                verificationVersion: verificationVersion,
                d: payload,
                sessionId: sessionId,
                partnerColorConfig: payloadParsed['userData']['colorConfig'],
                ipCountry: ipCountry,
                deviceInfo: uaParser(req.headers['user-agent']),
                countryAgeMajority: config_1.config.countryAgeMajority,
            },
            debug: config_1.config.enableFrontEndDebug,
        });
    };
}
exports.load = load;
