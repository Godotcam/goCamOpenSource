namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Button extends Common {

				public static readonly SPINNER_ICON_CLASS = 'fa fa-spinner fa-spin';

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;
				}

				private loadingIconIsAttached(): boolean {

					let loadingIcon = this.element.find('.loading');
					return loadingIcon.length > 0;

				}

				private attachLoadingIcon() {

					this.element.find('i:eq(0)').after('<i class="' + Button.SPINNER_ICON_CLASS + ' loading isHidden" aria-hidden="true"></i>');

				}

				public showLoading() {

					if (!this.loadingIconIsAttached()) {
						this.attachLoadingIcon();
					}

					this.element.find('i:eq(0)').removeClass('isHidden').addClass('isHidden');
					this.element.find('i.loading').removeClass('isHidden');
					this.states.loading = true;

				}

				public hideLoading() {

					this.element.find('i:eq(0)').removeClass('isHidden');
					this.element.find('i.loading').removeClass('isHidden').addClass('isHidden');
					this.states.loading = false;

				}

				public disableAndLoad() {

					this.disable();
					this.showLoading();

				}

				public enableAndStopLoad() {

					this.hideLoading();
					this.enable();

				}

				public onClick(callback: Function) {

					this.element.click((e) => {

						// prevent clicking on disabled buttons
						if (!this.states.enabled) {
							return;
						}

						callback(e);

					});

				}

				public offClick() {

					this.element.unbind();

				}

				public triggerClick() {

					if (this.states.enabled) {
						this.element.trigger('click');
					}

				}

				public highlight() {

					this.element.removeClass('isHighlighted').addClass('isHighlighted');

				}

			}

		}

	}

}
