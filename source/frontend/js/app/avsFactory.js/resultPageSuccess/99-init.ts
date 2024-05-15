namespace AvsFactory {

	export namespace ResultPageSuccess {

		export var instance: Avs.ResultPageSuccess;

		export function init() {

			instance = new Avs.ResultPageSuccess({
				debugLevel           : Config.DEFAULT_DEBUG_LEVEL,
				api: {
					apiEndpoint: Config.API_BASE_ENDPOINT
				},
				event                : {
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
