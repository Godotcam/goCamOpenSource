namespace AvsFactory {

	export namespace ScanIdAgeVerificationPage {

		export class Method {

			public static init(): void {

				if (instance.entity.ScanIdAgeVerification.facingMode !== Config.FACING_MODE_REQUIRED) {
					instance.plugin.Library.Video.CameraSource.getVideoElement().addClass('mirrored');
				}

				if (!instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
					Method.initVideo();
				}

			}

			public static getProcessingCanvas() {

				return <HTMLCanvasElement>$(Config.DOCUMENT_PROCESSING_CANVAS).get(0);

			}

			public static getIdGuideContainer() {

				return <HTMLElement>$(Config.ID_CARD_GUIDE_CONTAINER).get(0);

			}

			public static initVideo() {

				instance.ui.ScanIdAgeVerificationLoadingLabelArea.setContent('Trying to access your camera');

				instance.plugin.Library.Video.CameraSource.init();
				instance.plugin.Library.Video.CameraSource.showVideo();

				Method.repositionScanId();

			}

			public static loadDetectionLibrary() {

				instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.setValue(0);

				instance.debug.logToContainer('<p>Starting scan id data extraction.</p>');

				instance.plugin.Library.Ml.Tesseract.loadWorker((result: boolean | null) => {

					if (result === null) {
						StartPage.Method.renderError(25040, 'Failed to initialize detection libraries');
						return;
					}

					instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();

					instance.plugin.Library.Ml.Tesseract.loadLanguage(Config.TESSERACT_LANGUAGE, (result: boolean | null) => {

						if (result === null) {
							StartPage.Method.renderError(25041, 'Failed to initialize detection libraries');
							return;
						}

						instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();

						instance.plugin.Library.Ml.Tesseract.initLanguage(Config.TESSERACT_LANGUAGE, (result: boolean | null) => {

							if (result === null) {
								StartPage.Method.renderError(25042, 'Failed to initialize detection libraries');
								return;
							}

							instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();

							instance.plugin.Library.Ml.Tesseract.configureWorker((result: boolean | null) => {

								if (result === null) {
									StartPage.Method.renderError(25043, 'Failed to initialize detection libraries');
									return;
								}

								instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();

								instance.plugin.Library.Ml.FaceApi.loadDetector((result: boolean | null) => {

									if (result === null) {
										StartPage.Method.renderError(25044, 'Failed to initialize detection libraries');
										return;
									}

									instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();

									instance.plugin.Library.Ml.FaceApi.loadFaceRecognitionModel((result: boolean | null) => {

										if (result === null) {
											StartPage.Method.renderError(25045, 'Failed to initialize detection libraries');
											return;
										}

										instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();

										instance.plugin.Library.Ml.FaceApi.loadLandmarksModel((result: boolean | null) => {

											if (result === null) {
												StartPage.Method.renderError(25063, 'Failed to initialize detection libraries');
												return;
											}

											instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
											instance.ui.ScanIdAgeVerificationLoadingLibraryButton.hideLoading();

											Method.faceExtractionStart();

										});

									});
								});
							});
						});
					});
				});

			}

			public static faceExtractionStart() {

				Method.extractFace();

			}

			public static extractFace() {

				let processingCanvas = Method.getProcessingCanvas();

				instance.plugin.Library.Ml.FaceApi.detectFaceFromCustomElement(processingCanvas, (faceResult: any) => {

					instance.debug.logToContainer('<p>Extract image face.</p>');

					instance.entity.ScanIdAgeVerification.totalFaceNumber++;

					if (faceResult !== null) {

						instance.entity.ScanIdAgeVerification.validFaceNumber++;

						instance.plugin.Library.Ml.FaceApi.extractFaceImageFromCustomElement(faceResult.detection, processingCanvas, (canvasFace: any) => {

							instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));

							instance.entity.ScanIdAgeVerification.validFaceList.push(faceResult);
							instance.entity.ScanIdAgeVerification.validCanvasFaceList.push(canvasFace[0]);

							Method.checkExtractFaceStep();

						});

					}
					else {
						instance.debug.logToContainer('<p>No face found.</p>');

						let adjustment = Method.getBrightnessAndContrastRandomAdjustment();

						Avs.Helper.Canvas.contrastCanvas(Method.getProcessingCanvas(), adjustment.contrast);
						Avs.Helper.Canvas.brightnessCanvas(Method.getProcessingCanvas(), adjustment.brightness);

						Method.checkExtractFaceStep();

					}

				});

			}

			public static getBrightnessAndContrastRandomAdjustment() {

				let negativeBrightnessOperation = Math.random() >= 0.5;
				let negativeContrastOperation   = Math.random() >= 0.5;
				let brightnessAdjustment        = (Math.floor(Math.random() * Config.BRIGHTNESS_ADJUSTMENT_MAX_VALUE) + 1);
				let contrastAdjustment          = (Math.floor(Math.random() * Config.CONTRAST_ADJUSTMENT_MAX_VALUE) + 1);

				let brightness = instance.entity.ScanIdAgeVerification.getIdTypeConfig().brightness;
				if (negativeBrightnessOperation) {
					brightness -= brightnessAdjustment;
				}
				else {
					brightness += brightnessAdjustment;
				}

				let contrast = instance.entity.ScanIdAgeVerification.getIdTypeConfig().contrast;
				if (negativeContrastOperation) {
					contrast -= contrastAdjustment;
				}
				else {
					contrast += contrastAdjustment;
				}

				return {
					brightness: brightness,
					contrast  : contrast
				}

			}

			public static isScanIdVerificationStandalone() {

				return instance.entity.VerificationStepGlobal.verificationType === Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID;

			}

			public static checkExtractFaceStep() {

				if (instance.entity.ScanIdAgeVerification.validFaceNumber == Config.MAX_VALID_FACE_SCAN_NUMBER) {

					if (Method.isScanIdVerificationStandalone()) {
						Method.ocrImage();
					}
					else {
						Method.compareFaceDescriptors();
					}

					return;
				}

				if (instance.entity.ScanIdAgeVerification.totalFaceNumber == Config.MAX_TOTAL_FACE_SCAN_NUMBER) {
					Method.goToFailStep(25051, 'Failed to extract a face from your identity card');
					return;
				}

				setTimeout(() => {
					Method.extractFace();
				}, Config.FACE_SCAN_INTERVAL_MS);

			}

			public static compareFaceDescriptors() {

				instance.debug.logToContainer('<p>Compare image faces with selfie images.</p>');

				for (let i = 0, j = instance.entity.SelfieAgeDetection.validCanvasFaceList.length; i < j; i++) {
					for (let ii = 0, jj = instance.entity.ScanIdAgeVerification.validFaceList.length; ii < jj; ii++) {

						instance.debug.logToContainer('<p>Image pair:</p>');
						instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(instance.entity.SelfieAgeDetection.validCanvasFaceList[i]));
						instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(instance.entity.ScanIdAgeVerification.validCanvasFaceList[ii]));

						let distance = instance.plugin.Library.Ml.FaceApi.compareFaceDescriptors(
							instance.entity.SelfieAgeDetection.validFaceList[i].descriptor,
							instance.entity.ScanIdAgeVerification.validFaceList[ii].descriptor
						);

						instance.debug.logToContainer('<p>Face comparison distance: <span class="' + (distance <= Config.MAX_FACE_DISTANCE_TO_MATCH ? 'green' : 'red') + '">' + distance + '</span></p>');

						let faceItsMatching = distance <= Config.MAX_FACE_DISTANCE_TO_MATCH;
						if (faceItsMatching) {
							instance.entity.ScanIdAgeVerification.totalValidFaceMatch++;
						}

						if (instance.entity.ScanIdAgeVerification.totalValidFaceMatch >= Config.MIN_VALID_FACE_MATCH) {
							instance.debug.logToContainer('<p>Found at least ' + Config.MIN_VALID_FACE_MATCH + ' similar faces.</p>');

							instance.ui.ScanIdAgeVerificationFaceSimilarityButton.hideLoading();

							Method.ocrImage();

							return;
						}

					}

				}

				Method.goToFailStep(25052, 'Selfie face does not match the one found on the identity card');

			}

			public static ocrImage() {

				// go through all id type variants
				instance.entity.ScanIdAgeVerification.incrementIdVariantCurrent();

				instance.plugin.Library.Ml.Tesseract.setIdConfig(instance.entity.ScanIdAgeVerification.getIdTypeConfig(), (workerWasConfigured: boolean | null) => {

					let idSizeConfig          = instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList;
					let faceCoordinates       = instance.plugin.Library.Ml.FaceApi.extractFaceCoordinates(instance.entity.ScanIdAgeVerification.validFaceList[0]);
					let birthDateMaskPosition = Avs.Helper.ElementPositionCalculator.calculateBirthDateMaskPosition(faceCoordinates, idSizeConfig);
					let canvasResultElement   = $(Config.CAMERA_SOURCE_CANVAS_RESULT_ELEMENT).get(0);

					// TODO: tweak these more?
					let zoomAdjustment = instance.entity.ScanIdAgeVerification.getIdTypeConfig().idRegionZoom + Math.floor(Math.random() * Config.ZOOM_ADJUSTMENT_MAX_VALUE);

					instance.debug.logToContainer('<p>Zoom: ' + zoomAdjustment + '</p>');

					let maskCanvas = Avs.Helper.VideoAreaExtractor.videoMaskToCanvas(
						Method.getProcessingCanvas(),
						canvasResultElement,
						birthDateMaskPosition,
						zoomAdjustment
					);

					Avs.Helper.Canvas.grayscaleCanvas(maskCanvas);

					let adjustment = Method.getBrightnessAndContrastRandomAdjustment();

					Avs.Helper.Canvas.brightnessCanvas(maskCanvas, adjustment.brightness);
					Avs.Helper.Canvas.contrastCanvas(maskCanvas, adjustment.contrast);
					//Avs.Helper.Canvas.thresholdCanvas(maskCanvas, instance.entity.ScanIdAgeVerification.getIdTypeConfig().threshold);

					instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(maskCanvas));

					instance.plugin.Library.Ml.Tesseract.extractInformationFromId(maskCanvas, (result: any) => {

						if (result !== null) {
							instance.debug.logToContainer('Detected age: ' + result.age);
						}

						instance.entity.ScanIdAgeVerification.totalScanNumber++;

						if (result !== null && result.age > 0 && result.age < Config.MAX_SCAN_VALUE) {
							instance.ui.ScanIdAgeVerificationStatusLabel.stopBlinking();

							instance.entity.ScanIdAgeVerification.validScanNumber++;
							instance.debug.logToContainer('<p>Birth date: ' + result.birthDate + ' Age: ' + result.age + '</p>');

							instance.ui.ScanIdAgeVerificationCurrentAgeArea.setContent('Current detected age: ' + result.age);

							instance.entity.ScanIdAgeVerification.validScanValueList.push(result.age);
							instance.entity.ScanIdAgeVerification.setLowestScanValue();

							// store working combination for reuse
							instance.debug.logToContainer('<p>Store brightness ' + adjustment.brightness + ' and contrast ' + adjustment.contrast + ' for reuse</p>');
							instance.entity.ScanIdAgeVerification.workingBrightnessValue = adjustment.brightness;
							instance.entity.ScanIdAgeVerification.workingContrastValue   = adjustment.contrast;

						}
						else {
							instance.ui.ScanIdAgeVerificationStatusLabel.startBlinking();
							instance.debug.logToContainer('<p>No valid birth date found.</p>');
						}

						Method.checkOcrStep();

					});

				});

			}

			public static getAgeMinimumValue() {

				let minimumValue = Config.MIN_SCAN_VALUE;

				let idCountry = instance.entity.ScanIdAgeVerification.idCountry;
				let idState = instance.entity.ScanIdAgeVerification.idState;
				if (typeof Application.countryAgeMajority[idCountry] != 'undefined') {
					minimumValue = Application.countryAgeMajority[idCountry];

					if (
						idState != null &&
					    typeof instance.entity.ScanIdAgeVerification.getStateMajorityList()[idCountry] != 'undefined' &&
					    typeof instance.entity.ScanIdAgeVerification.getStateMajorityList()[idCountry][idState] != 'undefined'
					) {
						minimumValue = instance.entity.ScanIdAgeVerification.getStateMajorityList()[idCountry][idState];
					}

				}

				return minimumValue;

			}

			public static checkOcrStep() {

				if (instance.entity.ScanIdAgeVerification.validScanNumber == Config.MAX_VALID_DATA_EXTRACTION_NUMBER) {

					instance.debug.logToContainer('<p>Birth date final result:' + instance.entity.ScanIdAgeVerification.lowestScanValue + '</p>');

					if (instance.entity.ScanIdAgeVerification.lowestScanValue < Method.getAgeMinimumValue()) {
						Method.goToFailStep(25053, 'Detected your age is lower than ' + Method.getAgeMinimumValue() + ' years');
						return;
					}

					Method.goToSuccessStep();

					return;

				}

				if (instance.entity.ScanIdAgeVerification.totalScanNumber == Config.MAX_TOTAL_DATA_EXTRACTION_NUMBER) {
					Method.goToFailStep(25054, 'Failed to extract your age from the current identity card');
					return;
				}

				setTimeout(() => {
					Method.ocrImage();
				}, Config.DATA_EXTRACTION_INTERVAL_MS);

			}

			public static goToSuccessStep() {
				StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
				ResultPageSuccess.init();

				if (!instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
					instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
				}
			}

			public static goToFailStep(failCode: number, failReason: string) {
				StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_FAIL_LAYER);

				ResultPageFail.init();
				ResultPageFail.Method.saveError(failCode);
				ResultPageFail.Method.renderFailReason(failCode + ': ' + failReason);

				if (!instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
					instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
				}
			}

			public static repositionScanId() {

				if (instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
					return;
				}

				let elementPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionFromConfig({
					width    : instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.width,
					height   : instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.height,
					maxWidth : Config.BOUNDARY_MAX_WIDTH,
					maxHeight: Config.BOUNDARY_MAX_HEIGHT,
					boundary : {
						top   : Config.BOUNDARY_TOP,
						bottom: Config.BOUNDARY_BOTTOM,
						left  : Config.BOUNDARY_LEFT,
						right : Config.BOUNDARY_RIGHT
					}
				});

				let innerElementPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionRelativeToContainer(
					{
						width    : instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.width,
						height   : instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.height,
						maxWidth : Config.BOUNDARY_MAX_WIDTH,
						maxHeight: Config.BOUNDARY_MAX_HEIGHT,
						boundary : {
							top   : Config.BOUNDARY_TOP,
							bottom: Config.BOUNDARY_BOTTOM,
							left  : Config.BOUNDARY_LEFT,
							right : Config.BOUNDARY_RIGHT
						}
					},
					{
						width : instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.width,
						height: instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.height,
						top   : instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.top,
						left  : instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.left
					}
				);

				Avs.Helper.ElementPositionCalculator.applyPositioning(Config.ID_CARD_GUIDE_CONTAINER, elementPosition);
				Avs.Helper.ElementPositionCalculator.applyPositioning(Config.ID_CARD_GUIDE_BIRTH_DATE_CONTAINER, innerElementPosition);

			}

		}

	}

}
