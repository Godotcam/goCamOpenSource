namespace Avs {

	export namespace DataChannel {

		/**
		 * Http requests data channel handler
		 *
		 */
		export class Http {

			private config: IHttpConfig;
			private debug: Avs.Debug.Log;

			constructor(
				config: IHttpConfig,
				event?: Avs.Event.Listener
			) {

				if (typeof Helper.Ajax === 'undefined') {
					this.debug.error(25002, 'Core ajax library not loaded');
					throw new Error('Core ajax library not loaded.');
				}

				this.config = config;
				this.debug  = new Avs.Debug.Log(this.config.debugLevel || Debug.Log.LOG_LEVEL_ERROR);

				this.debug.info('Http datachannel created.');

			}

			request(requestPath: string, data: IRequestData) {
				return Helper.Ajax.post(this.config.apiEndpoint + requestPath, data);
			}

			requestRaw(requestPath: string, data?: IRequestData, type?: string) {

				let requestType = type || 'post';

				return $.ajax({
					type    : requestType,
					dataType: 'json',
					data    : data || {},
					url     : this.config.apiEndpoint + requestPath
				});
			}

		}

		export interface IHttpConfig {
			apiEndpoint: string,
			debugLevel?: number
		}

		export interface IRequestData {
			[key: string]: any
		}

	}

}
