namespace AvsFactory {

	export namespace StartPage {

		export var instance: Avs.StartPage;

		export function init() {

			instance = new Avs.StartPage({
				debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				api       : {
					pollingEndpoint: Config.POLLING_BASE_ENDPOINT
				},
				event     : {
					debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				},
			});

			Ui.init();
			Event.init();
			Binding.init();
			Method.init();

		}

	}

}
