namespace AvsFactory {

	export namespace ScanIdAgeVerificationIntro {

		export class Event {

			public static init(): void {

				StartPage.instance.event.on(Avs.Helper.FilePreloader.ON_PRELOAD_EVENT + '.' + StartPage.Config.TESSERACT_PRELOADER_NAME,
					(event: Avs.Event.Listener, data: Avs.Helper.IFileListInfo) => {

						if (data.total.progress == 100 && data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_SUCCESS) {
							instance.ui.ScanIdAgeDetectionStartButton.enable();
						}

					}
				);

			}

		}

	}

}
