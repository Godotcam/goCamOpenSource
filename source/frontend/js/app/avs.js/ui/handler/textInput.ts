namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class TextInput extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public toggleVisibility(displayAsBlock?: boolean) {

					if (this.states.visible) {
						return this.hide();
					}

					return this.show(displayAsBlock);

				}

				public clearValue() {

					this.element.val('');
					this.states.value = '';

				}

				public setValue(content: string) {

					this.element.val(content);
					this.states.value = content;

				}

				public getValue() {

					return this.states.value.trim();

				}

			}

		}

	}

}
