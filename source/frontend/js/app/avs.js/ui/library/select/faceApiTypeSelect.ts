namespace Avs {

	export namespace Ui {

		export namespace Library {

			export class FaceApiTypeSelect extends Avs.Ui.Handler.SelectInput {

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
						selector = '#faceApiTypeSelect';
					}

					this.element = $(selector);

				}

				public initStates() {

					let entity = Avs.Entity.Ui.getInstance();

					entity.states.FaceApiTypeSelect = {
						visible: this.element.is(':visible'),
						enabled: !this.element.attr('disabled'),
						value  : this.element.val(),
						name   : this.element.find('option:selected').text(),
					};

					this.states = entity.states.FaceApiTypeSelect;

				}

			}

		}

	}

}
