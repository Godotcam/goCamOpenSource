namespace AvsFactory {

	export namespace ResultPageFail {

		export class Method {

			public static init(): void {

				instance.entity.VerificationStepGlobal.isVerified = false;

			}

			public static saveError(errorCode: number) {

				let token   = (<any>Application).token;
				let failKey = Avs.Helper.Common.decodeBase64(token).failKey;

				instance.apiDataChannel.request('/fail', {
					token                     : failKey,
					errorCode                 : errorCode,
					stepId                    : instance.entity.VerificationStepGlobal.stepId,
					deviceLocationVerification: instance.entity.VerificationStepGlobal.deviceLocationVerification,
					sessionId                 : instance.entity.VerificationStepGlobal.sessionId,
					idCountry                 : instance.entity.ScanIdAgeVerification.idCountry,
					idState                   : instance.entity.ScanIdAgeVerification.idState,
					idType                    : instance.entity.ScanIdAgeVerification.idTypeString,
				}).then(
					() => {
					},
					(error: any) => {
						instance.ui.ResultPageFailReasonArea.setContent(error.code + ': Could not save your result');
					}
				);

			}

			public static renderFailReason(failReason: string) {

				instance.ui.ResultPageFailReasonArea.setContent(failReason);

				instance.ui.ResultPageFailQrArea.hide();

				if (!Application.deviceInfo['os.mobile']) {

					instance.ui.ResultPageFailQrArea.show();

					instance.ui.FailPageErrorQrCode.renderTestToOtherDeviceQr();

					instance.startApiPolling(
						instance.entity.VerificationStepGlobal.partnerId,
						instance.entity.VerificationStepGlobal.payload
					);

				}

			}

			public static goToSuccessStep() {
				StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
				ResultPageSuccess.init();
			}

		}

	}

}
