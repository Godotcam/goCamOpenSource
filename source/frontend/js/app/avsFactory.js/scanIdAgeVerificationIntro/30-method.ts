namespace AvsFactory {

	export namespace ScanIdAgeVerificationIntro {

		export class Method {

			public static init(): void {

				StartPage.Method.preloadTesseractResources();
				StartPage.instance.ui.TesseractPreloaderArea.show();

				Method.renderCountryList();
				Method.renderStateList(instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption());

				instance.ui.ScanIdAgeVerificationDeviceSelect.clearAllOptions();
				instance.ui.ScanIdAgeVerificationDeviceSelect.initStates();
				Avs.Helper.Common.hasCameraFacingMode(Config.FACING_MODE_REQUIRED, (facingModeExist: boolean) => {

					if (!facingModeExist) {

						Avs.Helper.Common.getStreamDevices((devices: any) => {

							if (devices !== null) {

								let videoInputDeviceIdList: any = {};

								let foundDevicesNumber = 0;
								instance.ui.ScanIdAgeVerificationDeviceSelect.clearAllOptions();
								instance.ui.ScanIdAgeVerificationDeviceSelect.initStates();
								for (let i = 0, j = devices.videoinput.length; i < j; i++) {

									let device                        = devices.videoinput[i];
									videoInputDeviceIdList[device.id] = true;
									instance.ui.ScanIdAgeVerificationDeviceSelect.addOption(device.label, device.id, device.default);
									foundDevicesNumber++;

								}

								if (foundDevicesNumber > 1) {
									instance.ui.ScanIdAgeVerificationDeviceSelectionArea.show();
								}

							}
							else {
								instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode = true;
							}

							instance.ui.ScanIdAgeVerificationDeviceAccessArea.hide();
							instance.ui.ScanIdAgeVerificationSubmitArea.show();

						});

					}
					else {

						instance.entity.ScanIdAgeVerification.facingMode = Config.FACING_MODE_REQUIRED;
						instance.ui.ScanIdAgeVerificationDeviceAccessArea.hide();
						instance.ui.ScanIdAgeVerificationSubmitArea.show();

					}

				});

			}

			public static renderCountryList() {

				let ipCountry      = Application.ipCountry.toUpperCase();
				let browserCountry = Avs.Helper.Country.getBrowserCountryFromLanguage().toUpperCase();
				if (Application.forceIpCountry) {
					ipCountry = Application.forceIpCountry.toUpperCase();
				}

				instance.ui.ScanIdAgeVerificationCountrySelect.clearAllOptions();
				instance.ui.ScanIdAgeVerificationCountrySelect.initStates();

				if (Avs.Config.scanIdList[ipCountry]) {
					instance.ui.ScanIdAgeVerificationCountrySelect.addOption(Avs.Config.scanIdList[ipCountry]['countryName'], ipCountry, false);
				}

				if (Avs.Config.scanIdList[browserCountry] && ipCountry != browserCountry) {
					instance.ui.ScanIdAgeVerificationCountrySelect.addOption(Avs.Config.scanIdList[browserCountry]['countryName'], browserCountry, false);
				}

				for (let i in Avs.Config.scanIdList) {
					if ([ipCountry, browserCountry].indexOf(i) > -1) {
						continue;
					}

					instance.ui.ScanIdAgeVerificationCountrySelect.addOption(Avs.Config.scanIdList[i]['countryName'], i, false);
				}

			}

			public static renderStateList(countryCode: string) {

				if (Avs.Config.scanIdList[countryCode]['hasMultipleState']) {
					instance.ui.ScanIdAgeVerificationStateArea.show();

					for (let i in Avs.Config.scanIdList[countryCode]['stateList']) {
						instance.ui.ScanIdAgeVerificationStateSelect.addOption(Avs.Config.scanIdList[countryCode]['stateList'][i]['stateName'], i, false);
					}

					Method.renderDocumentList(
						instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption(),
						instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption()
					);

					return;
				}

				instance.ui.ScanIdAgeVerificationStateArea.hide();
				instance.ui.ScanIdAgeVerificationStateSelect.clearAllOptions();
				instance.ui.ScanIdAgeVerificationStateSelect.initStates();

				Method.renderDocumentList(
					instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption(),
					instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption()
				);

			}

			public static renderDocumentList(countryCode: string, stateCode: string) {

				instance.ui.ScanIdAgeVerificationTypeSelect.clearAllOptions();
				instance.ui.ScanIdAgeVerificationTypeSelect.initStates();

				instance.ui.ScanIdAgeVerificationTypeArea.show();

				if (stateCode !== null) {
					if (Avs.Config.scanIdList[countryCode]['stateList'][stateCode]['idConfig']['idCard'].length > 0) {
						instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Identity card', 'idCard', false);
					}

					if (Avs.Config.scanIdList[countryCode]['stateList'][stateCode]['idConfig']['passport'].length > 0) {
						instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Passport', 'passport', false);
					}

					if (Avs.Config.scanIdList[countryCode]['stateList'][stateCode]['idConfig']['driverLicence'].length > 0) {
						instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Driver license', 'driverLicence', false);
					}

					return;

				}

				if (Avs.Config.scanIdList[countryCode]['idConfig']['idCard'].length > 0) {
					instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Identity card', 'idCard', false);
				}

				if (Avs.Config.scanIdList[countryCode]['idConfig']['passport'].length > 0) {
					instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Passport', 'passport', false);
				}

				if (Avs.Config.scanIdList[countryCode]['idConfig']['driverLicence'].length > 0) {
					instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Driver license', 'driverLicence', false);
				}

			}

		}

	}

}
