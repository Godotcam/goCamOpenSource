namespace Avs {

	export namespace Ui {

		export namespace Library {

			export class TermsAndConditionsCheckbox extends Avs.Ui.Handler.CheckboxInput {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener, selector?: string) {

					super(event);
					this.event = event;

					this.getElement(selector);
					this.initStates();
					this.initListeners();

				}

				public getElement(selector?: string) {

					if (!selector) {
						selector = '#termsAndConditionsCheckbox';
					}

					this.element = $(selector);

				}

				public initStates() {

					let entity = Avs.Entity.Ui.getInstance();

					entity.states.TermsAndConditionsCheckbox = {
						visible   : this.element.is(':visible'),
						enabled   : !this.element.attr('disabled'),
						value     : this.element.is(':checked'),
						labelValue: this.element.parent().find(Avs.Ui.Handler.CheckboxInput.LABEL_SELECTOR)
					};

					this.states = entity.states.TermsAndConditionsCheckbox;

				}

			}

		}

	}

}
