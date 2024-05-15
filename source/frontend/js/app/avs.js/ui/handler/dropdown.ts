namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Dropdown extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public initListeners() {

					this.element.find('.dropdownHandle').on('click', (e: Event) => {

						if (this.states.expanded) {
							this.compact();
						}
						else {
							this.expand();
						}

						this.dropdownWasExpanded();
						e.stopPropagation();

					});

					$(document).on('click', (e: Event) => {
						this.compact();
					});

				}

				public toggleVisibility() {

					if (this.states.visible) {
						return this.hide();
					}

					return this.show();

				}

				public expand() {
					this.element.removeClass('isExpanded').addClass('isExpanded');
					this.states.expanded = true;
				}

				public compact() {
					this.element.removeClass('isExpanded');
					this.states.expanded = false;
				}

				// dummy function to be overwritten by child class
				public dropdownWasExpanded() {
				}

			}

		}

	}

}
