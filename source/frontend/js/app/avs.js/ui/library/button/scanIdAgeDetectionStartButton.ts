namespace Avs {

	export namespace Ui {

		export namespace Library {

			export class ScanIdAgeDetectionStartButton extends Avs.Ui.Handler.Button {

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
						selector = '#scanIdAgeDetectionStartButton';
					}

					this.element = $(selector);

				}

				public initStates() {

					let entity = Avs.Entity.Ui.getInstance();

					entity.states.ScanIdAgeDetectionStartButton = {
						visible: this.element.is(':visible'),
						enabled: !this.element.attr('disabled')
					};

					this.states = entity.states.ScanIdAgeDetectionStartButton;

				}

			}

		}

	}

}
