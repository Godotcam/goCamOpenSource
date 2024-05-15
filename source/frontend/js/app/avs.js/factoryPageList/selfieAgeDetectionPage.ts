namespace Avs {

	export class SelfieAgeDetectionPage extends GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		public config: ISelfieAgeDetectionPageConfig;

		public event: Avs.Event.Listener;
		public ui: ISelfieAgeDetectionPageUi;
		public entity: IGenericPageEntities;
		public debug: Avs.Debug.Log;
		public debugLevel: number = SelfieAgeDetectionPage.DEFAULT_DEBUG_LEVEL;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: ISelfieAgeDetectionPageConfig) {

			super(config);

			this.config = config;

		}

	}

	export interface ISelfieAgeDetectionPageConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint: string,
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface ISelfieAgeDetectionPageUi {
		[key: string]: any

		SelfieAgeDetectionLoadingLabelPercentCounter?: Avs.Ui.Library.SelfieAgeDetectionLoadingLabelPercentCounter,
		SelfieAgeDetectionLoadingLabelArea?: Avs.Ui.Library.SelfieAgeDetectionLoadingLabelArea,
		SelfieAgeDetectionCurrentAgeArea?: Avs.Ui.Library.SelfieAgeDetectionCurrentAgeArea,
		SelfieAgeDetectionAverageAgeArea?: Avs.Ui.Library.SelfieAgeDetectionAverageAgeArea,
		SelfieAgeDetectionStatusLabel?: Avs.Ui.Library.SelfieAgeDetectionStatusLabel,
		FaceGuideSmileStartHintArea?: Avs.Ui.Library.FaceGuideSmileStartHintArea,
		FaceGuideSmileStopHintArea?: Avs.Ui.Library.FaceGuideSmileStopHintArea,
		FaceGuideAgeArea?: Avs.Ui.Library.FaceGuideAgeArea,
		FaceGuideSmileStartHintLabel?: Avs.Ui.Library.FaceGuideSmileStartHintLabel,
		FaceGuideSmileStopHintLabel?: Avs.Ui.Library.FaceGuideSmileStopHintLabel,

	}
}
