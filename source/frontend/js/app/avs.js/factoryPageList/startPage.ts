namespace Avs {

	export class StartPage extends GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		static readonly DEFAULT_POOLING_INTERVAL_SECONDS = 5;

		static readonly ON_POLL_DATA  = 'StartPage.onPollData';
		static readonly ON_POLL_ERROR = 'StartPage.onPollError';

		public config: IStartPageConfig;

		public event: Avs.Event.Listener;
		public ui: IStartPageUi;
		public entity: IGenericPageEntities;
		public postMessage: Avs.Helper.PostMessage;
		public debug: Avs.Debug.Log;
		public debugLevel: number = StartPage.DEFAULT_DEBUG_LEVEL;

		public pollingEndpoint: string;
		public pollingInterval: number;
		public pollingTimerHandler: any;
		public pollingDataChannel: Avs.DataChannel.Http;
		public isPolling: boolean;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: IStartPageConfig) {

			super(config);

			this.config = config;

			this.postMessage = new Avs.Helper.PostMessage(this.event);
			this.postMessage.initListener();

			this.isPolling          = false;
			this.pollingEndpoint    = config.api.pollingEndpoint;
			this.pollingInterval    = config.api.pollingInterval || StartPage.DEFAULT_POOLING_INTERVAL_SECONDS;
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
					    this.event.emit(StartPage.ON_POLL_DATA, response);
				    },
				    (error: Avs.IApiError) => {
					    this.event.emit(StartPage.ON_POLL_ERROR, error);
				    }
			    );

		}

	}

	export interface IStartPageConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint?: string,
			pollingEndpoint: string,
			pollingInterval?: number
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface IStartPageUi {
		[key: string]: any

		StartButton?: Avs.Ui.Library.StartButton,
		TermsAndConditionsCheckbox?: Avs.Ui.Library.TermsAndConditionsCheckbox,
		VerificationTypeSelect?: Avs.Ui.Library.VerificationTypeSelect,
		FaceApiTypeSelect?: Avs.Ui.Library.FaceApiTypeSelect,
		TesseractTypeSelect?: Avs.Ui.Library.TesseractTypeSelect,
		DebugCloseButton?: Avs.Ui.Library.DebugCloseButton,
		DebugArea?: Avs.Ui.Library.DebugArea,
		TesseractPreloaderPercentArea?: Avs.Ui.Library.TesseractPreloaderPercentArea,
		TesseractPreloaderTextArea?: Avs.Ui.Library.TesseractPreloaderTextArea,
		TesseractPreloaderArea?: Avs.Ui.Library.TesseractPreloaderArea,
		FaceApiPreloaderPercentArea?: Avs.Ui.Library.FaceApiPreloaderPercentArea,
		FaceApiPreloaderTextArea?: Avs.Ui.Library.FaceApiPreloaderTextArea,
		FaceApiPreloaderArea?: Avs.Ui.Library.FaceApiPreloaderArea,
		ErrorMessageArea?: Avs.Ui.Library.ErrorMessageArea,
		ErrorMessageTextArea?: Avs.Ui.Library.ErrorMessageTextArea,
		ErrorMessageStartOverButton?: Avs.Ui.Library.ErrorMessageStartOverButton,
		ErrorMessageAdditionalTextArea?: Avs.Ui.Library.ErrorMessageAdditionalTextArea,
		ErrorMessageQrTextArea?: Avs.Ui.Library.ErrorMessageQrTextArea,
		VerificationTypeTabs?: Avs.Ui.Library.VerificationTypeTabs,
		GlobalIframeCloseButton?: Avs.Ui.Library.GlobalIframeCloseButton,
		StartPageErrorQrCode?: Avs.Ui.Library.StartPageErrorQrCode,
		TermsAndConditionsBackButton?: Avs.Ui.Library.TermsAndConditionsBackButton,
		WebCamAccessHelpBackButton?: Avs.Ui.Library.WebCamAccessHelpBackButton,
		TermsAndConditionsArea?: Avs.Ui.Library.TermsAndConditionsArea,
		WebCamAccessHelpArea?: Avs.Ui.Library.WebCamAccessHelpArea,
		StartPageTermsArea?: Avs.Ui.Library.StartPageTermsArea,

	}
}
