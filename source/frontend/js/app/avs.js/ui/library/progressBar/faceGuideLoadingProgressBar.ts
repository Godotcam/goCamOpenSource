namespace Avs {

	export namespace Ui {

		export namespace Library {

			export class FaceGuideLoadingProgressBar extends Avs.Ui.Handler.ProgressBar {

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
						selector = '#faceGuideLoadingProgressBar';
					}

					this.element = $(selector);

				}

				public initStates() {

					let entity = Avs.Entity.Ui.getInstance();

					entity.states.FaceGuideLoadingProgressBar = {
						visible: this.element.is(':visible'),
						value  : this.element.html()
					};

					this.states = entity.states.FaceGuideLoadingProgressBar;

				}

			}

		}

	}

}
