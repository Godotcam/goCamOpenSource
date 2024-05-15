namespace AvsFactory {

	export namespace SelfieAgeDetectionPage {

		export class Event {

			public static init(): void {

				instance.event.on(
					Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_WEBCAM_INIT_ERROR,
					(event: Avs.Event.Listener) => {

						StartPage.Method.renderError(25047, 'Webcam initialization error!');
						return;

					}
				);

				instance.event.on(
					Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_VIDEO_PLAY,
					(event: Avs.Event.Listener) => {

						instance.ui.SelfieAgeDetectionLoadingLabelArea.setContent('Initializing detection libraries ... ');
						instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.setValue(0);

						instance.debug.logToContainer('<p>Starting face detection.</p>');

						instance.plugin.Library.Ml.FaceApi.loadDetector((result: boolean|null) => {

							if (result === null) {
								StartPage.Method.renderError(25035, 'Failed to initialize detection libraries');
								return;
							}

							instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
							instance.debug.logToContainer('<p>Loaded detector.</p>');

							instance.plugin.Library.Ml.FaceApi.loadAgeGenderModel((result: boolean|null) => {

								if (result === null) {
									StartPage.Method.renderError(25036, 'Failed to initialize detection libraries');
									return;
								}

								instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
								instance.debug.logToContainer('<p>Loaded age model.</p>');

								instance.plugin.Library.Ml.FaceApi.loadFaceRecognitionModel((result: boolean|null) => {

									if (result === null) {
										StartPage.Method.renderError(25037, 'Failed to initialize detection libraries');
										return;
									}

									instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
									instance.debug.logToContainer('<p>Loaded face recognition model.</p>');

									instance.plugin.Library.Ml.FaceApi.loadLandmarksModel((result: boolean|null) => {

										if (result === null) {
											StartPage.Method.renderError(25038, 'Failed to initialize detection libraries');
											return;
										}

										instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
										instance.debug.logToContainer('<p>Loaded face landmarks model.</p>');

										instance.plugin.Library.Ml.FaceApi.loadFaceExpressionModel((result: boolean|null) => {

											if (result === null) {
												StartPage.Method.renderError(25058, 'Failed to initialize detection libraries');
												return;
											}

											instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
											instance.debug.logToContainer('<p>Loaded face expression model.</p>');

											instance.ui.SelfieAgeDetectionLoadingLabelArea.setContent('Detection in progress');
											instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.hide();

											instance.ui.SelfieAgeDetectionStatusLabel.show();
											instance.ui.SelfieAgeDetectionStatusLabel.startBlinking();

											Method.detectFace();

										});

									});
								});
							});
						});

					}
				);


			}

		}

	}

}
