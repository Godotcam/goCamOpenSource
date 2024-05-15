namespace AvsFactory {

	export namespace ResultPageSuccess {

		export class Config {

			public static create(config: IResultPageSuccessConfig) {

				Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;

				Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;

			}

			public static DEFAULT_DEBUG_LEVEL = 4;

			public static API_BASE_ENDPOINT = '/result';

		}

		interface IResultPageSuccessConfig {
			apiBaseEndpoint: string,
			defaultBugLevel?: number,
		}

	}

}
