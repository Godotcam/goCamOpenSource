namespace AvsFactory {

	export namespace ScanIdAgeVerificationIntro {

		export var instance: Avs.ScanIdAgeVerificationIntro;

		export function init() {

			instance = new Avs.ScanIdAgeVerificationIntro({
				debugLevel           : Config.DEFAULT_DEBUG_LEVEL,
				event                : {
					debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				}
			});

			instance.entity.VerificationStepGlobal.stepId = Avs.Entity.VerificationStepGlobal.STEP_SCAN_ID_AGE_VERIFICATION_INTRO;

			Ui.init();
			Event.init();
			Binding.init();
			Method.init();

		}

	}

}
