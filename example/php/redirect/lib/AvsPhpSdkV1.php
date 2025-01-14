<?php

class AvsPhpSdkV1 {

	const AVS_URL = 'http://localhost:3300';

	const VERIFICATION_VERSION_STANDARD_V1 = 1;
	const VERIFICATION_VERSION_IFRAME_V1   = 2;

	const KEY_ACCOUNT_ID           = 'userId';
	const KEY_ACCOUNT_DATA         = 'userData';
	const KEY_USER_IP_STR          = 'userIpStr';
	const KEY_USER_IP_COUNTRY      = 'userIpCountry';
	const KEY_HTTP_USER_AGENT      = 'userAgent';
	const KEY_HTTP_LINK_BACK       = 'linkBack';
	const KEY_HTTP_CALLBACK_URL    = 'callbackUrl';
	const KEY_WEBSITE_HOSTNAME     = 'websiteHostname';
	const KEY_HTTP_PARAM_LIST      = 'httpParamList';
	const KEY_VERIFICATION_VERSION = 'verificationVersion';
	const KEY_VERIFICATION_RESULT  = 'verificationResult';
	const KEY_USER_IP_STATE        = 'userIpState';

	const HMAC_ALGO = 'sha256';

	// hmac sha256: 32 bytes
	const HMAC_SIZE = 32;

	const CIPHER_ALGO = 'aes-256-cbc';

	public $userId;
	public $userData;
	public $userIpStr;
	public $creationTimestamp;
	public $userIpCountry;
	public $userIpState;
	public $httpUserAgent;
	public $linkBack;
	public $callbackUrl;

	public $verificationVersion;
	public $websiteHostname;
	public $httpParamList;
	public $verificationResult;

	public $requestTime;

	protected $cipherKey;

	public function __construct($cipherKey) {
		$this->cipherKey = $cipherKey;
	}

	public function fillRequest($requestList) {

		$paramList = array();
		if (isset($requestList['httpParamList']['paramList'])) {
			$paramList = $requestList['httpParamList']['paramList'];
		}

		$ipStr       = isset($requestList['ipStr']) ? $requestList['ipStr'] : '';
		$countryCode = isset($requestList['countryCode']) ? $requestList['countryCode'] : '';
		$stateCode   = isset($requestList['stateCode']) ? $requestList['stateCode'] : '';

		$verificationVersion = (isset($requestList['verificationVersion']) ? $requestList['verificationVersion'] : self::VERIFICATION_VERSION_STANDARD_V1);

		$this->userId              = $requestList['userData']['userId'];
		$this->userData            = $requestList['userData'];
		$this->httpUserAgent       = $requestList['httpParamList']['userAgent'];
		$this->websiteHostname     = $requestList['httpParamList']['websiteHostname'];
		$this->httpParamList       = $paramList;
		$this->linkBack            = $requestList['linkBack'];
		$this->callbackUrl         = $requestList['callbackUrl'];
		$this->verificationVersion = $verificationVersion;
		$this->userIpCountry       = $countryCode;
		$this->userIpState         = $stateCode;
		$this->userIpStr           = $ipStr;
		$this->creationTimestamp   = time();

	}

	public function toArray() {

		$dataList = array(
			'requestTime' => time()
		);

		if (!empty($this->userId)) {
			$dataList[self::KEY_ACCOUNT_ID] = $this->userId;
		}

		if (empty($this->userData)) {
			throw new Exception('userData payload is mandatory');
		}

		$dataList[self::KEY_ACCOUNT_DATA] = $this->userData;

		$nbIpField = 0;
		if (!empty($this->userIpStr)) {
			$dataList[self::KEY_USER_IP_STR] = $this->userIpStr;
			$nbIpField++;
		}

		if (empty($nbIpField)) {
			throw new Exception('Ip information missing');
		}

		if (!empty($this->userIpCountry)) {
			$dataList[self::KEY_USER_IP_COUNTRY] = $this->userIpCountry;
		}

		if (!empty($this->userIpState)) {
			$dataList[self::KEY_USER_IP_STATE] = $this->userIpState;
		}

		if (!empty($this->httpUserAgent)) {
			$dataList[self::KEY_HTTP_USER_AGENT] = $this->httpUserAgent;
		}

		if (!empty($this->linkBack)) {
			$dataList[self::KEY_HTTP_LINK_BACK] = $this->linkBack;
		}

		if (!empty($this->callbackUrl)) {
			$dataList[self::KEY_HTTP_CALLBACK_URL] = $this->callbackUrl;
		}

		if (!empty($this->verificationVersion)) {
			$dataList[self::KEY_VERIFICATION_VERSION] = $this->verificationVersion;
		}

		if (!empty($this->websiteHostname)) {
			$dataList[self::KEY_WEBSITE_HOSTNAME] = $this->websiteHostname;
		}

		if (!empty($this->httpParamList)) {
			$dataList[self::KEY_HTTP_PARAM_LIST] = $this->httpParamList;
		}

		if (!empty($this->verificationResult)) {
			$dataList[self::KEY_VERIFICATION_RESULT] = $this->verificationResult;
		}

		return $dataList;
	}

