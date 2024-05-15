namespace Avs {

	export class ResultPageFail extends GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		static readonly DEFAULT_POOLING_INTERVAL_SECONDS = 5;

		static readonly ON_POLL_DATA  = 'ResultPageFail.onPollData';
		static readonly ON_POLL_ERROR = 'ResultPageFail.onPollError';

		public config: IResultPageFailConfig;

		public event: Avs.Event.Listener;
		public ui: IResultPageFailUi;
		public entity: IGenericPageEntities;
		public debug: Avs.Debug.Log;
		public debugLevel: number = ResultPageFail.DEFAULT_DEBUG_LEVEL;

		public pollingEndpoint: string;
		public pollingInterval: number;
		public pollingTimerHandler: NodeJS.Timeout;
		public pollingDataChannel: Avs.DataChannel.Http;
		public isPolling: boolean;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: IResultPageFailConfig) {

			super(config);

			this.config = config;

			this.isPolling          = false;
			this.pollingEndpoint    = config.api.pollingEndpoint;
			this.pollingInterval    = config.api.pollingInterval || ResultPageFail.DEFAULT_POOLING_INTERVAL_SECONDS;
			this.pollingDataChannel = new Avs.DataChannel.Http({
				apiEndpoint: this.pollingEndpoint,
				debugLevel : this.config.debugLevel
			}, this.event);

		}


		public startApiPolling(partnerId: number, payload: string) {

			if (this.isPolling) {
				this.debug.warn('Api is already pooling');
				return;
			}

			this.isPolling = true;

			this.pollRequest(partnerId, payload);

			this.pollingTimerHandler = setInterval(() => {
				this.pollRequest(partnerId, payload);
			}, this.pollingInterval * 1000);

		}

		public stopApiPolling() {

			this.isPolling = false;

			clearInterval(this.pollingTimerHandler);

		}

		private pollRequest(partnerId: number, payload: string) {

			this.pollingDataChannel
			    .request('/isSuccess', {
				    p: partnerId,
				    d: payload
			    })
			    .then(
				    (response: Avs.IApiResponseData) => {
					    this.event.emit(ResultPageFail.ON_POLL_DATA, response);
				    },
				    (error: Avs.IApiError) => {
					    this.event.emit(ResultPageFail.ON_POLL_ERROR, error);
				    }
			    );

		}

	}

	export interface IResultPageFailConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint?: string,
			pollingEndpoint: string,
			pollingInterval?: number
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface IResultPageFailUi {
		[key: string]: any

		ResultFailButton?: Avs.Ui.Library.ResultFailButton,
		ResultPageFailReasonArea?: Avs.Ui.Library.ResultPageFailReasonArea,
		ErrorMessageQrTextArea?: Avs.Ui.Library.ErrorMessageQrTextArea,
		ResultPageFailQrArea?: Avs.Ui.Library.ResultPageFailQrArea,
		FailPageErrorQrCode?: Avs.Ui.Library.FailPageErrorQrCode,


	}
}
