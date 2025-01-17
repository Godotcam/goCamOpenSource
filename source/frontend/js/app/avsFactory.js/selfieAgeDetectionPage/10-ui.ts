namespace AvsFactory {

	export namespace SelfieAgeDetectionPage {

		export class Ui {

			public static init(): void {

				instance.ui = {
					SelfieAgeDetectionLoadingLabelPercentCounter: new Avs.Ui.Library.SelfieAgeDetectionLoadingLabelPercentCounter(instance.event),
					SelfieAgeDetectionLoadingLabelArea          : new Avs.Ui.Library.SelfieAgeDetectionLoadingLabelArea(instance.event),
					SelfieAgeDetectionCurrentAgeArea            : new Avs.Ui.Library.SelfieAgeDetectionCurrentAgeArea(instance.event),
					SelfieAgeDetectionAverageAgeArea            : new Avs.Ui.Library.SelfieAgeDetectionAverageAgeArea(instance.event),
					SelfieAgeDetectionStatusLabel               : new Avs.Ui.Library.SelfieAgeDetectionStatusLabel(instance.event),
					FaceGuideSmileStartHintArea                 : new Avs.Ui.Library.FaceGuideSmileStartHintArea(instance.event),
					FaceGuideSmileStopHintArea                  : new Avs.Ui.Library.FaceGuideSmileStopHintArea(instance.event),
					FaceGuideAgeArea                            : new Avs.Ui.Library.FaceGuideAgeArea(instance.event),
					FaceGuideSmileStartHintLabel                : new Avs.Ui.Library.FaceGuideSmileStartHintLabel(instance.event),
					FaceGuideSmileStopHintLabel                 : new Avs.Ui.Library.FaceGuideSmileStopHintLabel(instance.event),
					FaceGuideLoadingProgressBar                 : new Avs.Ui.Library.FaceGuideLoadingProgressBar(instance.event),
				};

				instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.setStepNumber(5);

				instance.ui.FaceGuideLoadingProgressBar.hide();
				instance.ui.FaceGuideLoadingProgressBar.setStepNumber(1/*init*/ + 1/*expression check*/ + Config.MAX_VALID_FACE_SCAN_NUMBER/* face detection*/ + 5/* loading*/);
				instance.ui.FaceGuideLoadingProgressBar.setValue(0);

				instance.ui.SelfieAgeDetectionStatusLabel.show();
				instance.ui.SelfieAgeDetectionLoadingLabelArea.hide();
				instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.hide();
				instance.ui.FaceGuideAgeArea.hide();

			}

		}

	}

}
