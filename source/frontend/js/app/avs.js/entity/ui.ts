namespace Avs {

	export namespace Entity {

		/**
		 * Handles UI entity
		 *
		 */
		export class Ui {

			public static instance: Ui;

			public states: IUiStates;

			public layout: string;

			constructor() {

				this.initialValues();

			}

			public static getInstance() {

				if (!this.instance) {
					this.instance = new Ui();
				}

				return this.instance;

			}

			public initialValues() {

				this.states = {};

			}

		}

		export interface IUiStates {
			[key: string]: any
		}


	}

}
