namespace AvsFactory {

	export namespace SelfieAgeDetectionPage {

		export class Method {

			public static init(): void {

				Method.initVideo();

			}

			public static initVideo() {

				Method.repositionScanId();

				instance.plugin.Library.Video.CameraSource.getVideoElement().addClass('mirrored');

				instance.ui.SelfieAgeDetectionLoadingLabelArea.setContent('Trying to access your camera');

				instance.plugin.Library.Video.CameraSource.init();
				instance.plugin.Library.Video.CameraSource.showVideo();

			}

			public static getAgeAreaString(label: string, age: number) {

				let detectedAgeString = label + ': ';

				if (age >= Config.MIN_ALLOWED_AVERAGE_AGE) {
					detectedAgeString += 'Adult';
				}
				else {
					detectedAgeString += 'Id card required';
				}

				if ((<any>Application).showDetectedAgeNumber) {
					detectedAgeString += ' (' + age + ')';
				}

				return detectedAgeString;

			}

			public static detectFace() {

				instance.entity.SelfieAgeDetection.totalScanNumber++;

				instance.plugin.Library.Ml.FaceApi.detectFace((faceResult: any) => {

					instance.debug.logToContainer('<p>Detect face.</p>');

					instance.plugin.Library.Ml.FaceApi.detectFaceAge((ageResult: any) => {

						instance.debug.logToContainer('<p>Detect face age.</p>');

						if (ageResult !== null && faceResult !== null) {

							instance.ui.SelfieAgeDetectionStatusLabel.hide();
							instance.ui.SelfieAgeDetectionStatusLabel.stopBlinking();

							instance.entity.SelfieAgeDetection.validScanNumber++;

							instance.entity.SelfieAgeDetection.ageResultList.push(ageResult.age);
							instance.entity.SelfieAgeDetection.averageAge = ageResult.averageAge;

							instance.ui.SelfieAgeDetectionCurrentAgeArea.show();
							instance.ui.SelfieAgeDetectionCurrentAgeArea.setContent(
								Method.getAgeAreaString(
									'Current detected age',
									ageResult.age.toFixed()
								)
							);

							instance.debug.logToContainer('<p>Current: ' + ageResult.age.toFixed() + ' Average: ' + ageResult.averageAge + '</p>');

							instance.plugin.Library.Ml.FaceApi.extractFaceImage(faceResult.detection, (canvasFace: any) => {

								instance.entity.SelfieAgeDetection.validCanvasFaceList.push(canvasFace[0]);
								instance.entity.SelfieAgeDetection.validFaceList.push(faceResult);

								instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));

								Method.checkStep();

							});

						}
						else {

							instance.ui.SelfieAgeDetectionCurrentAgeArea.hide();
							instance.ui.SelfieAgeDetectionStatusLabel.show();
							instance.ui.SelfieAgeDetectionStatusLabel.startBlinking();
							instance.debug.logToContainer('<p>No face found.</p>');

							Method.checkStep();

						}

					});
				});

			}

