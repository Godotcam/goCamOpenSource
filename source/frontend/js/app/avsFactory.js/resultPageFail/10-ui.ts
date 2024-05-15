namespace AvsFactory {

	export namespace ResultPageFail {

		export class Ui {

			public static init(): void {

				instance.ui = {
					ResultFailButton        : new Avs.Ui.Library.ResultFailButton(instance.event),
					ResultPageFailReasonArea: new Avs.Ui.Library.ResultPageFailReasonArea(instance.event),
					ErrorMessageQrTextArea  : new Avs.Ui.Library.ErrorMessageQrTextArea(instance.event),
					ResultPageFailQrArea    : new Avs.Ui.Library.ResultPageFailQrArea(instance.event),
					FailPageErrorQrCode     : new Avs.Ui.Library.FailPageErrorQrCode(instance.event),
				};

			}

		}

	}

}
