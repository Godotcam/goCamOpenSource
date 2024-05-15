namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Scrollable extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				public library: any;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public initLibrary(element: any) {

					// Retain current element's font-size because the $.niceScroll jQuery plugin is overwriting element's styles
					const elementFontSize = element.css('fontSize');

					setTimeout(() => {

						this.library = element.niceScroll({
							cursorcolor  : 'rgba(100,100,100,0.7)',
							cursorborder : 'none',
							background   : 'none'
						});

						element.css('fontSize', elementFontSize);

					}, 100);

				}

				public scrollDown() {

					this.element[0].scrollTop = this.element[0].scrollHeight;

				}

				public scrollTop() {
					this.element[0].scrollTop = 0;
				}

			}

		}

	}

}
