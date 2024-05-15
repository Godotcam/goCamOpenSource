namespace AvsFactory {

	export namespace SelfieAgeDetectionIntro {

		export var instance: Avs.SelfieAgeDetectionIntro;

		export function init() {

			instance = new Avs.SelfieAgeDetectionIntro({
				debugLevel           : Config.DEFAULT_DEBUG_LEVEL,
				event                : {
					debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				}
			});

			instance.entity.VerificationStepGlobal.stepId = Avs.Entity.VerificationStepGlobal.STEP_SELFIE_AGE_DETECTION_INTRO;

			Ui.init();
			Event.init();
			Binding.init();
			Method.init();

		}

	}

}
