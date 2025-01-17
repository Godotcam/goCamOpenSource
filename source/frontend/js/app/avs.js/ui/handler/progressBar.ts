namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class ProgressBar extends Common {

				static readonly MAX_VALUE = 100;

				static readonly PROGRESS_BAR_ELEMENT_CLASS: string = 'loadingProgressBar';

				public element: JQuery;
				public states: any;
				public stepNumber: number;
				public stepIncrement: number;
				public progressBarElement: JQuery;

				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

					this.stepNumber    = 1;
					this.stepIncrement = 100;

					this.progressBarElement = $('.' + ProgressBar.PROGRESS_BAR_ELEMENT_CLASS);

				}

				public setStepNumber(stepNumber: number) {

					this.stepNumber    = stepNumber;
					this.stepIncrement = PercentCounter.MAX_VALUE / this.stepNumber;

				}

				public increment() {

					this.states.value = this.states.value + this.stepIncrement;
					this.progressBarElement.css({width: this.states.value + '%'});

				}

				public decrement() {

					this.states.value = this.states.value - this.stepIncrement;
					this.progressBarElement.css({width: this.states.value + '%'});

				}

				public setValue(value: number) {

					this.states.value = value;
					this.progressBarElement.css({width: this.states.value + '%'});

				}

			}

		}

	}

}
