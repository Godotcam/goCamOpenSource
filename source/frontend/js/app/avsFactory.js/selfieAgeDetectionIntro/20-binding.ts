namespace AvsFactory {

	export namespace SelfieAgeDetectionIntro {

		export class Binding {

			public static init(): void {

				instance.ui.SelfieAgeDetectionStartButton.onClick(() => {

					if (instance.entity.SelfieAgeDetection.facingMode === null) {
						instance.entity.SelfieAgeDetection.videoDeviceId = instance.ui.SelfieAgeDetectionDeviceSelect.getSelectedOption();
					}

					StartPage.Method.showPageStep(StartPage.Config.SELFIE_AGE_DETECTION_PAGE_LAYER);
					SelfieAgeDetectionPage.init();

				});

				instance.ui.SelfieAgeDetectionCancelButton.onClick(() => {

					StartPage.Method.showPageStep(StartPage.Config.START_PAGE_LAYER);

				});

			}

		}

	}

}
