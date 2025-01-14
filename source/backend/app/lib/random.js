"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvsRandom = void 0;
const Crypto = require('crypto');
class AvsRandom {
    static generateRandomString(length = 16) {
        return Crypto
            .randomBytes(length)
            .toString('base64')
            .slice(0, length);
    }
}
exports.AvsRandom = AvsRandom;
