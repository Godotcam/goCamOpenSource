namespace AvsFactory {

	export namespace ScanIdAgeVerificationPage {

		export class Config {

			public static create(config: IScanIdAgeVerificationPageConfig) {

				Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;

				Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;

				let verificationStepGlobalEntity = Avs.Entity.VerificationStepGlobal.getInstance();
				if (
					verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_EN ||
					verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR
				) {
					Config.TESSERACT_LANGUAGE_PATH = '/static/js/vendor/tesseract-js-core-2.0.0/tessdata/best';
				}
				else {
					Config.TESSERACT_LANGUAGE_PATH = '/static/js/vendor/tesseract-js-core-2.0.0/tessdata/fast';
				}

				if (
					verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_FAST_FR ||
					verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR
				) {
					Config.TESSERACT_LANGUAGE = Avs.Plugin.Library.Ml.Tesseract.LANGUAGE_FR;
				}
				else {
					Config.TESSERACT_LANGUAGE = Avs.Plugin.Library.Ml.Tesseract.LANGUAGE_EN;
				}

			}

			public static DEFAULT_DEBUG_LEVEL = 4;

			public static API_BASE_ENDPOINT = '';

			public static CAMERA_SOURCE_ROOT_ELEMENT_CONTAINER = '#scanIdVideoContainer';
			public static CAMERA_SOURCE_ROOT_ELEMENT           = '#scanIdVideo';
			public static CAMERA_SOURCE_CANVAS_OVERLAY_ELEMENT = '#scanIdVideoOverlayCanvas';
			public static CAMERA_SOURCE_CANVAS_RESULT_ELEMENT  = '#scanIdVideoResultCanvas';
			public static ID_CARD_GUIDE_CONTAINER              = '#idCardGuide';
			public static ID_CARD_GUIDE_BIRTH_DATE_CONTAINER   = '#idCardGuideBirthDate';

			public static DOCUMENT_PROCESSING_CANVAS_CONTAINER = '#documentProcessingCanvasContainer';
			public static DOCUMENT_PROCESSING_CANVAS           = '#documentProcessingCanvas';

			public static FACE_API_WEIGHTS_PATH = '/static/js/appFiles/faw/';

			public static TESSERACT_WORKER_PATH   = '/static/js/appFiles/tjs/w.min.js';
			public static TESSERACT_CORE_PATH     = '/static/js/appFiles/tjs/tscasm.js';
			public static TESSERACT_LANGUAGE_PATH = '/static/js/appFiles/tjs/data';
			public static TESSERACT_LANGUAGE      = Avs.Plugin.Library.Ml.Tesseract.LANGUAGE_FR;

			public static MAX_VALID_DATA_EXTRACTION_NUMBER = 1;
			public static MAX_TOTAL_DATA_EXTRACTION_NUMBER = 50;

			public static MAX_VALID_FACE_SCAN_NUMBER = 3;
			public static MAX_TOTAL_FACE_SCAN_NUMBER = 30;

			public static DATA_EXTRACTION_INTERVAL_MS = 500;
			public static FACE_SCAN_INTERVAL_MS       = 500;
			public static PHOTO_TAKE_INTERVAL_MS      = 500;

			public static MAX_FACE_DISTANCE_TO_MATCH = 0.55;
			public static MIN_VALID_FACE_MATCH       = 5;

			public static MIN_SCAN_VALUE = 18;
			public static MAX_SCAN_VALUE = 150;

			public static BRIGHTNESS_ADJUSTMENT_MAX_VALUE = 20;
			public static CONTRAST_ADJUSTMENT_MAX_VALUE   = 20;
			public static ZOOM_ADJUSTMENT_MAX_VALUE       = 3;

			public static EVENT_NAME_PREFIX = 'scanIdAgeVerificationPage';

			public static BOUNDARY_TOP    = 20;
			public static BOUNDARY_BOTTOM = 20;
			public static BOUNDARY_LEFT   = 20;
			public static BOUNDARY_RIGHT  = 20;

			public static BOUNDARY_MAX_WIDTH  = 1200;
			public static BOUNDARY_MAX_HEIGHT = 1200;

			public static FACING_MODE_REQUIRED = 'environment';

		}

		interface IScanIdAgeVerificationPageConfig {
			apiBaseEndpoint: string,
			defaultBugLevel?: number,
		}

	}

}
