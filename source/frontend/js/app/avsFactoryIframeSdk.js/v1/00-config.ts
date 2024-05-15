namespace AvsFactoryIframeSdk {

	export namespace V1 {

		export class Config {

			public static create(config: IStartPageConfig) {

				Config.VERIFICATION_TYPE_DEFAULT = config.verificationType || Config.VERIFICATION_TYPE_DEFAULT;

				Config.IFRAME_SELECTOR_ID  = config.iframeSelectorId || Config.IFRAME_SELECTOR_ID;
				Config.IFRAME_LOCATION_URL = config.iframeLocationUrl || Config.IFRAME_LOCATION_URL;

			}

			public static IFRAME_SELECTOR_ID  = 'avsFactoryIframe';
			public static IFRAME_LOCATION_URL = '';

			public static EVENT_STATUS_REQUEST         = 'avs.statusRequest';
			public static EVENT_ON_VERIFICATION_DONE   = 'avs.onVerificationDone';
			public static EVENT_VERIFICATION_START     = 'avs.verificationStart';
			public static EVENT_RESOURCE_PRELOAD       = 'avs.resourcePreload';
			public static EVENT_ON_CHECK_IFRAME_LOADED = 'avs.onCheckIframeLoaded';
			public static EVENT_SET_VERIFICATION_TYPE  = 'avs.setVerificationType';

			public static EVENT_ON_START_PAGE_LOADED                = 'avs.onStartPageLoaded';
			public static EVENT_ON_RESOURCES_LOADED                 = 'avs.onResourcesLoaded';
			public static EVENT_ON_INITIAL_VERIFICATION_SUCCESS     = 'avs.onInitialVerificationSuccess';
			public static EVENT_ON_INITIAL_VERIFICATION_NOT_FOUND   = 'avs.onInitialVerificationNotFound';
			public static EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR = 'avs.onInitialVerificationFatalError';
			public static EVENT_ON_VERIFICATION_SUCCESS             = 'avs.onVerificationSuccess';
			public static EVENT_ON_VERIFICATION_ERROR               = 'avs.onVerificationError';

			public static EVENT_ON_CLOSE_IFRAME = 'avs.onCloseIframe';

			public static VERIFICATION_TYPE_QR        = 1;
			public static VERIFICATION_TYPE_SMS       = 2;
			public static VERIFICATION_TYPE_DETECTION = 3;

			public static VERIFICATION_TYPE_DEFAULT = Config.VERIFICATION_TYPE_DETECTION;

		}

		interface IStartPageConfig {
			verificationType: number,
			iframeSelectorId?: string,
			iframeLocationUrl?: string
		}

	}

}
