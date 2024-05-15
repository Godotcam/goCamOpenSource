namespace AvsFactory {

	export namespace ScanIdAgeVerificationPage {

		export class Ui {

			public static init(): void {

				instance.ui = {
					ScanIdAgeVerificationLoadingLabelArea                  : new Avs.Ui.Library.ScanIdAgeVerificationLoadingLabelArea(instance.event),
					ScanIdAgeVerificationLoadingLabelPercentCounter        : new Avs.Ui.Library.ScanIdAgeVerificationLoadingLabelPercentCounter(instance.event),
					ScanIdAgeVerificationStatusLabel                       : new Avs.Ui.Library.ScanIdAgeVerificationStatusLabel(instance.event),
					ScanIdAgeVerificationCurrentAgeArea                    : new Avs.Ui.Library.ScanIdAgeVerificationCurrentAgeArea(instance.event),
					RatioRecommendArea                                     : new Avs.Ui.Library.RatioRecommendArea(instance.event),
					RatioRecommendTextArea                                 : new Avs.Ui.Library.RatioRecommendTextArea(instance.event),
					RatioRecommendButton                                   : new Avs.Ui.Library.RatioRecommendButton(instance.event),
					ScanIdAgeVerificationUploadImageButton                 : new Avs.Ui.Library.ScanIdAgeVerificationUploadImageButton(instance.event),
					ScanIdAgeVerificationTakePhotoButton                   : new Avs.Ui.Library.ScanIdAgeVerificationTakePhotoButton(instance.event),
					ScanIdAgeVerificationUploadFileInput                   : new Avs.Ui.Library.ScanIdAgeVerificationUploadFileInput(instance.event),
					ScanIdAgeVerificationDocumentProcessingProcessArea     : new Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingProcessArea(instance.event),
					ScanIdAgeVerificationDocumentProcessingConfirmationArea: new Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingConfirmationArea(instance.event),
					ScanIdAgeVerificationDocumentProcessingArea            : new Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingArea(instance.event),
					ScanIdAgeVerificationBirthDateButton                   : new Avs.Ui.Library.ScanIdAgeVerificationBirthDateButton(instance.event),
					ScanIdAgeVerificationFaceSimilarityButton              : new Avs.Ui.Library.ScanIdAgeVerificationFaceSimilarityButton(instance.event),
					ScanIdAgeVerificationLoadingLibraryButton              : new Avs.Ui.Library.ScanIdAgeVerificationLoadingLibraryButton(instance.event),
					ScanIdAgeVerificationConfirmationYesButton             : new Avs.Ui.Library.ScanIdAgeVerificationConfirmationYesButton(instance.event),
					ScanIdAgeVerificationConfirmationNoButton              : new Avs.Ui.Library.ScanIdAgeVerificationConfirmationNoButton(instance.event),
					DocumentProcessingCanvasLoadingOverlayArea             : new Avs.Ui.Library.DocumentProcessingCanvasLoadingOverlayArea(instance.event),
					ScanIdAgeVerificationFaceSimilarityArea                : new Avs.Ui.Library.ScanIdAgeVerificationFaceSimilarityArea(instance.event),

				};

				instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.setStepNumber(7);

				instance.ui.ScanIdAgeVerificationBirthDateButton.showLoading();
				instance.ui.ScanIdAgeVerificationFaceSimilarityButton.showLoading();
				instance.ui.ScanIdAgeVerificationLoadingLibraryButton.showLoading();

				instance.ui.DocumentProcessingCanvasLoadingOverlayArea.hide();

				if (Method.isScanIdVerificationStandalone()) {
					instance.ui.ScanIdAgeVerificationFaceSimilarityArea.hide();
				}

			}

		}

	}

}
