namespace Avs {

	export class ScanIdAgeVerificationIntro extends GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		public config: IScanIdAgeVerificationIntroConfig;

		public event: Avs.Event.Listener;
		public ui: IScanIdAgeVerificationIntroUi;
		public entity: IGenericPageEntities;
		public debug: Avs.Debug.Log;
		public debugLevel: number = ScanIdAgeVerificationIntro.DEFAULT_DEBUG_LEVEL;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: IScanIdAgeVerificationIntroConfig) {

			super(config);

			this.config = config;

		}

	}

	export interface IScanIdAgeVerificationIntroConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint: string,
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface IScanIdAgeVerificationIntroUi {
		[key: string]: any

		ScanIdAgeDetectionStartButton?: Avs.Ui.Library.ScanIdAgeDetectionStartButton,
		ScanIdAgeVerificationDeviceSelect?: Avs.Ui.Library.ScanIdAgeVerificationDeviceSelect,
		ScanIdAgeVerificationTypeArea?: Avs.Ui.Library.ScanIdAgeVerificationTypeArea,
		ScanIdAgeVerificationTypeSelect?: Avs.Ui.Library.ScanIdAgeVerificationTypeSelect,
		ScanIdAgeVerificationCountrySelect?: Avs.Ui.Library.ScanIdAgeVerificationCountrySelect,
		ScanIdAgeVerificationStateArea?: Avs.Ui.Library.ScanIdAgeVerificationStateArea,
		ScanIdAgeVerificationStateSelect?: Avs.Ui.Library.ScanIdAgeVerificationStateSelect,
		ScanIdAgeVerificationDeviceAccessArea?: Avs.Ui.Library.ScanIdAgeVerificationDeviceAccessArea,
		ScanIdAgeVerificationSubmitArea?: Avs.Ui.Library.ScanIdAgeVerificationSubmitArea,
		ScanIdAgeVerificationDeviceSelectionArea?: Avs.Ui.Library.ScanIdAgeVerificationDeviceSelectionArea,
		ScanIdAgeVerificationDocumentHelperArea?: Avs.Ui.Library.ScanIdAgeVerificationDocumentHelperArea,
		ScanIdAgeDetectionCancelButton?: Avs.Ui.Library.ScanIdAgeDetectionCancelButton,
		ScanIdAgeVerificationUploadImageIntroButton?: Avs.Ui.Library.ScanIdAgeVerificationUploadImageIntroButton,
		ScanIdAgeVerificationUploadFileIntroInput?: Avs.Ui.Library.ScanIdAgeVerificationUploadFileIntroInput,

	}
}
