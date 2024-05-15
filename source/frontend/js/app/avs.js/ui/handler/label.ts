namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Label extends Common {

				private static readonly BLINK_INTERVAL_MILLISECONDS = 500;
				private static readonly BLINK_OPACITY_RANGE         = 0.5;

				private static readonly COLOR_LAYOUT_RED   = 'layoutRedText';
				private static readonly COLOR_LAYOUT_GREEN = 'layoutGreenText';

				public static readonly SPINNER_ICON_CLASS = 'fa fa-cog fa-spin';

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				public blinkHandler: NodeJS.Timeout;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public setValue(value: string) {

					this.states.value = value;
					this.element.text(value);

				}

				public startBlinking() {

					if (this.states.isBlinking) {
						return;
					}

					this.states.isBlinking = true;
					this.states.blinkIsOn  = false;

					this.blinkHandler = setInterval(() => {

						this.states.blinkIsOn = !this.states.blinkIsOn;

						if (this.states.blinkIsOn) {
							this.element.css({opacity: Label.BLINK_OPACITY_RANGE});
							return;
						}

						this.element.css({opacity: 1});

					}, Label.BLINK_INTERVAL_MILLISECONDS);

				}

				public clearColorLayout() {

					this.element.removeClass(Label.COLOR_LAYOUT_RED);
					this.element.removeClass(Label.COLOR_LAYOUT_GREEN);

				}

				public setRedText() {

					this.clearColorLayout();
					this.element.addClass('layoutRedText');

				}

				public setGreenText() {

					this.clearColorLayout();
					this.element.addClass('layoutGreenText');

				}

				public stopBlinking() {

					if (this.states.isBlinking) {
						clearInterval(this.blinkHandler);
					}

					this.element.css({opacity: 1});

					this.states.isBlinking = false;
					this.states.blinkIsOn  = false;

				}

				private loadingIconIsAttached(): boolean {

					let loadingIcon = this.element.find('.loading');
					return loadingIcon.length > 0;

				}

				private attachLoadingIcon() {

					this.element.prepend('<i class="' + Label.SPINNER_ICON_CLASS + ' loading isHidden" aria-hidden="true"></i>');

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

			}

		}

	}

}
