namespace AvsFactory {

	export namespace ResultPageSuccess {

		export class Binding {

			public static init(): void {

				instance.ui.ResultSuccessButton.onClick(() => {

					StartPage.instance.postMessage.emit(StartPage.Config.EVENT_ON_VERIFICATION_SUCCESS, {
						status : instance.entity.VerificationStepGlobal.isVerified,
						payload: instance.entity.VerificationStepGlobal.successPayload
					});

					StartPage.instance.postMessage.emit(StartPage.Config.EVENT_ON_VERIFICATION_DONE, {
						status : instance.entity.VerificationStepGlobal.isVerified,
						payload: instance.entity.VerificationStepGlobal.successPayload
					});

					if (StartPage.Config.VERIFICATION_VERSION != StartPage.Config.VERIFICATION_VERSION_IFRAME_V1) {
						let token            = (<any>Application).token;
						window.location.href = Avs.Helper.Common.decodeBase64(token).backLink;
					}

				});

			}

		}

	}

}
