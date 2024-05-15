namespace AvsFactory {

	export namespace StartPage {

		export class Event {

			public static init(): void {

				instance.event.on(Avs.Ui.Library.VerificationTypeTabs.ON_TAB_SELECTED,
					(event: Avs.Event.Listener, data: Avs.Ui.Handler.ITabsEventData) => {

						instance.entity.VerificationStepGlobal.verificationType = instance.ui.VerificationTypeTabs.tabNumberToVerificationType(data.tabNumber);

					}
				);

				instance.event.on(Avs.Helper.FilePreloader.ON_PRELOAD_EVENT + '.' + Config.FACE_API_PRELOADER_NAME,
					(event: Avs.Event.Listener, data: Avs.Helper.IFileListInfo) => {

						instance.ui.FaceApiPreloaderPercentArea.setContent(data.total.progress + '%');

						if (data.total.progress == 100 && data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_SUCCESS) {
							instance.entity.SelfieAgeDetection.resourcesPreloaded = true;
							instance.ui.FaceApiPreloaderArea.fadeOut();

							instance.postMessage.emit(Config.EVENT_ON_RESOURCES_LOADED);

							return;
						}

						if (data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_ERROR) {
							Method.renderError(25032, 'Preloading verification resources failed');
							return;
						}

					}
				);

				instance.event.on(Avs.Helper.FilePreloader.ON_PRELOAD_EVENT + '.' + Config.TESSERACT_PRELOADER_NAME,
					(event: Avs.Event.Listener, data: Avs.Helper.IFileListInfo) => {

						instance.ui.TesseractPreloaderPercentArea.setContent(data.total.progress + '%');

						if (data.total.progress == 100 && data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_SUCCESS) {
							instance.entity.ScanIdAgeVerification.resourcesPreloaded = true;
							instance.ui.TesseractPreloaderArea.fadeOut();
							return;
						}

						if (data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_ERROR) {
							Method.renderError(25033, 'Preloading verification resources failed');
							return;
						}

					}
				);

				instance.event.on(Avs.StartPage.ON_POLL_DATA,
					(event: Avs.Event.Listener, data: Avs.IApiResponseData) => {

						if (typeof data.isValidated !== 'undefined' && data.isValidated) {

							instance.stopApiPolling();
							instance.ui.ErrorMessageArea.hide();
							instance.entity.VerificationStepGlobal.deviceLocationVerification = Avs.Entity.VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_EXTERNAL;

							Method.goToSuccessStep();

						}

					}
				);

				instance.event.on(Avs.StartPage.ON_POLL_ERROR,
					(event: Avs.Event.Listener, data: Avs.IApiError) => {

						instance.debug.logToContainer('Qr verification polling error: ' + data.msg);

					}
				);

			}

		}

	}

}
