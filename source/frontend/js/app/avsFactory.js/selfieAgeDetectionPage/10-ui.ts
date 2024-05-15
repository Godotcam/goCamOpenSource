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
				};

				instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.setStepNumber(5);

			}

		}

	}

}
