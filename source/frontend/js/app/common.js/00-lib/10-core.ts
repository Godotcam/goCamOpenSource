namespace Core {

	export var MSG_INTERNAL_ERROR = 'Internal error';

	export namespace Ajax {

		function extractError(data: IAppAjaxResponse): IAppAjaxResponseError {
			if ('content' in data) {
				return {
					code: 0,
					msg: 'No error found'
				};
			}

			if (!data) {
				return {
					code: 1,
					msg: Core.MSG_INTERNAL_ERROR
				};
			}

			if (!('error' in data)) {
				return {
					code: 2,
					msg: Core.MSG_INTERNAL_ERROR
				};
			}

			let errorInfoIn = data.error;
			let errorInfoOut: IAppAjaxResponseError = {
				code: 3,
				msg: Core.MSG_INTERNAL_ERROR
			};

			if (errorInfoIn) {
				if ('code' in errorInfoIn) {
					errorInfoOut.code = errorInfoIn.code;
				}

				if ('msg' in errorInfoIn) {
					errorInfoOut.msg = errorInfoIn.msg;
				}

				if ('extra' in errorInfoIn) {
					errorInfoOut.extra = errorInfoIn.extra;
				}
			}

			return errorInfoOut;
		}

		export function post(path: string, content: any = null): JQueryPromise<any> {

			let jqXHR = $.ajax({
				type: 'post',
				dataType: 'json',
				data: content,

				url: path

			});


			let promise: any = jqXHR.then(function(data: IAppAjaxResponse) {
				let promiseDeferred;

				if (!data || !('content' in data)) {
					// application error
					promiseDeferred = $.Deferred();
					promiseDeferred.reject(extractError(data));
					return promiseDeferred;
				}

				return data.content;

			}, function(xhr) {
				let contentType = xhr.getResponseHeader('content-type');
				if ((contentType === "application/json") || (contentType === "text/json")) {
					if ('JSON' in window) {
						let dataObj = JSON.parse(xhr.responseText);

						if ('error' in dataObj && dataObj.error) {
							let errorObj = dataObj.error;

							if (('code' in errorObj) && errorObj.code > 0) {
								return errorObj;
							}
						}
					}
				}

				let errorObj = {
					code: 0,

					msg: Core.MSG_INTERNAL_ERROR
				};

				if (xhr.status == 500) {
					errorObj.code = 4;

				} else if (xhr.status == 200) {
					errorObj.code = 5;
				}
				else if (xhr.statusText == "abort") {
					errorObj.code = 7;
				}
				else if (xhr.status > 500 && xhr.status < 600) {
					errorObj.code = 8;
				}
				else {
					errorObj.code = 6;
				}

				return errorObj;
			});

			promise.jqXHR = jqXHR;

			return promise;
		}
	}

	export function clone(obj: any): any {
		// Handle the 3 simple types, and null or undefined
		if (null == obj || "object" != typeof obj) {
			return obj;
		}

		// Handle Date
		if (obj instanceof Date) {
			let copyDate = new Date();
			copyDate.setTime(obj.getTime());
			return copyDate;
		}

		// Handle Array
		if (obj instanceof Array) {
			let copyList = [];
			for (let i = 0, len = obj.length; i < len; i++) {
				copyList[i] = clone(obj[i]);
			}
			return copyList;
		}

		// Handle Object
		if (obj instanceof Object) {
			let copyObj: any = {};
			for (let attr in obj) {
				if (obj.hasOwnProperty(attr)) {
					copyObj[attr] = clone(obj[attr]);
				}
			}
			return copyObj;
		}

		throw new Error("Unable to copy obj! Its type isn't supported.");
	}

	export function bootstrap() {

		if ('onDocumentReady' in Application) {

			let fonctionStr = Application['onDocumentReady'];

			let tokenList = fonctionStr.split(/\./);

			let currentObj: any = window;
			let currentToken;

			while (currentToken = tokenList.shift()) {
				if (currentToken in currentObj) {
					currentObj = currentObj[currentToken];
				}
				else {
					currentObj = null;
					break;
				}
			}

			if (typeof currentObj === "function") {
				window.setTimeout(function() {
					currentObj();
				}, 1);
			}

		}
	}
}


