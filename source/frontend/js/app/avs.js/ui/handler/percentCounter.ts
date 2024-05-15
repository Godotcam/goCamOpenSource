namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class PercentCounter extends Common {

				static readonly MAX_VALUE = 100;

				public element: JQuery;
				public states: any;
				public stepNumber: number;
				public stepIncrement: number;

				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

					this.stepNumber    = 1;
					this.stepIncrement = 100;

				}

				public setStepNumber(stepNumber: number) {

					this.stepNumber    = stepNumber;
					this.stepIncrement = PercentCounter.MAX_VALUE / this.stepNumber;

				}

				public increment() {

					this.states.value = this.states.value + this.stepIncrement;
					this.element.text(parseInt(this.states.value) + '%');

				}

				public decrement() {

					this.states.value = this.states.value - this.stepIncrement;
					this.element.text(parseInt(this.states.value) + '%');

				}

				public setValue(value: number) {

					this.states.value = value;
					this.element.text(value + '%');

				}

				public setStringValue(value: string) {

					this.states.value = value;
					this.element.text(value + '%');

				}

			}

		}

	}

}
