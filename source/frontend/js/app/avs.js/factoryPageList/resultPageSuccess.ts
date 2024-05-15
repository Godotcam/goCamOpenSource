namespace Avs {

	export class ResultPageSuccess extends GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		public config: IResultPageSuccessConfig;

		public event: Avs.Event.Listener;
		public ui: IResultPageSuccessUi;
		public entity: IGenericPageEntities;
		public debug: Avs.Debug.Log;
		public debugLevel: number = ResultPageSuccess.DEFAULT_DEBUG_LEVEL;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: IResultPageSuccessConfig) {

			super(config);

			this.config = config;

			this.apiDataChannel = new Avs.DataChannel.Http({
				apiEndpoint: this.config.api.apiEndpoint,
				debugLevel : this.config.debugLevel
			});

		}

	}

	export interface IResultPageSuccessConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint: string,
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface IResultPageSuccessUi {
		[key: string]: any

		StartButton?: Avs.Ui.Library.StartButton,
		ResultPageSuccessScanIdArea?: Avs.Ui.Library.ResultPageSuccessScanIdArea,
		ResultPageSuccessSelfieArea?: Avs.Ui.Library.ResultPageSuccessSelfieArea,
		ResultSuccessButton?: Avs.Ui.Library.ResultSuccessButton,

	}
}
