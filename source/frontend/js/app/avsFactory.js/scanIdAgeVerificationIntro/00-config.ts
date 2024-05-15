namespace AvsFactory {

	export namespace ScanIdAgeVerificationIntro {

		export class Config {

			public static create(config: IScanIdAgeVerificationIntroConfig) {

				Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;

				Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;

			}

			public static DEFAULT_DEBUG_LEVEL = 4;

			public static API_BASE_ENDPOINT = '';

			public static FACING_MODE_REQUIRED = 'environment';

		}

		interface IScanIdAgeVerificationIntroConfig {
			apiBaseEndpoint: string,
			defaultBugLevel?: number,
		}

	}

}
