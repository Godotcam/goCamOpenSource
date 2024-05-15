namespace AvsFactory {

	export namespace ScanIdAgeVerificationPage {

		export class Event {

			public static init(): void {

				instance.event.on(
					Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_WEBCAM_INIT_ERROR,
					(event: Avs.Event.Listener) => {

						// allow error

					}
				);

				instance.event.on(
					Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_VIDEO_PLAY,
					(event: Avs.Event.Listener) => {

						Method.repositionScanId();

						instance.ui.ScanIdAgeVerificationLoadingLabelArea.setContent('');
						instance.ui.ScanIdAgeVerificationLoadingLabelArea.hide();

						//Method.loadDetectionLibrary();

					}
				);

			}

		}

	}

}