	public function fromArray($data) {

		if (!empty($data[self::KEY_ACCOUNT_ID])) {
			$this->userId = intval($data[self::KEY_ACCOUNT_ID]);
		}

		if (!empty($data[self::KEY_ACCOUNT_DATA])) {
			$this->userData = $data[self::KEY_ACCOUNT_DATA];
		}

		if (!empty($data[self::KEY_HTTP_LINK_BACK])) {
			$this->linkBack = $data[self::KEY_HTTP_LINK_BACK];
		}

		if (!empty($data[self::KEY_HTTP_CALLBACK_URL])) {
			$this->callbackUrl = $data[self::KEY_HTTP_CALLBACK_URL];
		}

		if (!empty($data[self::KEY_VERIFICATION_VERSION])) {
			$this->verificationVersion = $data[self::KEY_VERIFICATION_VERSION];
		}

		if (!empty($data[self::KEY_WEBSITE_HOSTNAME])) {
			$this->websiteHostname = $data[self::KEY_WEBSITE_HOSTNAME];
		}

		if (!empty($data[self::KEY_HTTP_PARAM_LIST])) {
			$this->httpParamList = $data[self::KEY_HTTP_PARAM_LIST];
		}

		if (!empty($data[self::KEY_HTTP_USER_AGENT])) {
			$this->httpUserAgent = $data[self::KEY_HTTP_USER_AGENT];
		}

		if (!empty($data[self::KEY_USER_IP_STR])) {
			$this->userIpStr = $data[self::KEY_USER_IP_STR];
		}

		if (!empty($data[self::KEY_VERIFICATION_RESULT])) {
			$this->verificationResult = $data[self::KEY_VERIFICATION_RESULT];
		}

		if (empty($this->userIpStr)) {
			return false;
		}

		if (!empty($data[self::KEY_USER_IP_COUNTRY])) {
			$this->userIpCountry = $data[self::KEY_USER_IP_COUNTRY];
		}

		if (!empty($data[self::KEY_USER_IP_STATE])) {
			$this->userIpState = $data[self::KEY_USER_IP_STATE];
		}

		if (empty($data['requestTime'])) {
			return false;
		}

		if (empty($data['requestTime'])) {
			return false;
		}

		$this->requestTime = intval($data['requestTime']);

		if ($this->requestTime < 30000) {
			return false;
		}

		return true;

	}

	public function toPayload() {

		$object     = $this->toArray();
		$iv         = openssl_random_pseudo_bytes(16);
		$jsonString = json_encode($object);

		$encrypted = openssl_encrypt(
			$jsonString,
			self::CIPHER_ALGO,
			$this->cipherKey,
			OPENSSL_RAW_DATA,
			$iv
		);

		return bin2hex($iv) . '|:' . bin2hex($encrypted);

	}

	function fromPayload($payloadBase64) {

		list($ivHex, $encryptedDataHex) = explode('|:', $payloadBase64);

		$iv            = hex2bin($ivHex);
		$encryptedData = hex2bin($encryptedDataHex);

		$decrypted = openssl_decrypt(
			$encryptedData,
			self::CIPHER_ALGO,
			$this->cipherKey,
			OPENSSL_RAW_DATA,
			$iv
		);

		$dataList = json_decode($decrypted, true);

		if (!isset($dataList) || ($dataList === false)) {
			return false;
		}

		return $this->fromArray($dataList);
	}

	public function toUrl($avsUrl = null) {

		if (empty($avsUrl)) {
			$avsUrl = self::AVS_URL;
		}

		return $avsUrl . '/token/?d=' . urlencode($this->toPayload());
	}

	public function toIframeUrl($avsUrl = null) {

		if (empty($avsUrl)) {
			$avsUrl = self::AVS_URL;
		}

		return $avsUrl . '/token/iframeCheck?d=' . urlencode($this->toPayload());
	}

	private function base64UrlEncode($dataRaw) {
		return strtr(str_replace('=', '', base64_encode($dataRaw)), '+/', '-_');
	}

}
