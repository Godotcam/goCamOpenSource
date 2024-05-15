namespace AvsFactory {

	export namespace ResultPageFail {

		export class Binding {

			public static init(): void {

				instance.ui.ResultFailButton.onClick(() => {

					window.location.reload();

				});

			}

		}

	}

}
