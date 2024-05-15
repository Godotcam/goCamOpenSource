let faceapi: any;
let Tesseract: any;

declare namespace Application {
	export var verificationVersion: number;
	export var p: number;
	export var d: string;
	export var sessionId: string;
	export var partnerColorConfig: any;
	export var ipCountry: string;
	export var forceIpCountry: string;
	export var deviceInfo: {
		"os.name": string,
		"os.version": string,
		"os.mobile": number,
		"os.arch": string,
		"browser.name": string,
		"browser.version": string,
		"browser.virtualReality": number,
		"browser.versionMajor": number,
		"browser.engine.name": string,
		"browser.engine.version": string,
		"crawler": number
	};

	let isUserAuth: number;

	export var countryAgeMajority: {
		[key: string]: number
	}

}

namespace AvsHome {

	export interface IGetVerificationPayloadAndUrlData {
		colorConfigBodyBackgroundInput: string,
		colorConfigBodyForegroundInput: string,
		colorConfigButtonBackgroundInput: string,
		colorConfigButtonForegroundInput: string,
		colorConfigButtonForegroundCTAInput: string
	}

	export interface IGetVerificationPayloadAndUrlResponse extends ISuccessResponse {
		partnerId: number,
		payload: string,
		url: string,
		iframeUrl: string
	}

	export interface IValidateVerificationPayloadData {
		verificationPayload: string
	}

	export interface IValidateVerificationPayloadResponse extends ISuccessResponse {
		sessionId: number
	}

	export interface IErrorResponse {
		code: number,
		msg: string
	}

	export interface ISuccessResponse {
		code: number,
		msg: string
	}

	export interface IAvsInstanceEvent {
		name: string,
		data: {
			payload: string
		}
	}

	const API_BASE_URL = '/';

	export function main() {

		Action.init();

	}

	export namespace Action {

		let exampleImplementationStartRedirectButton = $('#exampleImplementationStartRedirectButton');
		let exampleImplementationStartJsButton       = $('#exampleImplementationStartJsButton');
		let exampleImplementationIframeJsButton      = $('#exampleImplementationIframeJsButton')
		let colorConfigBodyBackgroundInput           = $('#colorConfigBodyBackgroundInput');
		let colorConfigBodyForegroundInput           = $('#colorConfigBodyForegroundInput');
		let colorConfigButtonBackgroundInput         = $('#colorConfigButtonBackgroundInput');
		let colorConfigButtonForegroundInput         = $('#colorConfigButtonForegroundInput');
		let colorConfigButtonForegroundCTAInput      = $('#colorConfigButtonForegroundCTAInput');

		let accessInformationCallbackUrlInput = $('#accessInformationCallbackUrlInput');
		let ageVerificationLogTextarea        = $('#ageVerificationLogTextarea');

		let avsInstance: any = null;

		export function init() {
			createUi();
			createBindings();
		}

		function createUi() {

			exampleImplementationIframeJsButton.attr('disabled', 'disabled');

		}

		function createBindings() {

			exampleImplementationStartRedirectButton.on('click', (e) => {

				if (exampleImplementationStartRedirectButton.is('[disabled]')) {
					return;
				}

				exampleImplementationStartRedirectButton.attr('disabled', 'disabled');

				var postData = {
					colorConfigBodyBackgroundInput     : colorConfigBodyBackgroundInput.val().toString(),
					colorConfigBodyForegroundInput     : colorConfigBodyForegroundInput.val().toString(),
					colorConfigButtonBackgroundInput   : colorConfigButtonBackgroundInput.val().toString(),
					colorConfigButtonForegroundInput   : colorConfigButtonForegroundInput.val().toString(),
					colorConfigButtonForegroundCTAInput: colorConfigButtonForegroundCTAInput.val().toString(),
					callbackUrl                        : accessInformationCallbackUrlInput.val(),
				};

				Ajax.getVerificationPayloadAndUrl(postData).then(
					(data: IGetVerificationPayloadAndUrlResponse) => {

						exampleImplementationStartRedirectButton.removeAttr('disabled');

						window.open(data.url);

					},
					(error: IErrorResponse) => {

						exampleImplementationStartRedirectButton.removeAttr('disabled');

						triggerError(error);

					}
				);

				e.preventDefault();

			});

			exampleImplementationStartJsButton.on('click', (e) => {

				if (exampleImplementationStartJsButton.is('[disabled]')) {
					return;
				}

				exampleImplementationStartJsButton.attr('disabled', 'disabled');

				var postData = {
					colorConfigBodyBackgroundInput     : colorConfigBodyBackgroundInput.val().toString(),
					colorConfigBodyForegroundInput     : colorConfigBodyForegroundInput.val().toString(),
					colorConfigButtonBackgroundInput   : colorConfigButtonBackgroundInput.val().toString(),
					colorConfigButtonForegroundInput   : colorConfigButtonForegroundInput.val().toString(),
					colorConfigButtonForegroundCTAInput: colorConfigButtonForegroundCTAInput.val().toString(),
					callbackUrl                        : accessInformationCallbackUrlInput.val(),
				};

				Ajax.getVerificationPayloadAndUrl(postData).then(
					(data: IGetVerificationPayloadAndUrlResponse) => {

						iframeAvsHandler(data.iframeUrl);

					},
					(error: IErrorResponse) => {

						exampleImplementationStartJsButton.removeAttr('disabled');

						triggerError(error);

					}
				);

				e.preventDefault();

			});

			exampleImplementationIframeJsButton.on('click', (e) => {

				if (exampleImplementationIframeJsButton.is('[disabled]')) {
					return;
				}

				avsInstance.iframeInstance.expand();

				e.preventDefault();

			});


			colorConfigBodyBackgroundInput.on('change', (e) => {
				restartIframeVerification();
			});

			colorConfigBodyForegroundInput.on('change', (e) => {
				restartIframeVerification();
			});

			colorConfigButtonBackgroundInput.on('change', (e) => {
				restartIframeVerification();
			});

			colorConfigButtonForegroundInput.on('change', (e) => {
				restartIframeVerification();
			});

			colorConfigButtonForegroundCTAInput.on('change', (e) => {
				restartIframeVerification();
			});

		}

