namespace Avs {

	export namespace Helper {

		export class PostMessage {

			static readonly ON_MESSAGE = 'onPostMessage';

			public event: Avs.Event.Listener;
			public eventsWereInit: boolean;

			constructor(event: Avs.Event.Listener) {

				this.eventsWereInit = false;
				this.event          = event;

			}

			public emit(messageName: string, messageData?: any) {

				if (window.top === null) {
					return;
				}

				let messageDataObject = {};
				if (messageData) {
					messageDataObject = messageData;
				}

				window.top.postMessage({
					name: messageName,
					data: messageDataObject
				}, '*');

			}

			public onMessage(message: any) {

				return;

			}

			public initListener() {

				if (this.eventsWereInit) {
					return;
				}

				window.addEventListener('message', (event: MessageEvent) => {

					this.event.emit(PostMessage.ON_MESSAGE, event.data);

				});

				this.eventsWereInit = true;

			}

		}

	}

}
