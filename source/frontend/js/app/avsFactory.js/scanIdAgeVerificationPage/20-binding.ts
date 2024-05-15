namespace AvsFactory {

	export namespace ScanIdAgeVerificationPage {

		export class Binding {

			public static init(): void {

				$(window).on('resize', () => {
					Method.repositionScanId();
				});

				instance.ui.RatioRecommendButton.onClick(() => {

					instance.ui.RatioRecommendArea.hide();

					Method.initVideo();

				});

				instance.ui.ScanIdAgeVerificationUploadImageButton.onClick(() => {
					instance.ui.ScanIdAgeVerificationUploadFileInput.triggerFileBrowse();
				});

				instance.ui.ScanIdAgeVerificationTakePhotoButton.onClick(() => {

					Method.repositionScanId();

					let scanIdContainerMask = Method.getIdGuideContainer();
					let videoElement        = instance.plugin.Library.Video.CameraSource.adapters.webrtc.rootElement;

					let containerPosition        = Avs.Helper.VideoAreaExtractor.calculateMaskPosition(scanIdContainerMask, videoElement);
					let documentProcessingCanvas = Method.getProcessingCanvas();

					Avs.Helper.VideoAreaExtractor.videoMaskToCanvas(
						videoElement,
						documentProcessingCanvas,
						containerPosition
					);

					instance.ui.ScanIdAgeVerificationDocumentProcessingArea.show();
					instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.show();

				});

				instance.ui.ScanIdAgeVerificationUploadFileInput.onChange((value: string, event: any) => {

					if (value != '') {
						instance.ui.ScanIdAgeVerificationDocumentProcessingArea.show();
						instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.show();

						if (event.target.files) {
							Avs.Helper.Canvas.fileToCanvas(event.target.files[0], Method.getProcessingCanvas());
						}

					}

				});

				instance.ui.ScanIdAgeVerificationConfirmationYesButton.onClick(() => {

					instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.hide();
					instance.ui.ScanIdAgeVerificationDocumentProcessingProcessArea.show();
					instance.ui.DocumentProcessingCanvasLoadingOverlayArea.show();

					Method.loadDetectionLibrary();

				});

				instance.ui.ScanIdAgeVerificationConfirmationNoButton.onClick(() => {

					if (instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
						StartPage.Method.showPageStep(StartPage.Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER);
						ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationUploadFileIntroInput.clearValue();
						return;
					}

					instance.ui.ScanIdAgeVerificationUploadFileInput.clearValue();

					instance.ui.ScanIdAgeVerificationDocumentProcessingArea.hide();
					instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.hide();
					instance.ui.ScanIdAgeVerificationDocumentProcessingProcessArea.hide();

				});

			}

		}

	}

}
