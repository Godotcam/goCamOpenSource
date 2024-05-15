namespace AvsFactory {

	export namespace SelfieAgeDetectionPage {

		export class Binding {

			public static init(): void {

				$(window).on('resize', () => {
					Method.repositionScanId();
				});

			}

		}

	}

}
