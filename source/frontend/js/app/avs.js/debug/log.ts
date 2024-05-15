namespace Avs {

	export namespace Debug {

		/**
		 * Logger class activated based on a specified debug level
		 *
		 */
		export class Log {

			static readonly LOG_LEVEL_ERROR = 1;
			static readonly LOG_LEVEL_WARN  = 2;
			static readonly LOG_LEVEL_INFO  = 4;

			static readonly CONTAINER_SELECTOR = '#debugArea';

			private debugLevel: number;
			private container: JQuery;

			constructor(debugLevel?: number) {

				this.debugLevel = Log.LOG_LEVEL_ERROR;
				this.container  = $(Log.CONTAINER_SELECTOR);

				if (debugLevel) {
					this.debugLevel = debugLevel;
				}

			}

			public error(...params: Array<any>): void {

				if (this.debugLevel >= Log.LOG_LEVEL_ERROR) {
					console.error.apply(console, <any>arguments);
				}

			}

			public warn(...params: Array<any>): void {

				if (this.debugLevel >= Log.LOG_LEVEL_WARN) {
					console.warn.apply(console, <any>arguments);
				}

			}

			public info(...params: Array<any>): void {

				if (this.debugLevel >= Log.LOG_LEVEL_INFO) {
					console.log.apply(console, <any>arguments);
				}

			}

			public logToContainer(content: any) {

				if (this.container.length && !this.container.hasClass('isHidden')) {
					this.container.append(content);
					this.container.get(0).scrollTop = this.container.get(0).scrollHeight;
				}

			}

			public static genericLog(...params: Array<any>): void {

				let debug = new Debug.Log(Debug.Log.LOG_LEVEL_INFO);
				debug.info(params);

			}

		}

	}

}
