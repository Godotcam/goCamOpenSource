"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvsEncryption = void 0;
const config_1 = require("../config");
const crypto = require('crypto');
class AvsEncryption {
    static encryptObject(object) {
        const iv = crypto.randomBytes(16);
        let cipher = crypto.createCipheriv(config_1.config.encryption.algorithm, Buffer.from(config_1.config.encryption.key), iv);
        let encrypted = cipher.update(JSON.stringify(object));
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString('hex') + '|:' + encrypted.toString('hex');
    }
    static decryptString(encryptedString) {
        let encryptedStringParts = encryptedString.split(':');
        let iv = Buffer.from(encryptedStringParts[0], 'hex');
        let encryptedData = Buffer.from(encryptedStringParts[1], 'hex');
        let decipher = crypto.createDecipheriv(config_1.config.encryption.algorithm, Buffer.from(config_1.config.encryption.key), iv);
        let decrypted = decipher.update(encryptedData);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return JSON.parse(decrypted.toString());
    }
    static base64EncodeObject(object) {
        return Buffer.from(JSON.stringify(object)).toString('base64');
    }
    static base64DecodeString(encryptedString) {
        return JSON.parse(Buffer.from(encryptedString, 'base64').toString('ascii'));
    }
}
exports.AvsEncryption = AvsEncryption;
