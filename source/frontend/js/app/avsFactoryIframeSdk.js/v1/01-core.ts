namespace AvsFactoryIframeSdk {

	export namespace V1 {

		export class Core {

			public iframeInstance: IframeHandler;

			public iframeSelectorId: string;
			public iframeLocationUrl: string;

			constructor() {

				this.iframeSelectorId  = Config.IFRAME_SELECTOR_ID;
				this.iframeLocationUrl = Config.IFRAME_LOCATION_URL;

				this.iframeInstance = new IframeHandler({
					iframeSelectorId : this.iframeSelectorId,
					iframeLocationUrl: this.iframeLocationUrl
				});

			}

			public init() {

				this.iframeInstance.create();
				this.iframeInstance.open();

				this.iframeInstance.onMessage = ((eventMessage: any) => {

					this.onMessage(eventMessage);

					switch (eventMessage.name) {

						case Config.EVENT_ON_CHECK_IFRAME_LOADED:

							break;

						case Config.EVENT_ON_INITIAL_VERIFICATION_SUCCESS:

							if (eventMessage.data.status) {
								this.iframeInstance.destroy();
							}

							break;

						case Config.EVENT_ON_INITIAL_VERIFICATION_NOT_FOUND:

							//

							break;

						case Config.EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR:

							//

							break;

						case Config.EVENT_ON_RESOURCES_LOADED:

							//

							break;

						case Config.EVENT_ON_VERIFICATION_DONE:

							//

							break;

						case Config.EVENT_ON_VERIFICATION_SUCCESS:

							if (eventMessage.data.status) {
								this.iframeInstance.destroy();
							}

							break;

						case Config.EVENT_ON_VERIFICATION_ERROR:

							//

							break;

						case Config.EVENT_ON_CLOSE_IFRAME:

							//

							break;



						default:

						//


					}

				});

			}

			public onMessage(eventMessage: any) {

				return;

			}

			public emit(messageName: string, messageData?: Object) {

				this.iframeInstance.emit(messageName, messageData);

			}

		}

	}

}
