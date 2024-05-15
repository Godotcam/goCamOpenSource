namespace AvsFactory {

	export namespace StartPage {

		export class Method {

			public static init(): void {

				// https://github.com/mexitek/phpColors/blob/master/src/Mexitek/PHPColors/Color.php#L474
				Method.applyPartnerColor();

				$('body').attr('style', '');

				instance.postMessage.emit(Config.EVENT_ON_START_PAGE_LOADED);

				instance.entity.VerificationStepGlobal.verificationType               = Config.VERIFICATION_TYPE_DEFAULT;
				instance.entity.VerificationStepGlobal.partnerId                      = Config.PARTNER_ID;
				instance.entity.VerificationStepGlobal.payload                        = Config.PAYLOAD;
				instance.entity.VerificationStepGlobal.sessionId                      = Config.SESSION_ID;

				if (!Avs.Helper.Common.isWebrtcSupported() && !Avs.Helper.Common.isCanvasSupported()) {
					Method.renderError(25001, 'Your device it\'s not supported');
					return;
				}

				Method.setScreenOrientation();
				Method.showPageStep(Config.START_PAGE_LAYER);

				instance.ui.FaceApiPreloaderArea.show();
				Method.preloadFaceApiResources();

				if (Config.VERIFICATION_VERSION == Config.VERIFICATION_VERSION_IFRAME_V1) {
					Method.preloadTesseractResources();
				}

			}

			public static applyPartnerColor() {

				if (Config.PARTNER_COLOR_CONFIG !== null) {

					if (typeof Config.PARTNER_COLOR_CONFIG.body.foregroundCallToAction === 'undefined') {
						Config.PARTNER_COLOR_CONFIG.body.foregroundCallToAction = Config.PARTNER_COLOR_CONFIG.body.foreground;
					}

					$(
						`<style type='text/css'>
		
							body,
							#avsMainContainer .page.layoutDocumentProcessing,
							#avsMainContainer .page.layoutDocumentProcessing .imageContainer .loadingOverlay,
							#avsMainContainer .page.layoutError,
							#avsMainContainer .page.layoutStaticPage,
							#avsMainContainer .page.layoutTextBlock,
							#avsMainContainer .page.layoutTextBlock a,
							#avsMainContainer .page .informationArea.layoutBlack,
							#avsMainContainer .preloader,
							#avsMainContainer .page.layoutDocumentProcessing .processArea .checkOutList .checkOutItem .statusIcon {
								background-color: ` + Config.PARTNER_COLOR_CONFIG.body.background + `;
								color: ` + Config.PARTNER_COLOR_CONFIG.body.foreground + `;
							}
							
							#avsMainContainer .page.layoutDocumentProcessing .imageContainer .loadingOverlay {
								opacity: 0.7
							}
							
							#avsMainContainer .page .iconArea .iconItem .iconImage svg {
								fill: ` + Config.PARTNER_COLOR_CONFIG.body.foreground + `;
							}
							
							#avsMainContainer .page .iconArea .iconItem.isSelected .iconImage svg {
								fill: ` + Config.PARTNER_COLOR_CONFIG.body.button.foregroundCallToAction + `;
							}
							
							#avsMainContainer .page .submitArea .button,
							#avsMainContainer .page .submitArea .button.layoutRed,
							#avsMainContainer .page .submitArea .button.layoutGreen {
								color: ` + Config.PARTNER_COLOR_CONFIG.body.button.foregroundCallToAction + `;
								background-color: ` + Config.PARTNER_COLOR_CONFIG.body.button.background + `;
								border-color: ` + Avs.Helper.Common.hexToRgbA(Config.PARTNER_COLOR_CONFIG.body.button.background, 0.4) + `;
							}
							
							#avsMainContainer .page .iconArea .iconItem.isSelected .iconImage,
							#avsMainContainer .page .introIcon,
							#avsMainContainer .page .introIcon.layoutRed,
							#avsMainContainer .page .introIcon.layoutGreen {
								fill: ` + Config.PARTNER_COLOR_CONFIG.body.button.foreground + `;
								background-color: ` + Config.PARTNER_COLOR_CONFIG.body.button.background + `;
								border-color: ` + Avs.Helper.Common.hexToRgbA(Config.PARTNER_COLOR_CONFIG.body.button.background, 0.4) + `;
							}
							
							#avsMainContainer .page .termsArea label a {
								color: ` + Config.PARTNER_COLOR_CONFIG.body.foregroundCallToAction + `;
							}
							
							#globalIframeCloseButton {
								background-color: ` + Avs.Helper.Common.hexToRgbA(Config.PARTNER_COLOR_CONFIG.body.background, 0.7) + `;
							}
							
							#avsMainContainer .page .iconArea .iconItem.isSelected .iconLabel .verificationTypeRadioButton {
								background-color: ` + Avs.Helper.Common.hexToRgbA(Config.PARTNER_COLOR_CONFIG.body.button.background, 1) + `;
							}
							
							#avsMainContainer .page .iconArea .iconItem .iconLabel .verificationTypeRadioButton {
								border-color: ` + Config.PARTNER_COLOR_CONFIG.body.button.background + `;
							}
							
							#avsMainContainer .page .iconArea .iconItem.isSelected .iconLabel .verificationTypeRadioButton:after {
								background-color: ` + Config.PARTNER_COLOR_CONFIG.body.button.foregroundCallToAction + `;
							}

						</style>`
					).appendTo("head");

					// go.cam logo replace disabled for now
					// $(`.headerLogo img`).attr('src', Config.PARTNER_COLOR_CONFIG.header.logo);

				}

			}

			public static hideAllStepPages() {

				if (!Config.START_PAGE_LAYER.hasClass('isHidden')) {
					Config.START_PAGE_LAYER.addClass('isHidden');
				}

				if (!Config.SELFIE_AGE_DETECTION_INTRO_LAYER.hasClass('isHidden')) {
					Config.SELFIE_AGE_DETECTION_INTRO_LAYER.addClass('isHidden');
				}

				if (!Config.SELFIE_AGE_DETECTION_PAGE_LAYER.hasClass('isHidden')) {
					Config.SELFIE_AGE_DETECTION_PAGE_LAYER.addClass('isHidden');
				}

				if (!Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER.hasClass('isHidden')) {
					Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER.addClass('isHidden');
				}

				if (!Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER.hasClass('isHidden')) {
					Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER.addClass('isHidden');
				}

				if (!Config.RESULT_PAGE_SUCCESS_LAYER.hasClass('isHidden')) {
					Config.RESULT_PAGE_SUCCESS_LAYER.addClass('isHidden');
				}

				if (!Config.RESULT_PAGE_FAIL_LAYER.hasClass('isHidden')) {
					Config.RESULT_PAGE_FAIL_LAYER.addClass('isHidden');
				}

			}

			public static showPageStep(step: JQuery) {

				Method.hideAllStepPages();
				step.removeClass('isHidden');

			}

			public static setScreenOrientation() {

				Config.MAIN_CONTAINER_LAYER.removeClass(Avs.Helper.ResponsiveElements.DEVICE_ORIENTATION_PORTRAIT);
				Config.MAIN_CONTAINER_LAYER.removeClass(Avs.Helper.ResponsiveElements.DEVICE_ORIENTATION_LANDSCAPE);

				let screenOrientation                                    = Avs.Helper.ResponsiveElements.getDeviceOrientation();
				instance.entity.VerificationStepGlobal.screenOrientation = screenOrientation;

				Config.MAIN_CONTAINER_LAYER.addClass(screenOrientation);

			}

			public static preloadFaceApiResources() {

				//tiny_face_detector_model-weights_manifest.json
				//tiny_face_detector_model-shard1
				//age_gender_model-weights_manifest.json
				//age_gender_model-shard1
				//face_recognition_model-weights_manifest.json
				//face_recognition_model-shard1
				//face_recognition_model-shard2
				//face_landmark_68_model-weights_manifest.json
				//face_landmark_68_model-shard1
				//face_expression_model-weights_manifest.json
				//face_expression_model-shard1

				let faceApiPreloader = new Avs.Helper.FilePreloader(
					[
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'tiny_face_detector_model-weights_manifest.json',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'tiny_face_detector_model-shard1',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'age_gender_model-weights_manifest.json',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'age_gender_model-shard1',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_recognition_model-weights_manifest.json',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_recognition_model-shard1',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_recognition_model-shard2',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_landmark_68_model-weights_manifest.json',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_landmark_68_model-shard1',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_expression_model-weights_manifest.json',
						SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_expression_model-shard1'
					],
					instance.event,
					Config.FACE_API_PRELOADER_NAME
				);

				faceApiPreloader.startPreloading();

			}

			public static preloadTesseractResources() {

				// tesseract-js-core-2.0.0/tesseract-core.asm.js
				// tesseract-js-2.1.1/worker.min.js
				// tesseract-js-core-2.0.0/tessdata/best/fra.traineddata.gz

				let tesseractPreloader = new Avs.Helper.FilePreloader(
					[
						ScanIdAgeVerificationPage.Config.TESSERACT_CORE_PATH,
						ScanIdAgeVerificationPage.Config.TESSERACT_WORKER_PATH,
						ScanIdAgeVerificationPage.Config.TESSERACT_LANGUAGE_PATH + '/fra.traineddata.gz'
					],
					instance.event,
					Config.TESSERACT_PRELOADER_NAME
				);

				tesseractPreloader.startPreloading();

			}

			public static renderError(errorCode: number, errorMessage: string) {

				instance.ui.ErrorMessageArea.show();
				instance.ui.ErrorMessageTextArea.setContent(errorCode + ': ' + errorMessage);

				switch (errorCode) {

					case 25034:
					case 25039:
					case 25047:

						instance.ui.ErrorMessageAdditionalTextArea.show();
						instance.ui.ErrorMessageAdditionalTextArea.setContent('Make sure the webcam access it\'s not blocked, <a href="/help/webcamAccess">click here for help</a>');

						break;

					default:

					//

				}

				instance.ui.ErrorMessageQrTextArea.hide();

				if (!Application.deviceInfo['os.mobile']) {

					instance.ui.ErrorMessageQrTextArea.show();

					instance.ui.StartPageErrorQrCode.renderTestToOtherDeviceQr();

					instance.startApiPolling(
						instance.entity.VerificationStepGlobal.partnerId,
						instance.entity.VerificationStepGlobal.payload
					);

				}

				ResultPageFail.init();
				ResultPageFail.Method.saveError(errorCode);

			}

			public static goToSuccessStep() {
				StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
				ResultPageSuccess.init();
			}

		}

	}

}
