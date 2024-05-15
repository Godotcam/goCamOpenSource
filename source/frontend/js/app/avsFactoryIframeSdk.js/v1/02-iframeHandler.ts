namespace AvsFactoryIframeSdk {

	export namespace V1 {

		export interface IIframeHandlerConfig {
			iframeSelectorId: string,
			iframeLocationUrl: string
		}

		export class IframeHandler {

			public iframeSelectorId: string;
			public iframeLocationUrl: string;
			public iframeLocationHostname: string;
			public opener: Window;
			public eventsWereInit: boolean;
			public iframeElement: HTMLIFrameElement;

			constructor(config: IIframeHandlerConfig) {

				this.iframeSelectorId  = config.iframeSelectorId;
				this.iframeLocationUrl = config.iframeLocationUrl;

				let url                     = new URL(this.iframeLocationUrl);
				this.iframeLocationHostname = url.hostname;
				this.eventsWereInit         = false;

			}

			public create() {

				this.iframeElement = document.createElement('iframe');
				this.iframeElement.setAttribute('id', this.iframeSelectorId);
				this.iframeElement.setAttribute('name', this.iframeSelectorId);
				this.iframeElement.setAttribute('frameborder', '0');
				this.iframeElement.setAttribute('allowtransparency', 'true');
				this.iframeElement.style.width    = '1px';
				this.iframeElement.style.height   = '1px';
				this.iframeElement.style.position = 'fixed';
				this.iframeElement.style.top      = '0';
				this.iframeElement.style.left     = '0';
				this.iframeElement.allow          = 'camera http://localhost:3300';
				document.body.appendChild(this.iframeElement);

			}

			public destroy() {

				this.iframeElement.setAttribute('src', '');
				this.iframeElement.remove();
				this.iframeElement = null;

			}

			public open() {

				this.opener = window.open(this.iframeLocationUrl, this.iframeSelectorId);
				this.initEvents();

				this.iframeElement.onload = () => {
					this.onMessage({
						name: Config.EVENT_ON_CHECK_IFRAME_LOADED
					});
				}

			}

			public refresh() {

				this.opener.location.href = this.iframeLocationUrl;

			}

			public expand() {

				this.iframeElement.style.width   = '100%';
				this.iframeElement.style.height  = '100%';
				this.iframeElement.style.opacity = '0.9';
				this.iframeElement.style.zIndex  = '999';

			}

			public collapse() {

				this.iframeElement.style.width   = '1px';
				this.iframeElement.style.height  = '1px';
				this.iframeElement.style.opacity = '1';

			}

			public initEvents() {

				if (this.eventsWereInit) {
					return;
				}

				window.addEventListener("message", (event: MessageEvent) => {

					let url = new URL(event.origin);
					if (url.hostname !== this.iframeLocationHostname) {
						return;
					}

					this.onMessage(event.data);

				}, false);

				this.eventsWereInit = true;

			}

			public emit(messageName: string, messageData?: Object) {

				let messageDataObject = {};
				if (messageData) {
					messageDataObject = messageData;
				}

				this.opener.postMessage({
					name: messageName,
					data: messageDataObject
				}, this.iframeLocationUrl);

			}

			public onMessage(eventData: any) {

				return;

			}

		}

	}

}
