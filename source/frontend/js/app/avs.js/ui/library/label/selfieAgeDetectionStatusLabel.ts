namespace Avs {

	export namespace Ui {

		export namespace Library {

			export class SelfieAgeDetectionStatusLabel extends Avs.Ui.Handler.Label {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener, selector?: string) {

					super(event);
					this.event = event;

					this.getElement(selector);
					this.initStates();

				}

				public getElement(selector?: string) {

					if (!selector) {
						selector = '#selfieAgeDetectionStatusLabel';
					}

					this.element = $(selector);

				}

				public initStates() {

					let entity = Avs.Entity.Ui.getInstance();

					entity.states.SelfieAgeDetectionStatusLabel = {
						visible: this.element.is(':visible'),
						value  : this.element.html()
					};

					this.states = entity.states.SelfieAgeDetectionStatusLabel;

				}

			}

		}

	}

}