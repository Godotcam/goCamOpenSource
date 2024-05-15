namespace AvsFactory {

	export namespace StartPage {

		export class Ui {

			public static init(): void {

				instance.ui = {
					StartButton                   : new Avs.Ui.Library.StartButton(instance.event),
					TermsAndConditionsCheckbox    : new Avs.Ui.Library.TermsAndConditionsCheckbox(instance.event),
					VerificationTypeSelect        : new Avs.Ui.Library.VerificationTypeSelect(instance.event),
					FaceApiTypeSelect             : new Avs.Ui.Library.FaceApiTypeSelect(instance.event),
					TesseractTypeSelect           : new Avs.Ui.Library.TesseractTypeSelect(instance.event),
					DebugCloseButton              : new Avs.Ui.Library.DebugCloseButton(instance.event),
					DebugArea                     : new Avs.Ui.Library.DebugArea(instance.event),
					TesseractPreloaderPercentArea : new Avs.Ui.Library.TesseractPreloaderPercentArea(instance.event),
					TesseractPreloaderTextArea    : new Avs.Ui.Library.TesseractPreloaderTextArea(instance.event),
					TesseractPreloaderArea        : new Avs.Ui.Library.TesseractPreloaderArea(instance.event),
					FaceApiPreloaderPercentArea   : new Avs.Ui.Library.FaceApiPreloaderPercentArea(instance.event),
					FaceApiPreloaderTextArea      : new Avs.Ui.Library.FaceApiPreloaderTextArea(instance.event),
					FaceApiPreloaderArea          : new Avs.Ui.Library.FaceApiPreloaderArea(instance.event),
					ErrorMessageArea              : new Avs.Ui.Library.ErrorMessageArea(instance.event),
					ErrorMessageTextArea          : new Avs.Ui.Library.ErrorMessageTextArea(instance.event),
					ErrorMessageStartOverButton   : new Avs.Ui.Library.ErrorMessageStartOverButton(instance.event),
					ErrorMessageAdditionalTextArea: new Avs.Ui.Library.ErrorMessageAdditionalTextArea(instance.event),
					ErrorMessageQrTextArea        : new Avs.Ui.Library.ErrorMessageQrTextArea(instance.event),
					VerificationTypeTabs          : new Avs.Ui.Library.VerificationTypeTabs(instance.event),
					GlobalIframeCloseButton       : new Avs.Ui.Library.GlobalIframeCloseButton(instance.event),
					StartPageErrorQrCode          : new Avs.Ui.Library.StartPageErrorQrCode(instance.event),
					TermsAndConditionsBackButton  : new Avs.Ui.Library.TermsAndConditionsBackButton(instance.event),
					WebCamAccessHelpBackButton    : new Avs.Ui.Library.WebCamAccessHelpBackButton(instance.event),
					TermsAndConditionsArea        : new Avs.Ui.Library.TermsAndConditionsArea(instance.event),
					WebCamAccessHelpArea          : new Avs.Ui.Library.WebCamAccessHelpArea(instance.event),
					StartPageTermsArea            : new Avs.Ui.Library.StartPageTermsArea(instance.event),

				};

				let ipCountry = Application.ipCountry.toUpperCase();
				if (Application.forceIpCountry) {
					ipCountry = Application.forceIpCountry.toUpperCase();
				}

				// get this dynamically later
				let countryToTabVisibilityConfig: { [key:string]: { [key:number]: boolean } } = {
					"DE": {
						[Avs.Ui.Library.VerificationTypeTabs.TAB_SELFIE_NUMBER]     : true,
						[Avs.Ui.Library.VerificationTypeTabs.TAB_SCAN_ID_NUMBER]    : false,
					}
				};

				if (typeof countryToTabVisibilityConfig[ipCountry] != "undefined") {

					if (!countryToTabVisibilityConfig[ipCountry][Avs.Ui.Library.VerificationTypeTabs.TAB_SELFIE_NUMBER]) {
						instance.ui.VerificationTypeTabs.hideTab(Avs.Ui.Library.VerificationTypeTabs.TAB_SELFIE_NUMBER);
					}

					if (!countryToTabVisibilityConfig[ipCountry][Avs.Ui.Library.VerificationTypeTabs.TAB_SCAN_ID_NUMBER]) {
						instance.ui.VerificationTypeTabs.hideTab(Avs.Ui.Library.VerificationTypeTabs.TAB_SCAN_ID_NUMBER);
					}

				}

				// handle also the selected tab together with the visible tabs dynamically
				let defaultTab = instance.ui.VerificationTypeTabs.verificationTypeToTabNumber(Config.VERIFICATION_TYPE_DEFAULT);
				instance.ui.VerificationTypeTabs.selectTab(defaultTab);

				let termsWereAgreed = Avs.Helper.Common.getLocalStorageBooleanValue(Config.KEY_LOCAL_STORAGE_TERMS_AGREED);
				if (termsWereAgreed === true) {
					instance.ui.TermsAndConditionsCheckbox.check();
					instance.entity.VerificationStepGlobal.termsAndConditionAgreement = true;
				}

				instance.ui.ErrorMessageAdditionalTextArea.hide();

				if (Config.VERIFICATION_VERSION == Config.VERIFICATION_VERSION_IFRAME_V1) {
					instance.ui.GlobalIframeCloseButton.show();
				}

			}

		}

	}

}
