namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class CheckboxInput extends Common {

				public static readonly LABEL_SELECTOR = '.labelValue:eq(0)';

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public initListeners() {

					this.element.on('change', (e) => {
						this.states.value = this.element.is(':checked');
					});

				}

				public check() {

					this.states.value = true;
					this.element.prop('checked', true);

				}

				public uncheck() {

					this.states.value = false;
					this.element.prop('checked', false);

				}

				public isChecked() {
					return this.states.value;
				}

				public setLabelValue(value: string) {

					this.element.parent().find(CheckboxInput.LABEL_SELECTOR).text(value);
					this.states.labelValue = value;

				}

				public onChange(callback: Function) {

					this.element.on('change', (e) => {

						// prevent clicking on disabled buttons
						if (!this.states.enabled) {
							return;
						}

						this.states.value = this.element.prop('checked');

						callback(e);

					});

				}

			}

		}

	}

}
