namespace Avs {

	export namespace Plugin {

		/**
		 * Base class for handling Plugin
		 *
		 */
		export class Handler {

			public config: IPluginHandlerConfig;
			public debug: Avs.Debug.Log;
			public event: Avs.Event.Listener;
			public api: Avs.IGenericApi;

			constructor(
				config: IPluginHandlerConfig,
				event: Avs.Event.Listener,
				api: Avs.IGenericApi
			) {

				this.config = config;
				this.debug  = new Avs.Debug.Log(this.config.debugLevel || Debug.Log.LOG_LEVEL_ERROR);

				this.event = event;
				this.api    = api;

				this.beforeCreate();

			}

			beforeCreate(): void {
			}

			created(): void {
			}

			beforeDestroy(): void {
			}

		}

		export interface IPluginHandlerConfig {
			debugLevel?: number,
		}

	}

}