			public static checkStep() {

				if (instance.entity.SelfieAgeDetection.validScanNumber == Config.MAX_VALID_FACE_SCAN_NUMBER) {

					// detecting outliers
					let outlierInstance = new Avs.Helper.Outlier(instance.entity.SelfieAgeDetection.ageResultList);
					let outlierList     = outlierInstance.findOutliers();
					if (outlierList.length > 0) {

						instance.debug.logToContainer('<p>Age outliers found, recalculating average.</p>');

						let noOutlierList = [];

						for (let i = 0, j = instance.entity.SelfieAgeDetection.ageResultList.length; i < j; i++) {
							if (!outlierInstance.testOutlier(instance.entity.SelfieAgeDetection.ageResultList[i])) {
								noOutlierList.push(instance.entity.SelfieAgeDetection.ageResultList[i]);
							}
						}

						instance.entity.SelfieAgeDetection.ageResultList = noOutlierList;
						instance.entity.SelfieAgeDetection.averageAge    = parseInt(Avs.Helper.Common.calculateAverage(noOutlierList).toFixed());

					}

					instance.debug.logToContainer('<p>Final average age: ' + instance.entity.SelfieAgeDetection.averageAge + '</p>');

					if (instance.entity.SelfieAgeDetection.averageAge == 0) {
						Method.goToFailStep(25055, 'Could not detect any faces from your device video');
						return;
					}

					// detection face similarity
					instance.debug.logToContainer('<p>Compare image faces for similarity.</p>');

					for (let i = 0, j = instance.entity.SelfieAgeDetection.validCanvasFaceList.length; i < j; i++) {
						for (let ii = 0, jj = instance.entity.SelfieAgeDetection.validCanvasFaceList.length; ii < jj; ii++) {

							if (i >= ii) {
								continue;
							}

							instance.debug.logToContainer('<p>Image pair (' + i + ' - ' + ii + '):</p>');
							instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(instance.entity.SelfieAgeDetection.validCanvasFaceList[i]));
							instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(instance.entity.SelfieAgeDetection.validCanvasFaceList[ii]));

							let distance = instance.plugin.Library.Ml.FaceApi.compareFaceDescriptors(
								instance.entity.SelfieAgeDetection.validFaceList[i].descriptor,
								instance.entity.SelfieAgeDetection.validFaceList[ii].descriptor
							);

							instance.debug.logToContainer('<p>Face comparison distance: <span class="' + (distance <= Config.MAX_FACE_DISTANCE_TO_MATCH ? 'green' : 'red') + '">' + distance + '</span></p>');

							let faceItsNotMatching = distance > Config.MAX_FACE_DISTANCE_TO_MATCH;
							if (faceItsNotMatching) {
								instance.entity.SelfieAgeDetection.totalInvalidFaceMatch++;
							}

						}
					}

					if (instance.entity.SelfieAgeDetection.totalInvalidFaceMatch >= Config.MIN_VALID_FACE_MATCH) {

						instance.debug.logToContainer('<p>Failed due to face comparison threshold: ' + instance.entity.SelfieAgeDetection.totalInvalidFaceMatch + '</p>');

						Method.goToFailStep(25056, 'Face similarity check fail');
						return;
					}

					if (
						instance.entity.SelfieAgeDetection.averageAge >= Config.MIN_ALLOWED_AVERAGE_AGE &&
						instance.entity.VerificationStepGlobal.verificationType == Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL
					) {

						if ((<any>Application).isLiveness) {
							Method.checkExpressionStep();
						}
						else {
							Method.goToSuccessStep();
						}

						return;
					}

