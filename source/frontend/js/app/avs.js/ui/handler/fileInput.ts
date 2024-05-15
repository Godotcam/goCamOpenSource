namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class FileInput extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public initListeners() {

					this.element.on('change', (e) => {
						this.states.value = this.element.val();
					});

				}

				public getValue() {

					return this.states.value;

				}

				public onChange(callback: Function) {

					this.element.on('change', (e: JQueryEventObject) => {

						// prevent clicking on disabled buttons
						if (!this.states.enabled) {
							return;
						}

						this.states.value = this.element.val();

						callback(this.states.value, e);

					});

				}

				public clearValue() {

					this.element.val('');
					this.states.value = '';

				}

				public triggerFileBrowse() {

					this.element.trigger('click');

				}

			}

		}

	}

}
