namespace AvsFactory {

	export namespace StartPage {

		export class Config {

			public static create(config: IStartPageConfig) {

				Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;

				Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;

				Config.POLLING_BASE_ENDPOINT = config.pollingBaseEndpoint || Config.POLLING_BASE_ENDPOINT;

				Config.VERIFICATION_VERSION = config.verificationVersion || Config.VERIFICATION_VERSION;

				Config.PARTNER_ID = config.partnerId || Config.PARTNER_ID;
				Config.PAYLOAD    = config.payload || Config.PAYLOAD;

				Config.SESSION_ID = config.sessionId || Config.SESSION_ID;

				Config.PARTNER_COLOR_CONFIG = config.partnerColorConfig || Config.PARTNER_COLOR_CONFIG;

			}

			public static MAIN_CONTAINER_SELECTOR: string                       = '#avsMainContainer';
			public static START_PAGE_LAYER_SELECTOR: string                     = '#startPage';
			public static SELFIE_AGE_DETECTION_INTRO_LAYER_SELECTOR: string     = '#selfieAgeDetectionIntro';
			public static SELFIE_AGE_DETECTION_PAGE_LAYER_SELECTOR: string      = '#selfieAgeDetectionPage';
			public static SCAN_ID_AGE_VERIFICATION_INTRO_LAYER_SELECTOR: string = '#scanIdAgeVerificationIntro';
			public static SCAN_ID_AGE_VERIFICATION_PAGE_LAYER_SELECTOR: string  = '#scanIdAgeVerificationPage';
			public static RESULT_PAGE_SUCCESS_LAYER_SELECTOR: string            = '#resultPageSuccess';
			public static RESULT_PAGE_FAIL_LAYER_SELECTOR: string               = '#resultPageFail';

			public static MAIN_CONTAINER_LAYER                 = $(Config.MAIN_CONTAINER_SELECTOR);
			public static START_PAGE_LAYER                     = $(Config.START_PAGE_LAYER_SELECTOR);
			public static SELFIE_AGE_DETECTION_INTRO_LAYER     = $(Config.SELFIE_AGE_DETECTION_INTRO_LAYER_SELECTOR);
			public static SELFIE_AGE_DETECTION_PAGE_LAYER      = $(Config.SELFIE_AGE_DETECTION_PAGE_LAYER_SELECTOR);
			public static SCAN_ID_AGE_VERIFICATION_INTRO_LAYER = $(Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER_SELECTOR);
			public static SCAN_ID_AGE_VERIFICATION_PAGE_LAYER  = $(Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER_SELECTOR);
			public static RESULT_PAGE_SUCCESS_LAYER            = $(Config.RESULT_PAGE_SUCCESS_LAYER_SELECTOR);
			public static RESULT_PAGE_FAIL_LAYER               = $(Config.RESULT_PAGE_FAIL_LAYER_SELECTOR);

			public static FACE_API_PRELOADER_NAME  = 'faceApiIncludes';
			public static TESSERACT_PRELOADER_NAME = 'tesseractIncludes';

			public static VERIFICATION_TYPE_DEFAULT = Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL;

			public static EVENT_STATUS_REQUEST       = 'avs.statusRequest';
			public static EVENT_ON_VERIFICATION_DONE = 'avs.onVerificationDone';
			public static EVENT_VERIFICATION_START   = 'avs.verificationStart';
			public static EVENT_RESOURCE_PRELOAD     = 'avs.resourcePreload';

			public static EVENT_ON_START_PAGE_LOADED = 'avs.onStartPageLoaded';
			public static EVENT_ON_RESOURCES_LOADED  = 'avs.onResourcesLoaded';

			public static EVENT_SET_VERIFICATION_TYPE = 'avs.setVerificationType';
			public static EVENT_ON_CLOSE_IFRAME       = 'avs.onCloseIframe';

			public static EVENT_ON_INITIAL_VERIFICATION_SUCCESS     = 'avs.onInitialVerificationSuccess';
			public static EVENT_ON_INITIAL_VERIFICATION_ERROR       = 'avs.onInitialVerificationError';
			public static EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR = 'avs.onInitialVerificationFatalError';
			public static EVENT_ON_VERIFICATION_SUCCESS             = 'avs.onVerificationSuccess';
			public static EVENT_ON_VERIFICATION_ERROR               = 'avs.onVerificationError';

			public static VERIFICATION_VERSION_STANDARD_V1 = 1;
			public static VERIFICATION_VERSION_IFRAME_V1   = 2;

			public static VERIFICATION_VERSION = Config.VERIFICATION_VERSION_STANDARD_V1;

			public static SESSION_ID: string | null                                       = null;
			public static PARTNER_COLOR_CONFIG: IStartPageConfigPartnerColorConfig | null = null;

			public static DEFAULT_DEBUG_LEVEL = 4;

			public static API_BASE_ENDPOINT = '';

			public static KEY_LOCAL_STORAGE_TERMS_AGREED = 'GoCamLocalStorageTermsWereAgreed';

			public static PARTNER_ID                        = 0;
			public static PAYLOAD                           = '';
			public static CREDIT_CARD_VERIFICATION_ENDPOINT = '';

			public static POLLING_BASE_ENDPOINT = '/result';

		}

		interface IStartPageConfig {
			apiBaseEndpoint?: string,
			pollingBaseEndpoint?: string,
			defaultBugLevel?: number,
			verificationVersion?: number,
			partnerId: number,
			payload: string,
			sessionId: string,
			partnerColorConfig?: IStartPageConfigPartnerColorConfig
		}

		interface IStartPageConfigPartnerColorConfig {
			header: {
				label: string,
				logo: string,
				background: string,
				foreground: string
			},
			body: {
				background: string,
				foreground: string,
				foregroundCallToAction?: string,
				button: {
					background: string,
					foreground: string,
					foregroundCallToAction: string
				}
			}
		}

	}

}
