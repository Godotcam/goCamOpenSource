namespace AvsFactoryIframeCheck {

	export class Core {

		static readonly EVENT_STATUS_REQUEST                      = 'avs.statusRequest';
		static readonly EVENT_ON_VERIFICATION_DONE                = 'avs.onVerificationDone';
		static readonly EVENT_RESOURCE_PRELOAD                    = 'avs.resourcePreload';
		static readonly EVENT_ON_INITIAL_VERIFICATION_SUCCESS     = 'avs.onInitialVerificationSuccess';
		static readonly EVENT_ON_INITIAL_VERIFICATION_NOT_FOUND   = 'avs.onInitialVerificationNotFound';
		static readonly EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR = 'avs.onInitialVerificationFatalError';

		constructor() {
		}

		public init() {

			window.addEventListener("message", (event: MessageEvent) => {

				switch (event.data.name) {

					case Core.EVENT_STATUS_REQUEST:

						try {

							let appData     = document.getElementById('app-data');
							let Application = JSON.parse(appData.textContent);

							if (Application.isAgeVerified) {
								window.top.postMessage({
									name: Core.EVENT_ON_VERIFICATION_DONE,
									data: {
										status : true,
										payload: Application.verificationPayload
									}
								}, '*');

								window.top.postMessage({
									name: Core.EVENT_ON_INITIAL_VERIFICATION_SUCCESS,
									data: {
										status : true,
										payload: Application.verificationPayload
									}
								}, '*');

								return;
							}
							else {
								window.top.postMessage({
									name: Core.EVENT_ON_VERIFICATION_DONE,
									data: {
										status : false,
										payload: Application.verificationPayload
									}
								}, '*');

								window.top.postMessage({
									name: Core.EVENT_ON_INITIAL_VERIFICATION_NOT_FOUND,
									data: {
										status : false,
										payload: Application.verificationPayload
									}
								}, '*');
							}

						}
						catch (e) {

							let errorMessage = '';
							if (e instanceof Error) {
								errorMessage = e.message;
							}

							window.top.postMessage({
								name: Core.EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR,
								data: {
									errorMessage: errorMessage
								}
							}, '*');

						}

						break;

					case Core.EVENT_RESOURCE_PRELOAD:

						window.location.href = window.location.href.replace('/iframeCheck', '/iframeRender');

						break;

					default:

					//

				}

			}, false);

		}

	}

}

(() => {
	let instance = new AvsFactoryIframeCheck.Core();
	instance.init();
})();
