namespace AvsFactory {

	export namespace ResultPageFail {

		export class Event {

			public static init(): void {

				instance.event.on(Avs.ResultPageFail.ON_POLL_DATA,
					(event: Avs.Event.Listener, data: Avs.IApiResponseData) => {

						if (typeof data.isValidated !== 'undefined' && data.isValidated) {

							instance.stopApiPolling();
							instance.entity.VerificationStepGlobal.deviceLocationVerification = Avs.Entity.VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_EXTERNAL;

							Method.goToSuccessStep();

						}

					}
				);

				instance.event.on(Avs.ResultPageFail.ON_POLL_ERROR,
					(event: Avs.Event.Listener, data: Avs.IApiError) => {

						instance.debug.logToContainer('Qr verification polling error: ' + data.msg);

					}
				);

			}

		}

	}

}
