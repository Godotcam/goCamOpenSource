namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Reveal extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public show() {

					this.element.removeClass('isHidden');
					this.states.visible = true;

					this.updateChildUiElementStates();

				}

				public hide() {

					this.element.removeClass('isHidden').addClass('isHidden');
					this.states.visible = false;

					this.updateChildUiElementStates();

				}

			}

		}

	}

}
