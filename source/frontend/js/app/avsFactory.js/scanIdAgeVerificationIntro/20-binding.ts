namespace AvsFactory {

	export namespace ScanIdAgeVerificationIntro {

		export class Binding {

			public static init(): void {

				instance.ui.ScanIdAgeDetectionStartButton.onClick(() => {

					if (instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
						instance.ui.ScanIdAgeVerificationUploadFileIntroInput.triggerFileBrowse();
						return;
					}

					if (instance.entity.ScanIdAgeVerification.facingMode === null) {
						instance.entity.ScanIdAgeVerification.videoDeviceId = instance.ui.ScanIdAgeVerificationDeviceSelect.getSelectedOption();
					}

					instance.entity.ScanIdAgeVerification.idCountry        = instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption();
					instance.entity.ScanIdAgeVerification.idState          = instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption();
					instance.entity.ScanIdAgeVerification.idTypeString     = instance.ui.ScanIdAgeVerificationTypeSelect.getSelectedOption();
					instance.entity.ScanIdAgeVerification.idVariantCurrent = 0;

					// instance.entity.ScanIdAgeVerification.idType = instance.ui.ScanIdAgeVerificationTypeSelect.getSelectedOption();

					StartPage.Method.showPageStep(StartPage.Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER);
					ScanIdAgeVerificationPage.init();

				});

				instance.ui.ScanIdAgeVerificationCountrySelect.onChange(() => {

					Method.renderStateList(instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption());

				});

				instance.ui.ScanIdAgeVerificationStateSelect.onChange(() => {

					Method.renderDocumentList(
						instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption(),
						instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption()
					);

				});

				instance.ui.ScanIdAgeDetectionCancelButton.onClick(() => {

					StartPage.Method.showPageStep(StartPage.Config.START_PAGE_LAYER);

				});

				instance.ui.ScanIdAgeVerificationUploadFileIntroInput.onChange((value: string, event: any) => {

					if (value != '') {

						instance.entity.ScanIdAgeVerification.idCountry        = instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption();
						instance.entity.ScanIdAgeVerification.idState          = instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption();
						instance.entity.ScanIdAgeVerification.idTypeString     = instance.ui.ScanIdAgeVerificationTypeSelect.getSelectedOption();
						instance.entity.ScanIdAgeVerification.idVariantCurrent = 0;

						StartPage.Method.showPageStep(StartPage.Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER);
						ScanIdAgeVerificationPage.init();

						ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingArea.show();
						ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.show();

						if (event.target.files) {
							Avs.Helper.Canvas.fileToCanvas(event.target.files[0], ScanIdAgeVerificationPage.Method.getProcessingCanvas());
						}

					}

				});

			}

		}

	}

}
