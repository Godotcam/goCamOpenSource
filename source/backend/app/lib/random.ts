const Crypto = require('crypto');

export class AvsRandom {

	static generateRandomString(length = 16) {

		return Crypto
			.randomBytes(length)
			.toString('base64')
			.slice(0, length);

	}

}
