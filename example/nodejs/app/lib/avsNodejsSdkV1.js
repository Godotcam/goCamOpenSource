const crypto = require('crypto');

class AvsNodeSdkV1 {
	static AVS_URL = 'http://localhost:3300';

	static VERIFICATION_VERSION_STANDARD_V1 = 1;
	static VERIFICATION_VERSION_IFRAME_V1 = 2;

	static KEY_ACCOUNT_ID = 'userId';
	static KEY_ACCOUNT_DATA = 'userData';
	static KEY_USER_IP_STR = 'userIpStr';
	static KEY_USER_IP_COUNTRY = 'userIpCountry';
	static KEY_HTTP_USER_AGENT = 'userAgent';
	static KEY_HTTP_LINK_BACK = 'linkBack';
	static KEY_HTTP_CALLBACK_URL = 'callbackUrl';
	static KEY_WEBSITE_HOSTNAME = 'websiteHostname';
	static KEY_HTTP_PARAM_LIST = 'httpParamList';
	static KEY_VERIFICATION_VERSION = 'verificationVersion';
	static KEY_VERIFICATION_RESULT = 'verificationResult';
	static KEY_USER_IP_STATE = 'userIpState';

	static HMAC_ALGO = 'sha256';
	static HMAC_SIZE = 32; // 32 bytes for sha256 - not specifically used in code
	static CIPHER_ALGO = 'aes-256-cbc';

	constructor(cipherKey) {
		this.cipherKey = cipherKey;

		this.userId = null;
		this.userData = null;
		this.userIpStr = null;
		this.creationTimestamp = null;
		this.userIpCountry = null;
		this.userIpState = null;
		this.httpUserAgent = null;
		this.linkBack = null;
		this.callbackUrl = null;
		this.verificationVersion = null;
		this.websiteHostname = null;
		this.httpParamList = null;
		this.verificationResult = null;
		this.requestTime = null;
	}

	/**
	 * fillRequest
	 *
	 * Mirrors the behavior of the PHP fillRequest method.
	 */
	fillRequest(requestList) {
		const paramList =
			      requestList.httpParamList &&
			      requestList.httpParamList.paramList
				      ? requestList.httpParamList.paramList
				      : [];

		const ipStr = requestList.ipStr || '';
		const countryCode = requestList.countryCode || '';
		const stateCode = requestList.stateCode || '';

		const verificationVersion =
			      typeof requestList.verificationVersion !== 'undefined'
				      ? requestList.verificationVersion
				      : AvsNodeSdkV1.VERIFICATION_VERSION_STANDARD_V1;

		this.userId = requestList.userData.userId;
		this.userData = requestList.userData;
		this.httpUserAgent = requestList.httpParamList.userAgent;
		this.websiteHostname = requestList.httpParamList.websiteHostname;
		this.httpParamList = paramList;
		this.linkBack = requestList.linkBack;
		this.callbackUrl = requestList.callbackUrl;
		this.verificationVersion = verificationVersion;
		this.userIpCountry = countryCode;
		this.userIpState = stateCode;
		this.userIpStr = ipStr;
		this.creationTimestamp = Math.floor(Date.now() / 1000);
	}

	/**
	 * toArray
	 *
	 * Creates an object of all the relevant fields to be encrypted/serialized.
	 */
	toArray() {
		const dataList = {
			requestTime: Math.floor(Date.now() / 1000),
		};

		if (this.userId) {
			dataList[AvsNodeSdkV1.KEY_ACCOUNT_ID] = this.userId;
		}

		if (!this.userData) {
			throw new Error('userData payload is mandatory');
		}

		dataList[AvsNodeSdkV1.KEY_ACCOUNT_DATA] = this.userData;

		let nbIpField = 0;
		if (this.userIpStr) {
			dataList[AvsNodeSdkV1.KEY_USER_IP_STR] = this.userIpStr;
			nbIpField++;
		}

		if (!nbIpField) {
			throw new Error('Ip information missing');
		}

		if (this.userIpCountry) {
			dataList[AvsNodeSdkV1.KEY_USER_IP_COUNTRY] = this.userIpCountry;
		}

		if (this.userIpState) {
			dataList[AvsNodeSdkV1.KEY_USER_IP_STATE] = this.userIpState;
		}

		if (this.httpUserAgent) {
			dataList[AvsNodeSdkV1.KEY_HTTP_USER_AGENT] = this.httpUserAgent;
		}

		if (this.linkBack) {
			dataList[AvsNodeSdkV1.KEY_HTTP_LINK_BACK] = this.linkBack;
		}

		if (this.callbackUrl) {
			dataList[AvsNodeSdkV1.KEY_HTTP_CALLBACK_URL] = this.callbackUrl;
		}

		if (this.verificationVersion) {
			dataList[AvsNodeSdkV1.KEY_VERIFICATION_VERSION] = this.verificationVersion;
		}

		if (this.websiteHostname) {
			dataList[AvsNodeSdkV1.KEY_WEBSITE_HOSTNAME] = this.websiteHostname;
		}

		if (this.httpParamList) {
			dataList[AvsNodeSdkV1.KEY_HTTP_PARAM_LIST] = this.httpParamList;
		}

		if (this.verificationResult) {
			dataList[AvsNodeSdkV1.KEY_VERIFICATION_RESULT] = this.verificationResult;
		}

		return dataList;
	}

