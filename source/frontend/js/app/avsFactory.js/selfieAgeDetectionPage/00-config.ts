namespace AvsFactory {

	export namespace SelfieAgeDetectionPage {

		export class Config {

			public static create(config: ISelfieAgeDetectionPageConfig) {

				Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;

				Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;

			}

			public static DEFAULT_DEBUG_LEVEL = 4;

			public static API_BASE_ENDPOINT = '';

			public static CAMERA_SOURCE_ROOT_ELEMENT_CONTAINER = '#selfieVideoContainer';
			public static CAMERA_SOURCE_ROOT_ELEMENT           = '#selfieVideo';
			public static CAMERA_SOURCE_CANVAS_OVERLAY_ELEMENT = '#selfieVideoOverlayCanvas';
			public static FACE_GUIDE_ELEMENT                   = '#faceGuide';

			public static FACE_API_WEIGHTS_PATH = '/static/js/appFiles/faw/';

			public static MAX_VALID_FACE_SCAN_NUMBER = 5;
			public static MAX_TOTAL_FACE_SCAN_NUMBER = 40;

			public static MAX_TOTAL_FACE_EXPRESSION_SCAN_NUMBER = 40;

			public static MIN_ALLOWED_AVERAGE_AGE = 25;

			public static FACE_SCAN_INTERVAL_MS = 500;

			public static EVENT_NAME_PREFIX = 'selfieAgeDetectionPage';

			public static MAX_FACE_DISTANCE_TO_MATCH = 0.5;
			public static MIN_VALID_FACE_MATCH       = 5;

			public static BOUNDARY_TOP    = 40;
			public static BOUNDARY_BOTTOM = 40;
			public static BOUNDARY_LEFT   = 40;
			public static BOUNDARY_RIGHT  = 40;

			public static BOUNDARY_MAX_WIDTH  = 800;
			public static BOUNDARY_MAX_HEIGHT = 800;

			public static BOUNDARY_WIDTH  = 420;
			public static BOUNDARY_HEIGHT = 600;

		}

		interface ISelfieAgeDetectionPageConfig {
			apiBaseEndpoint: string,
			defaultBugLevel?: number,
		}

	}

}
