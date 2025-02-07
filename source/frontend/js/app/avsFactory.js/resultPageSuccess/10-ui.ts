namespace AvsFactory {

	export namespace ResultPageSuccess {

		export class Ui {

			public static init(): void {

				if (!instance.entity.VerificationStepGlobal.verificationComplete) {
					return;
				}

				instance.ui = {
					ResultPageSuccessScanIdArea: new Avs.Ui.Library.ResultPageSuccessScanIdArea(instance.event),
					ResultPageSuccessSelfieArea: new Avs.Ui.Library.ResultPageSuccessSelfieArea(instance.event),
					ResultSuccessButton        : new Avs.Ui.Library.ResultSuccessButton(instance.event),

				};

			}

		}

	}

}