					Method.goToNextStep();
					return;

				}

				if (instance.entity.SelfieAgeDetection.totalScanNumber == Config.MAX_TOTAL_FACE_SCAN_NUMBER) {
					Method.goToFailStep(25057, 'Could not detect enough faces from your device video');
					return;
				}

				setTimeout(() => {
					Method.detectFace();
				}, Config.FACE_SCAN_INTERVAL_MS);

			}

			public static checkExpressionStep() {

				if (instance.entity.SelfieAgeDetection.totalExpressionScanNumber == Config.MAX_TOTAL_FACE_EXPRESSION_SCAN_NUMBER) {
					Method.goToFailStep(25061, 'Could not detect enough faces from your device video');
					return;
				}

				setTimeout(() => {
					Method.detectFaceExpression();
				}, Config.FACE_SCAN_INTERVAL_MS);

			}

			public static detectFaceExpression() {

				instance.entity.SelfieAgeDetection.totalExpressionScanNumber++;

				instance.plugin.Library.Ml.FaceApi.detectFace((faceResult: any) => {

					instance.debug.logToContainer('<p>Detect face.</p>');

					instance.plugin.Library.Ml.FaceApi.detectFaceExpression((faceExpressionResult: any) => {

						instance.debug.logToContainer('<p>Detect face expression.</p>');

						if (faceResult !== null && faceExpressionResult !== null && faceExpressionResult.expressionStrongest !== null) {

							instance.ui.SelfieAgeDetectionStatusLabel.stopBlinking();

							instance.debug.logToContainer('<p>Detection face expression: ' + faceExpressionResult.expressionStrongest + '</p>');

							instance.plugin.Library.Ml.FaceApi.extractFaceImage(faceExpressionResult.detection, (canvasFace: any) => {

								instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));

								if (instance.entity.SelfieAgeDetection.validateSmileExpression === null) {

									instance.entity.SelfieAgeDetection.validCanvasFaceList.push(canvasFace[0]);
									instance.entity.SelfieAgeDetection.validFaceList.push(faceResult);

									instance.entity.SelfieAgeDetection.validateSmileExpression = faceExpressionResult.expressionStrongest !== Avs.Plugin.Library.Ml.FaceApi.EXPRESSION_HAPPY;

									instance.ui.FaceGuideAgeArea.hide();
									if (instance.entity.SelfieAgeDetection.validateSmileExpression) {
										instance.ui.FaceGuideSmileStartHintArea.show();
										instance.ui.FaceGuideSmileStartHintLabel.startBlinking();
									}
									else {
										instance.ui.FaceGuideSmileStopHintArea.show();
										instance.ui.FaceGuideSmileStopHintLabel.startBlinking();
									}

									instance.debug.logToContainer('<p>Start looking for the opposite face expression.</p>');

								}
								else {

									if (
										(instance.entity.SelfieAgeDetection.validateSmileExpression && faceExpressionResult.expressionStrongest === Avs.Plugin.Library.Ml.FaceApi.EXPRESSION_HAPPY) ||
										(!instance.entity.SelfieAgeDetection.validateSmileExpression && faceExpressionResult.expressionStrongest !== Avs.Plugin.Library.Ml.FaceApi.EXPRESSION_HAPPY)
									) {
										instance.debug.logToContainer('<p>Face expression found.</p>');

										let previousImageIndex = instance.entity.SelfieAgeDetection.validFaceList.length - 1;

										instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(instance.entity.SelfieAgeDetection.validCanvasFaceList[previousImageIndex]));
										instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));

										let distance = instance.plugin.Library.Ml.FaceApi.compareFaceDescriptors(
											instance.entity.SelfieAgeDetection.validFaceList[previousImageIndex].descriptor,
											faceResult.descriptor
										);

										instance.debug.logToContainer('<p>Face comparison distance: <span class="' + (distance <= Config.MAX_FACE_DISTANCE_TO_MATCH ? 'green' : 'red') + '">' + distance + '</span></p>');

										let faceItsNotMatching = distance > Config.MAX_FACE_DISTANCE_TO_MATCH;
										if (faceItsNotMatching) {
											Method.goToFailStep(25062, 'Face similarity check fail');
											return;
										}

										Method.goToSuccessStep();
										return;

									}

								}

								Method.checkExpressionStep();

							});

						}
						else {

							instance.ui.SelfieAgeDetectionStatusLabel.startBlinking();
							instance.debug.logToContainer('<p>No face found.</p>');

							Method.checkExpressionStep();

						}

					});

				});

			}

			public static goToNextStep() {
				StartPage.Method.showPageStep(StartPage.Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER);
				ScanIdAgeVerificationIntro.init();

				instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
			}

			public static goToSuccessStep() {
				StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
				ResultPageSuccess.init();

				instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
			}

			public static goToFailStep(failCode: number, failReason: string) {
				StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_FAIL_LAYER);

				ResultPageFail.init();
				ResultPageFail.Method.saveError(failCode);
				ResultPageFail.Method.renderFailReason(failCode + ': ' + failReason);

				instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
			}

			public static repositionScanId() {

				let elementPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionFromConfig({
					width    : Config.BOUNDARY_WIDTH,
					height   : Config.BOUNDARY_HEIGHT,
					maxWidth : Config.BOUNDARY_MAX_WIDTH,
					maxHeight: Config.BOUNDARY_MAX_HEIGHT,
					boundary : {
						top   : Config.BOUNDARY_TOP,
						bottom: Config.BOUNDARY_BOTTOM,
						left  : Config.BOUNDARY_LEFT,
						right : Config.BOUNDARY_RIGHT
					}
				});

				Avs.Helper.ElementPositionCalculator.applyPositioning(Config.FACE_GUIDE_ELEMENT, elementPosition);

			}

		}

	}

}
