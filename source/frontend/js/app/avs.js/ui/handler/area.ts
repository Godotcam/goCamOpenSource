namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Area extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public toggleVisibility() {

					if (this.states.visible) {
						return this.hide();
					}

					return this.show();

				}

				public clearContents() {

					this.element.html('');
					this.states.value = '';

				}

				public addContent(content: string) {

					this.element.append(content);
					this.states.value += content;

				}

			}

		}

	}

}
