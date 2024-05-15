namespace Avs {

	export namespace Ui {

		export namespace Library {

			export class SelfieAgeDetectionLoadingLabelPercentCounter extends Avs.Ui.Handler.PercentCounter {

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
						selector = '#selfieAgeDetectionLoadingLabelPercentCounter';
					}

					this.element = $(selector);

				}

				public initStates() {

					let entity = Avs.Entity.Ui.getInstance();

					entity.states.SelfieAgeDetectionLoadingLabelPercentCounter = {
						visible: this.element.is(':visible'),
						value  : this.element.html()
					};

					this.states = entity.states.SelfieAgeDetectionLoadingLabelPercentCounter;

				}

			}

		}

	}

}
