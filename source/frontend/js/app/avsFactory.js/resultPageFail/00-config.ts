namespace AvsFactory {

	export namespace ResultPageFail {

		export class Config {

			public static create(config: IResultPageFailConfig) {

				Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;

				Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;

				Config.POLLING_BASE_ENDPOINT = config.pollingBaseEndpoint || Config.POLLING_BASE_ENDPOINT;

			}

			public static DEFAULT_DEBUG_LEVEL = 4;

			public static API_BASE_ENDPOINT = '/result';
			public static POLLING_BASE_ENDPOINT = '/result';


		}

		interface IResultPageFailConfig {
			apiBaseEndpoint: string,
			pollingBaseEndpoint?: string,
			defaultBugLevel?: number,
		}

	}

}
