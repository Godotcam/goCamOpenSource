namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Textarea extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				static readonly ENTER_KEY_CODE = 13;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

			}

		}

	}

}
