namespace AvsFactory {

	export namespace ResultPageFail {

		export var instance: Avs.ResultPageFail;

		export function init() {

			instance = new Avs.ResultPageFail({
				debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				api       : {
					apiEndpoint    : Config.API_BASE_ENDPOINT,
					pollingEndpoint: Config.POLLING_BASE_ENDPOINT
				},
				event     : {
					debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				}
			});

			Ui.init();
			Event.init();
			Binding.init();
			Method.init();

		}

	}

}
