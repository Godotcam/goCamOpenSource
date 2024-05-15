namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Timer extends Common {

				public static readonly COUNT_STEP = 1000;

				public element: JQuery;
				public states: any;
				public timer: NodeJS.Timeout;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);
					this.event = event;

				}

				public increment() {
					this.states.value++;
				}

				public start() {

					this.stop();

					this.timer = setInterval(() => {

						this.increment();
						this.updateElementTimer();

					}, Timer.COUNT_STEP);

					this.states.isTicking = true;

				}

				public stop() {

					if (this.timer) {
						clearInterval(this.timer);
					}

					this.states.isTicking = false;

				}

				public reset() {
					this.states.value = 0;
				}

				public isTicking() {
					return this.states.isTicking;
				}

				protected updateElementTimer() {

					let value = new Date(this.states.value * Timer.COUNT_STEP).toISOString().substr(14, 5); // mm:ss;

					if (this.states.value > 3600) {
						value = new Date(this.states.value * Timer.COUNT_STEP).toISOString().substr(11, 8); // HH:mm:ss
					}

					this.element.text(value);

				}

			}

		}

	}

}
