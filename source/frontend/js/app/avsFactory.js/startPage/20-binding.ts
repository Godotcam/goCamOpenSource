namespace AvsFactory {

	export namespace StartPage {

		export class Binding {

			public static init(): void {

				$(window).on('resize', () => {
					Method.setScreenOrientation();
				});

				instance.ui.StartButton.onClick(() => {

					if (!instance.entity.VerificationStepGlobal.termsAndConditionAgreement) {
						alert('Please agree with the terms and conditions first');
						return;
					}

					instance.entity.VerificationStepGlobal.faceApiType   = Avs.Entity.VerificationStepGlobal.FACE_API_TYPE_FAST;
					instance.entity.VerificationStepGlobal.tesseractType = Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR;

					switch (instance.entity.VerificationStepGlobal.verificationType) {

						case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL:

							SelfieAgeDetectionIntro.init();
							Method.showPageStep(Config.SELFIE_AGE_DETECTION_INTRO_LAYER);

							break;

						case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID:

							ScanIdAgeVerificationIntro.init();
							Method.showPageStep(Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER);

							break;

						default:

						//


					}


				});

				instance.ui.TermsAndConditionsCheckbox.onChange(() => {

					instance.entity.VerificationStepGlobal.termsAndConditionAgreement = instance.ui.TermsAndConditionsCheckbox.states.value;
					Avs.Helper.Common.setLocalStorageValue(Config.KEY_LOCAL_STORAGE_TERMS_AGREED, instance.ui.TermsAndConditionsCheckbox.states.value);

				});

				instance.ui.DebugCloseButton.onClick(() => {
					instance.ui.DebugArea.hide();
				});

				instance.ui.ErrorMessageStartOverButton.onClick(() => {
					window.location.reload();
				});

				instance.ui.GlobalIframeCloseButton.onClick(() => {

					instance.postMessage.emit(Config.EVENT_ON_CLOSE_IFRAME);

					instance.postMessage.emit(Config.EVENT_ON_VERIFICATION_DONE, {
						status: instance.entity.VerificationStepGlobal.isVerified,
						payload: instance.entity.VerificationStepGlobal.successPayload
					});

					// allow the success payload to be verified
					if (instance.entity.VerificationStepGlobal.isVerified) {
						instance.postMessage.emit(Config.EVENT_ON_VERIFICATION_SUCCESS, {
							status : instance.entity.VerificationStepGlobal.isVerified,
							payload: instance.entity.VerificationStepGlobal.successPayload
						});

					}
					// restart the whole process
					else {
						window.location.reload();
					}

				});

				instance.ui.StartPageTermsArea.element.on('click', 'a', () => {
					instance.ui.TermsAndConditionsArea.show();
					return false;
				})

				instance.ui.TermsAndConditionsBackButton.onClick(() => {
					instance.ui.TermsAndConditionsArea.hide();
				});

				instance.ui.ErrorMessageAdditionalTextArea.element.on('click', 'a', () => {
					instance.ui.WebCamAccessHelpArea.show();
					instance.ui.ErrorMessageArea.hide();
					return false;
				})

				instance.ui.WebCamAccessHelpBackButton.onClick(() => {
					instance.ui.WebCamAccessHelpArea.hide();
					instance.ui.ErrorMessageArea.show();
				});

			}

		}

	}

}
