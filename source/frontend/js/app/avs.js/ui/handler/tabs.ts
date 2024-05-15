namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export interface ITabsEventData {
				tabNumber: number,
				tabData: {
					type: string
				}
			}

			export class Tabs extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;
				}

				public initListeners() {

					this.element.on('click', '.avsTab', (e: Event) => {

						let event              = $(e.currentTarget);
						let currentTabSelected = event.index();
						let currentTabData     = <ITabsEventData>event.data();

						if (this.isDisabled(currentTabSelected)) {
							return;
						}

						this.selectTab(currentTabSelected);
						this.tabWasSelected(currentTabSelected, currentTabData);

					});

				}

				public toggleVisibility() {

					if (this.states.visible) {
						return this.hide();
					}

					return this.show();

				}

				public isDisabled(tabNumber: number) {
					return this.element.find('.avsTab:eq(' + tabNumber + ')').hasClass('isDisabled');
				}

				public disableTab(tabNumber: number) {
					this.element.find('.avsTab:eq(' + tabNumber + ')').addClass('isDisabled');
				}

				public enableTab(tabNumber: number) {
					this.element.find('.avsTab:eq(' + tabNumber + ')').removeClass('isDisabled');
				}

				public enableAllTabs() {
					this.element.find('.avsTab').removeClass('isDisabled');
				}

				public isHidden(tabNumber: number) {
					return this.element.find('.avsTab:eq(' + tabNumber + ')').hasClass('isHidden');
				}

				public hideTab(tabNumber: number) {
					this.element.find('.avsTab:eq(' + tabNumber + ')').addClass('isHidden');
				}

				public showTab(tabNumber: number) {
					this.element.find('.avsTab:eq(' + tabNumber + ')').removeClass('isHidden');
				}

				public showAllTabs() {
					this.element.find('.avsTab').removeClass('isHidden');
				}

				public isSelected(tabNumber: number) {
					return this.element.find('.avsTab:eq(' + tabNumber + ')').hasClass('isSelected');
				}

				public selectTab(tabNumber: number) {

					this.deselectAllTabs();
					this.unHighlightTab(tabNumber);
					this.element.find('.avsTab:eq(' + tabNumber + ')')
						.addClass('isSelected');

					this.element.parent().find('.avsTabContent').addClass('isHidden');
					this.element.parent().find('.avsTabContent:eq(' + tabNumber + ')').removeClass('isHidden');

				}

				public deselectAllTabs() {
					this.element.find('.avsTab').removeClass('isSelected');
				}

				public selectAllTabs() {
					this.element.find('.avsTab').addClass('isSelected');
				}

				public disableAllTabs() {
					this.element.find('.avsTab').addClass('isDisabled');
				}

				public highlightTab(tabNumber: number) {

					this.element.find('.avsTab:eq(' + tabNumber + ')')
					    .removeClass('isHighlighted')
					    .addClass('isHighlighted');

				}

				public unHighlightTab(tabNumber: number) {

					this.element.find('.avsTab:eq(' + tabNumber + ')')
					    .removeClass('isHighlighted');

				}

				// dummy function to be overwritten by child class
				public tabWasSelected(tabNumber: number, tabData: ITabsEventData) {
				}

			}

		}

	}

}
