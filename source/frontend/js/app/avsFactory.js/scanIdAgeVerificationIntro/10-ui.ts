namespace AvsFactory {

	export namespace ScanIdAgeVerificationIntro {

		export class Ui {

			public static init(): void {

				instance.ui = {
					ScanIdAgeDetectionStartButton              : new Avs.Ui.Library.ScanIdAgeDetectionStartButton(instance.event),
					ScanIdAgeVerificationDeviceSelect          : new Avs.Ui.Library.ScanIdAgeVerificationDeviceSelect(instance.event),
					ScanIdAgeVerificationTypeArea              : new Avs.Ui.Library.ScanIdAgeVerificationTypeArea(instance.event),
					ScanIdAgeVerificationTypeSelect            : new Avs.Ui.Library.ScanIdAgeVerificationTypeSelect(instance.event),
					ScanIdAgeVerificationCountrySelect         : new Avs.Ui.Library.ScanIdAgeVerificationCountrySelect(instance.event),
					ScanIdAgeVerificationStateArea             : new Avs.Ui.Library.ScanIdAgeVerificationStateArea(instance.event),
					ScanIdAgeVerificationStateSelect           : new Avs.Ui.Library.ScanIdAgeVerificationStateSelect(instance.event),
					ScanIdAgeVerificationDeviceAccessArea      : new Avs.Ui.Library.ScanIdAgeVerificationDeviceAccessArea(instance.event),
					ScanIdAgeVerificationSubmitArea            : new Avs.Ui.Library.ScanIdAgeVerificationSubmitArea(instance.event),
					ScanIdAgeVerificationDeviceSelectionArea   : new Avs.Ui.Library.ScanIdAgeVerificationDeviceSelectionArea(instance.event),
					ScanIdAgeVerificationDocumentHelperArea    : new Avs.Ui.Library.ScanIdAgeVerificationDocumentHelperArea(instance.event),
					ScanIdAgeDetectionCancelButton             : new Avs.Ui.Library.ScanIdAgeDetectionCancelButton(instance.event),
					ScanIdAgeVerificationUploadImageIntroButton: new Avs.Ui.Library.ScanIdAgeVerificationUploadImageIntroButton(instance.event),
					ScanIdAgeVerificationUploadFileIntroInput  : new Avs.Ui.Library.ScanIdAgeVerificationUploadFileIntroInput(instance.event),

				};

				instance.ui.ScanIdAgeVerificationTypeArea.hide();
				instance.ui.ScanIdAgeVerificationDocumentHelperArea.hide();
				instance.ui.ScanIdAgeVerificationStateArea.hide();

				if (!instance.entity.ScanIdAgeVerification.resourcesPreloaded) {
					instance.ui.ScanIdAgeDetectionStartButton.disable();
				}

			}

		}

	}

}
