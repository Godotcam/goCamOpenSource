namespace AvsFactory {

	export namespace SelfieAgeDetectionIntro {

		export class Method {

			public static init(): void {

				Avs.Helper.Common.hasCameraFacingMode(Config.FACING_MODE_REQUIRED, (facingModeExist: boolean) => {

					if (!facingModeExist) {

						instance.ui.SelfieAgeDetectionDeviceSelect.clearAllOptions();
						Avs.Helper.Common.getStreamDevices((devices: any) => {

							if (devices === null) {
								StartPage.Method.renderError(25034, 'Could not retrieve your device camera list');
								return;
							}

							let videoInputDeviceIdList: any = {};

							let foundDevicesNumber = 0;
							instance.ui.SelfieAgeDetectionDeviceSelect.clearAllOptions();
							for (let i = 0, j = devices.videoinput.length; i < j; i++) {

								let device                        = devices.videoinput[i];
								videoInputDeviceIdList[device.id] = true;
								instance.ui.SelfieAgeDetectionDeviceSelect.addOption(device.label, device.id, device.default);
								foundDevicesNumber++;

							}

							if (foundDevicesNumber > 1) {
								instance.ui.SelfieAgeDetectionDeviceSelectionArea.show();
							}

							instance.ui.SelfieAgeDetectionDeviceAccessArea.hide();
							instance.ui.SelfieAgeDetectionSubmitArea.show();

						});

					}
					else {

						instance.entity.SelfieAgeDetection.facingMode = Config.FACING_MODE_REQUIRED;
						instance.ui.SelfieAgeDetectionDeviceAccessArea.hide();
						instance.ui.SelfieAgeDetectionSubmitArea.show();

					}

				});

			}

		}

	}

}
