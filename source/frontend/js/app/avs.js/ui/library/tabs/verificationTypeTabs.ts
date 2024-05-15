namespace Avs {

	export namespace Ui {

		export namespace Library {

			export class VerificationTypeTabs extends Avs.Ui.Handler.Tabs {

				public static readonly ON_TAB_SELECTED = 'Ui.Library.VerificationTypeTabs.onTabSelected';

				public static readonly TAB_SELFIE_NUMBER      = 0;
				public static readonly TAB_SCAN_ID_NUMBER     = 1;


				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener, selector?: string) {

					super(event);
					this.event = event;

					this.getElement(selector);
					this.initStates();
					this.initListeners();

				}

				public verificationTypeToTabNumber(verificationType: number) {

					switch (verificationType) {

						case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL:

							return VerificationTypeTabs.TAB_SELFIE_NUMBER;

						case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID:

							return VerificationTypeTabs.TAB_SCAN_ID_NUMBER;

						default:

							return null;


					}

				}

				public tabNumberToVerificationType(verificationType: number) {

					switch (verificationType) {

						case VerificationTypeTabs.TAB_SELFIE_NUMBER:

							return Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL;

						case VerificationTypeTabs.TAB_SCAN_ID_NUMBER:

							return Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID;

						default:

							return null;


					}

				}

				public tabWasSelected(tabNumber: number, tabData: Avs.Ui.Handler.ITabsEventData) {

					this.event.emit(VerificationTypeTabs.ON_TAB_SELECTED, {
						tabNumber: tabNumber,
						tabData  : tabData
					});
				}

				public getElement(selector?: string) {

					if (!selector) {
						selector = '#verificationTypeTabs';
					}

					this.element = $(selector);

				}

				public initStates() {

					let entity = Avs.Entity.Ui.getInstance();

					entity.states.VerificationTypeTabs = {
						visible: this.element.is(':visible'),
						value  : this.element.html()
					};

					this.states = entity.states.VerificationTypeTabs;

				}

			}

		}

	}

}
