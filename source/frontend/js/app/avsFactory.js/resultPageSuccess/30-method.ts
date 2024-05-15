namespace AvsFactory {

	export namespace ResultPageSuccess {

		export class Method {

			public static init(): void {

				if (instance.entity.SelfieAgeDetection.averageAge > 0) {
					instance.ui.ResultPageSuccessSelfieArea.setContent(
						'<strong>' +
						SelfieAgeDetectionPage.Method.getAgeAreaString(
							'Final face average age',
							instance.entity.SelfieAgeDetection.averageAge
						) +
						'</strong>'
					);
				}

				if (instance.entity.ScanIdAgeVerification.lowestScanValue > 0) {
					instance.ui.ResultPageSuccessScanIdArea.setContent('<strong>Final document extracted age: ' + instance.entity.ScanIdAgeVerification.lowestScanValue + '</strong>');
				}

				let token      = (<any>Application).token;
				let successKey = Avs.Helper.Common.decodeBase64(token).successKey;

				instance.apiDataChannel.request('/success', {
					token                     : successKey,
					stepId                    : instance.entity.VerificationStepGlobal.stepId,
					deviceLocationVerification: instance.entity.VerificationStepGlobal.deviceLocationVerification,
					sessionId                 : instance.entity.VerificationStepGlobal.sessionId,
					idCountry                 : instance.entity.ScanIdAgeVerification.idCountry,
					idState                   : instance.entity.ScanIdAgeVerification.idState,
					idType                    : instance.entity.ScanIdAgeVerification.idTypeString,
				}).then(
					(successData: ISuccessData) => {

						instance.entity.VerificationStepGlobal.isVerified     = true;
						instance.entity.VerificationStepGlobal.successPayload = successData.successPayload;

					},
					(error: any) => {

						StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_FAIL_LAYER);

						ResultPageFail.init();
						ResultPageFail.Method.renderFailReason(error.code + ': Could not save your result');

					}
				);


			}

		}

	}

}
