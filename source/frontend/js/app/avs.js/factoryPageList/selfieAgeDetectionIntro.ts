namespace Avs {

	export class SelfieAgeDetectionIntro extends GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		public config: ISelfieAgeDetectionIntroConfig;

		public event: Avs.Event.Listener;
		public ui: ISelfieAgeDetectionIntroUi;
		public entity: IGenericPageEntities;
		public debug: Avs.Debug.Log;
		public debugLevel: number = SelfieAgeDetectionIntro.DEFAULT_DEBUG_LEVEL;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: ISelfieAgeDetectionIntroConfig) {

			super(config);

			this.config = config;

		}

	}

	export interface ISelfieAgeDetectionIntroConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint: string,
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface ISelfieAgeDetectionIntroUi {
		[key: string]: any

		SelfieAgeDetectionStartButton?: Avs.Ui.Library.SelfieAgeDetectionStartButton,
		SelfieAgeDetectionDeviceSelect?: Avs.Ui.Library.SelfieAgeDetectionDeviceSelect,
		SelfieAgeDetectionDeviceAccessArea?: Avs.Ui.Library.SelfieAgeDetectionDeviceAccessArea,
		SelfieAgeDetectionSubmitArea?: Avs.Ui.Library.SelfieAgeDetectionSubmitArea,
		SelfieAgeDetectionDeviceSelectionArea?: Avs.Ui.Library.SelfieAgeDetectionDeviceSelectionArea,
		SelfieAgeDetectionCancelButton?: Avs.Ui.Library.SelfieAgeDetectionCancelButton,

	}
}