		function triggerError(error: IErrorResponse) {

			alert('Error: ' + error.code + ' - ' + error.msg);

		}

		function appendToLog(message: string) {
			ageVerificationLogTextarea.append(message + "\n");
			ageVerificationLogTextarea.get(0).scrollTop = ageVerificationLogTextarea.get(0).scrollHeight;

		}

		function iframeAvsHandler(iframeUrl: string) {
			if (avsInstance === null) {
				AvsFactoryIframeSdk.V1.Config.create({
					verificationType : AvsFactoryIframeSdk.V1.Config.VERIFICATION_TYPE_DETECTION,
					iframeLocationUrl: iframeUrl
				});

				avsInstance = new AvsFactoryIframeSdk.V1.Core();
				avsInstance.init();
			}
			else {
				avsInstance.iframeInstance.iframeLocationUrl = iframeUrl;
				avsInstance.iframeInstance.refresh();
			}

			avsInstance.onMessage = (eventMessage: IAvsInstanceEvent) => {

				//ageVerificationLogTextarea.append('Received event: ' + eventMessage.name + "\n");

				switch (eventMessage.name) {

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_CHECK_IFRAME_LOADED:

						appendToLog('Iframe content was loaded');

						avsInstance.emit(AvsFactoryIframeSdk.V1.Config.EVENT_STATUS_REQUEST);

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_SUCCESS:

						appendToLog('Verification already completed, delete the "isAgeVerified" cookie to retry');

						Ajax.validateVerificationPayload({
							verificationPayload: eventMessage.data.payload
						}).then(
							(data: IValidateVerificationPayloadResponse) => {

								appendToLog('Cookie payload integrity check success, verification session id: ' + data.sessionId);

							},
							(error: IErrorResponse) => {

								triggerError(error);

							}
						);

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_NOT_FOUND:

						avsInstance.emit(AvsFactoryIframeSdk.V1.Config.EVENT_RESOURCE_PRELOAD);

						appendToLog('Cookie was not found, verification is initializing');

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR:

						appendToLog('Verification fatal error: ' + JSON.stringify(eventMessage.data));

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_START_PAGE_LOADED:

						appendToLog('Resources started loading');

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_RESOURCES_LOADED:

						appendToLog('Resources loaded, verification is ready!');
						exampleImplementationIframeJsButton.removeAttr('disabled');

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_CLOSE_IFRAME:

						avsInstance.iframeInstance.collapse();

						appendToLog('Verification iframe closed');

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_VERIFICATION_SUCCESS:

						appendToLog('Verification completed successfully');

						exampleImplementationStartJsButton.attr('disabled', 'disabled');
						exampleImplementationIframeJsButton.attr('disabled', 'disabled');

						Ajax.validateVerificationPayload({
							verificationPayload: eventMessage.data.payload
						}).then(
							(data: IValidateVerificationPayloadResponse) => {

								appendToLog('Cookie payload integrity check success, verification session id: ' + data.sessionId);

							},
							(error: IErrorResponse) => {

								triggerError(error);

							}
						);

						break;

					case AvsFactoryIframeSdk.V1.Config.EVENT_ON_VERIFICATION_ERROR:

						appendToLog('Verification completed with error');

						break;

					default:

					//

				}

			};
		}

		function restartIframeVerification() {

			exampleImplementationStartJsButton.removeAttr('disabled');
			exampleImplementationIframeJsButton.attr('disabled', 'disabled');

		}

	}

	export namespace Ajax {

		export function getVerificationPayloadAndUrl(postData: IGetVerificationPayloadAndUrlData) {

			return Core.Ajax.post(
				API_BASE_URL + 'getVerificationPayloadAndUrl',
				postData
			);


		}

		export function validateVerificationPayload(postData: IValidateVerificationPayloadData) {

			return Core.Ajax.post(
				API_BASE_URL + 'validateVerificationPayload',
				postData
			);

		}


	}

}



