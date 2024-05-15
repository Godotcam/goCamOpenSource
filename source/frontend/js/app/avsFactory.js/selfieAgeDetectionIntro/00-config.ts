namespace AvsFactory {

	export namespace SelfieAgeDetectionIntro {

		export class Config {

			public static create(config: ISelfieAgeDetectionIntroConfig) {

				Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;


			}

			public static DEFAULT_DEBUG_LEVEL = 4;

			public static API_BASE_ENDPOINT = '';

			public static FACING_MODE_REQUIRED = 'user';

		}

		interface ISelfieAgeDetectionIntroConfig {
			apiBaseEndpoint: string,
			defaultBugLevel?: number,
		}

	}

}
