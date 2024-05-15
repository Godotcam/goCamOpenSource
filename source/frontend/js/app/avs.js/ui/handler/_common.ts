namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Common {

				public static readonly FONT_SIZE_INCREMENT_STEP = 1;
				public static readonly FONT_SIZE_DECREMENT_STEP = 1;

				private childUiElements: Array<any>;

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				public constructor(event: Avs.Event.Listener) {

					this.childUiElements = [];

					this.event = event;

				}

				public show(displayAsBlock?: boolean) {

					this.element.removeClass('isHidden');
					this.states.visible = true;

					this.updateChildUiElementStates();

				}

				public fadeIn() {

					this.element.fadeIn(500, () => {
						this.element.removeClass('isHidden');
						this.states.visible = true;
						this.updateChildUiElementStates();
					});

				}

				public hide() {

					this.element.addClass('isHidden');
					this.states.visible = false;

					this.updateChildUiElementStates();

				}

				public fadeOut() {

					this.element.fadeOut(500, () => {
						this.element.addClass('isHidden');
						this.states.visible = false;

						this.updateChildUiElementStates();
					});

				}

				public toggleVisibility() {

					if (this.states.visible) {
						this.element.addClass('isHidden');
						return;
					}

					this.element.removeClass('isHidden');

				}

				public enable() {

					this.element.attr('disabled', (<any>false));
					this.states.enabled = true;
					this.enableAppearance();

				}

				public disable() {

					this.element.attr('disabled', (<any>true));
					this.states.enabled = false;
					this.disableAppearance();

				}

				public enableAppearance() {
					if (this.element.hasClass('isDisabled')) {
						this.element.removeClass('isDisabled');
					}
				}

				public disableAppearance() {
					if (!this.element.hasClass('isDisabled')) {
						this.element.addClass('isDisabled');
					}
				}

				public incrementFontSize(units?: number) {

					let unitsToIncrement = units || Common.FONT_SIZE_INCREMENT_STEP;

					setTimeout(() => {
						this.element.css({
							'font-size': '+=' + unitsToIncrement
						});
					}, 150); // wait for /ui/handler/scrollable @ initLibrary()

				}

				public updateLineHeight() {

					setTimeout(() => {
						this.element.css('lineHeight', parseInt(this.element.css('fontSize')) + 'px');
					}, 150); // wait for /ui/handler/scrollable @ initLibrary()

				}

				public decrementFontSize(units?: number) {

					let unitsToDecrement = units || Common.FONT_SIZE_DECREMENT_STEP;

					this.element.css({
						'font-size': '-=' + unitsToDecrement
					});

				}


				public addChildUiElement(uiElement: any) {

					this.childUiElements.push(uiElement);

				}

				public updateChildUiElementStates() {

					if (this.childUiElements.length) {
						for (let i = 0, j = this.childUiElements.length; i < j; i++) {
							if (typeof this.childUiElements[i].initStates == 'function') {
								this.childUiElements[i].initStates();
							}
						}
					}

				}

				public getIdSelector() {

					return '#' + this.element.attr('id');

				}

				public onClick(callback: Function) {

					this.element.click((e) => {

						callback(e);

					});

				}

			}
		}
	}
}