	/**
	 * fromArray
	 *
	 * Fills in the class properties from the given object.
	 */
	fromArray(data) {
		if (data[AvsNodeSdkV1.KEY_ACCOUNT_ID]) {
			this.userId = parseInt(data[AvsNodeSdkV1.KEY_ACCOUNT_ID], 10);
		}

		if (data[AvsNodeSdkV1.KEY_ACCOUNT_DATA]) {
			this.userData = data[AvsNodeSdkV1.KEY_ACCOUNT_DATA];
		}

		if (data[AvsNodeSdkV1.KEY_HTTP_LINK_BACK]) {
			this.linkBack = data[AvsNodeSdkV1.KEY_HTTP_LINK_BACK];
		}

		if (data[AvsNodeSdkV1.KEY_HTTP_CALLBACK_URL]) {
			this.callbackUrl = data[AvsNodeSdkV1.KEY_HTTP_CALLBACK_URL];
		}

		if (data[AvsNodeSdkV1.KEY_VERIFICATION_VERSION]) {
			this.verificationVersion = data[AvsNodeSdkV1.KEY_VERIFICATION_VERSION];
		}

		if (data[AvsNodeSdkV1.KEY_WEBSITE_HOSTNAME]) {
			this.websiteHostname = data[AvsNodeSdkV1.KEY_WEBSITE_HOSTNAME];
		}

		if (data[AvsNodeSdkV1.KEY_HTTP_PARAM_LIST]) {
			this.httpParamList = data[AvsNodeSdkV1.KEY_HTTP_PARAM_LIST];
		}

		if (data[AvsNodeSdkV1.KEY_HTTP_USER_AGENT]) {
			this.httpUserAgent = data[AvsNodeSdkV1.KEY_HTTP_USER_AGENT];
		}

		if (data[AvsNodeSdkV1.KEY_USER_IP_STR]) {
			this.userIpStr = data[AvsNodeSdkV1.KEY_USER_IP_STR];
		}

		if (data[AvsNodeSdkV1.KEY_VERIFICATION_RESULT]) {
			this.verificationResult = data[AvsNodeSdkV1.KEY_VERIFICATION_RESULT];
		}

		if (!this.userIpStr) {
			return false;
		}

		if (data[AvsNodeSdkV1.KEY_USER_IP_COUNTRY]) {
			this.userIpCountry = data[AvsNodeSdkV1.KEY_USER_IP_COUNTRY];
		}

		if (data[AvsNodeSdkV1.KEY_USER_IP_STATE]) {
			this.userIpState = data[AvsNodeSdkV1.KEY_USER_IP_STATE];
		}

		if (!data.requestTime) {
			return false;
		}
		this.requestTime = parseInt(data.requestTime, 10);

		// Just matching the same constraint logic from PHP
		if (this.requestTime < 30000) {
			return false;
		}

		return true;
	}

	/**
	 * toPayload
	 *
	 * Returns an encrypted payload string that includes the IV and encrypted data in hex form.
	 */
	toPayload() {
		const object = this.toArray();
		const iv = crypto.randomBytes(16);
		const jsonString = JSON.stringify(object);

		// Encrypt using AES-256-CBC
		const cipher = crypto.createCipheriv(AvsNodeSdkV1.CIPHER_ALGO, this.cipherKey, iv);
		const encryptedBuffer = Buffer.concat([
			cipher.update(jsonString, 'utf8'),
			cipher.final(),
		]);

		// Combine IV and encrypted data (both in hex)
		return (
			iv.toString('hex') +
			'|:' +
			encryptedBuffer.toString('hex')
		);
	}

	/**
	 * fromPayload
	 *
	 * Decrypts the payload string and populates the class properties.
	 */
	fromPayload(payloadHex) {
		const [ivHex, encryptedDataHex] = payloadHex.split('|:');
		if (!ivHex || !encryptedDataHex) {
			return false;
		}

		const iv = Buffer.from(ivHex, 'hex');
		const encryptedData = Buffer.from(encryptedDataHex, 'hex');

		try {
			const decipher = crypto.createDecipheriv(
				AvsNodeSdkV1.CIPHER_ALGO,
				this.cipherKey,
				iv
			);
			const decrypted = Buffer.concat([
				decipher.update(encryptedData),
				decipher.final(),
			]);
			const dataList = JSON.parse(decrypted.toString('utf8'));
			if (!dataList) return false;

			return this.fromArray(dataList);
		} catch (err) {
			return false;
		}
	}

	/**
	 * toUrl
	 *
	 * Returns a token URL adding the encrypted payload as query param 'd'.
	 */
	toUrl(avsUrl = null) {
		if (!avsUrl) {
			avsUrl = AvsNodeSdkV1.AVS_URL;
		}
		return `${avsUrl}/token/?d=${encodeURIComponent(this.toPayload())}`;
	}

	/**
	 * toIframeUrl
	 *
	 * Returns a token iFrame URL adding the encrypted payload as query param 'd'.
	 */
	toIframeUrl(avsUrl = null) {
		if (!avsUrl) {
			avsUrl = AvsNodeSdkV1.AVS_URL;
		}
		return `${avsUrl}/token/iframeCheck?d=${encodeURIComponent(this.toPayload())}`;
	}

	/**
	 * base64UrlEncode (private helper)
	 *
	 * Not specifically used in the rest of the code, but included for parity with PHP's approach.
	 */
	base64UrlEncode(dataRaw) {
		return Buffer.from(dataRaw)
			.toString('base64')
			.replace(/=/g, '')
			.replace(/\+/g, '-')
			.replace(/\//g, '_');
	}
}

module.exports = AvsNodeSdkV1;
