import {config} from "../config";

const crypto = require('crypto');

export class AvsEncryption {

	static encryptObject(object: Object): string {

		const iv   = crypto.randomBytes(16);
		let cipher = crypto.createCipheriv(
			config.encryption.algorithm,
			Buffer.from(config.encryption.key),
			iv
		);

		let encrypted = cipher.update(
			JSON.stringify(object)
		);

		encrypted = Buffer.concat([encrypted, cipher.final()]);

		return iv.toString('hex') + '|:' + encrypted.toString('hex');

	}

	static decryptString(encryptedString: string): any {

		let encryptedStringParts = encryptedString.split(':');

		let iv            = Buffer.from(encryptedStringParts[0], 'hex');
		let encryptedData = Buffer.from(encryptedStringParts[1], 'hex');

		let decipher = crypto.createDecipheriv(
			config.encryption.algorithm,
			Buffer.from(config.encryption.key),
			iv
		);

		let decrypted = decipher.update(encryptedData);
		decrypted     = Buffer.concat([decrypted, decipher.final()]);

		return JSON.parse(decrypted.toString());

	}

	static base64EncodeObject(object: Object): string {

		return Buffer.from(
			JSON.stringify(object)
		).toString('base64');

	}

	static base64DecodeString(encryptedString: string): any {

		return JSON.parse(
			Buffer.from(
				encryptedString,
				'base64'
			).toString('ascii')
		);

	}

}
