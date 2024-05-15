namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class SelectInput extends Common {

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

				public addOptGroup(name: string) {

					this.element.append($('<optgroup label="' + name + '"></optgroup>'));

				}

				public addOption(name: string, value: string, selected: boolean, optGroup?: string) {

					let elementToAppendTo = this.element;
					if (optGroup) {
						elementToAppendTo = this.element.find('optgroup[label="' + optGroup + '"]');
					}

					elementToAppendTo.append($('<option>', {
						value   : value,
						text    : name,
						selected: selected
					}));

					if (selected) {
						this.states.value = value;
					}

				}

				public clearAllOptions() {

					this.element.html('');

				}

				public removeOption(value: string) {

					this.element.find('option[value="' + value + '"]').remove();

				}

				public hasOption(value: string) {

					let valueFound = false;

					this.element.find('option').each((index, elem) => {
						if ($(elem).val() == value) {
							valueFound = true;
						}
					});

					return valueFound;

				}

				public selectOption(value: string) {

					if (!this.hasOption(value)) {
						return;
					}

					this.states.value = value;
					this.element.val(value);

				}

				public getSelectedOption() {

					if (this.states.value === null) {
						this.states.value = this.element.val();
					}

					return this.states.value;

				}

				public onChange(callback: Function) {

					this.element.on('change', (e) => {

						// prevent clicking on disabled buttons
						if (!this.states.enabled) {
							return;
						}

						this.states.value = this.element.val();

						callback(this.states.value);

					});

				}

			}

		}

	}

}
