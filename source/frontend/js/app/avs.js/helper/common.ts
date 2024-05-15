namespace Avs {

	export namespace Helper {

		/**
		 * A collection of common used methods
		 *
		 */
		export class Common {

			public static isCanvasSupported(): boolean {
				let el = document.createElement('canvas');
				return !!(el.getContext && el.getContext('2d'));
			}

			public static isWebrtcSupported(): boolean {

				let isSupported    = false;
				let methodsToCheck = [
					'RTCPeerConnection',
					'webkitRTCPeerConnection',
					'mozRTCPeerConnection',
					'RTCIceGatherer'
				];

				for (let i = 0, j = methodsToCheck.length; i < j; i++) {
					if (methodsToCheck[i] in window) {
						isSupported = true;
						break;
					}
				}

				return isSupported;

			}

			public static getStreamDevices(callback: Function) {

				let logger = new Debug.Log();

				let devices: IGenericObject = {
					audioinput : [],
					videoinput : [],
					audiooutput: []
				};

				navigator.mediaDevices.getUserMedia({video: true}).then(
					() => {

						navigator.mediaDevices.enumerateDevices().then(
							(data: MediaDeviceInfo[]) => {

								for (let deviceIndex in data) {

									let device = data[deviceIndex];

									devices[device.kind].push({
										id     : device.deviceId,
										label  : device.label,
										default: device.deviceId == 'default'
									});

								}

								return callback(devices);

							},
							(error: Error) => {
								logger.error(25008, 'Could not enumerate user devices.');
								return callback(null);
							}
						);

					},
					(error: Error) => {
						logger.error(25009, 'Could not access user media.');
						return callback(null);
					}
				);


			}

			public static hasCameraFacingMode(facingMode: string, callback: Function) {

				navigator.mediaDevices.getUserMedia({
					audio: true,
					video: {
						facingMode: {exact: facingMode}
					}
				}).then(
					() => {
						callback(true);
					},
					(error: Error) => {
						callback(false);
					});

			}

			public static cloneObject(obj: any): Object {

				if (null == obj || "object" != typeof obj) {
					return obj;
				}

				let copy = obj.constructor();

				for (let attr in obj) {
					if (obj.hasOwnProperty(attr)) {
						copy[attr] = obj[attr];
					}
				}

				return copy;

			}

			public static getCurrentDate(): string {

				let date = new Date();

				// let day = date.getDate();
				// let month = date.getMonth() + 1;
				// let year = date.getFullYear();
				let hours   = date.getHours();
				let minutes = date.getMinutes();
				// let seconds = date.getSeconds();
				let amPm    = hours >= 12 ? 'PM' : 'AM';

				return hours + ':' + minutes + ' ' + amPm;

			}

			public static getDateInfo(): Object {

				let userDate = new Date();
				let gmtDate  = userDate.toUTCString();

				return {userDate, gmtDate};

			}

			public static formatDate(date: Date): string {

				// let day = date.getDate();
				// let month = date.getMonth() + 1;
				// let year = date.getFullYear();
				let hours   = date.getHours();
				let minutes = date.getMinutes();
				// let seconds = date.getSeconds();
				let amPm    = hours >= 12 ? 'PM' : 'AM';

				return hours + ':' + minutes + ' ' + amPm;

			}

			public static parseURL(url: string) {

				let parser            = document.createElement('a');
				let searchObject: any = {};
				let queries: any;
				let split: any;
				let i: number;

				// Let the browser do the work
				parser.href = url;

				// Convert query string to object
				queries = parser.search.replace(/^\?/, '').split('&');
				for (i = 0; i < queries.length; i++) {
					split                  = queries[i].split('=');
					searchObject[split[0]] = split[1];
				}
				return {
					protocol    : parser.protocol,
					host        : parser.host,
					hostname    : parser.hostname,
					port        : parser.port,
					pathname    : parser.pathname,
					search      : parser.search,
					searchObject: searchObject,
					hash        : parser.hash
				};
			}

			public static escapeRegExp(regexString: string) {
				return regexString.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			}

			public static isMobileResolution() {

				return $(window).width() < 640;

			}

			public static isIos() {

				return /iPad|iPhone|iPod/.test(navigator.userAgent);

			}

			public static getCurrentTimestamp(): number {

				return +new Date();

			}

			public static getCurrentTimestampSeconds(): number {

				return parseInt((+new Date() / 1000).toFixed());

			}

			public static setLocalStorageValue(localStorageIndex: string, localStorageValue: any): boolean {

				if (typeof localStorageValue === 'undefined' || localStorageValue === null) {
					Debug.Log.genericLog('Invalid local storage value: ', localStorageIndex, localStorageValue);
					return false;
				}

				try {
					localStorage.setItem(localStorageIndex, localStorageValue);
				}
				catch (e) {
					Debug.Log.genericLog('Could not store local storage value: ', localStorageIndex, localStorageValue, e);
					return false;
				}

				return true;

			}

			public static getLocalStorageValue(localStorageIndex: string) {

				let localStorageValue = null;

				try {
					localStorageValue = localStorage.getItem(localStorageIndex);
				}
				catch (e) {
					Debug.Log.genericLog('Could not get local storage value: ', localStorageIndex, e);
				}

				return localStorageValue;

			}

			public static getLocalStorageDecodedValue(localStorageIndex: string) {

				return Common.getLocalStorageBooleanValue(localStorageIndex);

			}

			public static getLocalStorageBooleanValue(localStorageIndex: string) {

				let localStorageValue       = Common.getLocalStorageValue(localStorageIndex);
				let localStorageParsedValue = null;

				if (localStorageValue !== null) {
					try {
						localStorageParsedValue = JSON.parse(localStorageValue);
					}
					catch (e) {
						localStorageParsedValue = null;
					}
				}

				return localStorageParsedValue;

			}

			public static removeLocalStorageValue(localStorageIndex: string): boolean {

				try {
					localStorage.removeItem(localStorageIndex);
				}
				catch (e) {
					Debug.Log.genericLog('Could not remove local storage value: ', localStorageIndex, e);
					return false;
				}

				return true;

			}

			public static htmlEntitiesDecode(text: string) {
				return $("<div/>").html(text).text();
			}

			public static getRealTarget(target: JQuery, tagName: string): JQuery | null {

				if (!tagName) {
					return target;
				}

				tagName = tagName.toLowerCase();

				const targetTagName = target.prop('tagName').toLowerCase();

				if (targetTagName !== tagName) {

					const targetParentTagName = target.parent().prop('tagName').toLowerCase();

					if (targetParentTagName === tagName) {
						target = target.parent();
					}
					else {
						target = null;
					}

				}

				return target;

			}

			public static calculateAverage(numberList: Array<number>) {

				return numberList.reduce((total: number, a: number) => total + a) / numberList.length;

			}

			public static decodeBase64(token: string) {

				let tokenString    = token;
				let equalSignCount = tokenString.substring(tokenString.length - 1);
				if (parseInt(equalSignCount) !== 0) {
					tokenString = tokenString.substring(0, tokenString.length - 1);
				}

				tokenString = window.Base64.decode(tokenString);

				return JSON.parse(tokenString);

			}

			public static hexToRgbA(hex: string, alpha: number) {

				let c: any;

				if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
					c = hex.substring(1).split('');
					if (c.length == 3) {
						c = [c[0], c[0], c[1], c[1], c[2], c[2]];
					}
					c = '0x' + c.join('');
					return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ', ' + alpha + ')';
				}

				return null;

			}

		}

		export interface IGenericObject {
			[key: string]: any
		}

	}

}
