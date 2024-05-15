namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Counter extends Common {

				public static readonly SECOND_COUNT_DIRECTION_ASCENDING  = 1;
				public static readonly SECOND_COUNT_DIRECTION_DESCENDING = 2;

				public static readonly COUNT_STEP = 1000;

				public element: JQuery;
				public states: any;
				public secondCountHandler: NodeJS.Timeout;
				public secondCountDirection: number;
				public secondCountFrom: number;
				public secondCountTo: number;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public increment() {

					this.states.value++;
					this.element.text(this.states.value);

				}

				public decrement() {

					this.states.value--;
					this.element.text(this.states.value);

				}

				public setValue(value: number) {

					this.states.value = value;
					this.element.text(value);

				}

				public setStringValue(value: string) {

					this.states.value = value;
					this.element.text(value);

				}

				public startSecondCount(direction: number, from: number, to: number, callback?: Function) {

					this.stopSecondCount();
					this.setValue(from);

					this.secondCountDirection = direction;
					this.secondCountFrom      = from;
					this.secondCountTo        = to;

					this.secondCountHandler = setInterval(() => {

						if (direction == Counter.SECOND_COUNT_DIRECTION_ASCENDING) {
							this.increment();
						}

						if (direction == Counter.SECOND_COUNT_DIRECTION_DESCENDING) {
							this.decrement();
						}

						if (this.states.value == this.secondCountTo) {
							this.stopSecondCount();

							if (callback) {
								callback();
							}

						}

					}, Counter.COUNT_STEP);

					this.states.isSecondCounting = true;

				}

				public stopSecondCount() {

					if (this.secondCountHandler) {
						clearInterval(this.secondCountHandler);
					}

					this.states.isSecondCounting = false;

				}

				public isSecondCounting() {

					return this.states.isSecondCounting;

				}

			}

		}

	}

}
