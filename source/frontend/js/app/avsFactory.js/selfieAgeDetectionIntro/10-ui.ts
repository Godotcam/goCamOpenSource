namespace AvsFactory {

	export namespace SelfieAgeDetectionIntro {

		export class Ui {

			public static init(): void {

				instance.ui = {
					SelfieAgeDetectionStartButton        : new Avs.Ui.Library.SelfieAgeDetectionStartButton(instance.event),
					SelfieAgeDetectionDeviceSelect       : new Avs.Ui.Library.SelfieAgeDetectionDeviceSelect(instance.event),
					SelfieAgeDetectionDeviceAccessArea   : new Avs.Ui.Library.SelfieAgeDetectionDeviceAccessArea(instance.event),
					SelfieAgeDetectionSubmitArea         : new Avs.Ui.Library.SelfieAgeDetectionSubmitArea(instance.event),
					SelfieAgeDetectionDeviceSelectionArea: new Avs.Ui.Library.SelfieAgeDetectionDeviceSelectionArea(instance.event),
					SelfieAgeDetectionCancelButton       : new Avs.Ui.Library.SelfieAgeDetectionCancelButton(instance.event),

				};

				if (!instance.entity.SelfieAgeDetection.resourcesPreloaded) {
					instance.ui.SelfieAgeDetectionStartButton.disable();
				}

			}

		}

	}

}
