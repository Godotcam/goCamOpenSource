namespace Avs {

	export class ScanIdAgeVerificationPage extends GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		public config: IScanIdAgeVerificationPageConfig;

		public event: Avs.Event.Listener;
		public ui: IScanIdAgeVerificationPageUi;
		public entity: IGenericPageEntities;
		public debug: Avs.Debug.Log;
		public debugLevel: number = ScanIdAgeVerificationPage.DEFAULT_DEBUG_LEVEL;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: IScanIdAgeVerificationPageConfig) {

			super(config);

			this.config = config;

		}

	}

	export interface IScanIdAgeVerificationPageConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint: string,
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface IScanIdAgeVerificationPageUi {
		[key: string]: any

		ScanIdAgeVerificationStatusLabel?: Avs.Ui.Library.ScanIdAgeVerificationStatusLabel,
		ScanIdAgeVerificationLoadingLabelArea?: Avs.Ui.Library.ScanIdAgeVerificationLoadingLabelArea,
		ScanIdAgeVerificationLoadingLabelPercentCounter?: Avs.Ui.Library.ScanIdAgeVerificationLoadingLabelPercentCounter,
		ScanIdAgeVerificationCurrentAgeArea?: Avs.Ui.Library.ScanIdAgeVerificationCurrentAgeArea,
		RatioRecommendArea?: Avs.Ui.Library.RatioRecommendArea,
		RatioRecommendTextArea?: Avs.Ui.Library.RatioRecommendTextArea,
		RatioRecommendButton?: Avs.Ui.Library.RatioRecommendButton,
		ScanIdAgeVerificationUploadImageButton?: Avs.Ui.Library.ScanIdAgeVerificationUploadImageButton,
		ScanIdAgeVerificationTakePhotoButton?: Avs.Ui.Library.ScanIdAgeVerificationTakePhotoButton,
		ScanIdAgeVerificationUploadFileInput?: Avs.Ui.Library.ScanIdAgeVerificationUploadFileInput,
		ScanIdAgeVerificationDocumentProcessingProcessArea?: Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingProcessArea,
		ScanIdAgeVerificationDocumentProcessingConfirmationArea?: Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingConfirmationArea,
		ScanIdAgeVerificationDocumentProcessingArea?: Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingArea,
		ScanIdAgeVerificationBirthDateButton?: Avs.Ui.Library.ScanIdAgeVerificationBirthDateButton,
		ScanIdAgeVerificationFaceSimilarityButton?: Avs.Ui.Library.ScanIdAgeVerificationFaceSimilarityButton,
		ScanIdAgeVerificationLoadingLibraryButton?: Avs.Ui.Library.ScanIdAgeVerificationLoadingLibraryButton,
		ScanIdAgeVerificationConfirmationYesButton?: Avs.Ui.Library.ScanIdAgeVerificationConfirmationYesButton,
		ScanIdAgeVerificationConfirmationNoButton?: Avs.Ui.Library.ScanIdAgeVerificationConfirmationNoButton,
		DocumentProcessingCanvasLoadingOverlayArea?: Avs.Ui.Library.DocumentProcessingCanvasLoadingOverlayArea,
		ScanIdAgeVerificationFaceSimilarityArea?: Avs.Ui.Library.ScanIdAgeVerificationFaceSimilarityArea,

	}
}
