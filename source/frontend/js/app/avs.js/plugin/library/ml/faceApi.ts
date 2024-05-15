namespace Avs {

	export namespace Plugin {

		export namespace Library {

			export namespace Ml {

				export class FaceApi extends Avs.Plugin.Handler {

					static readonly DETECTOR_TYPE_SSD_MOBILE_NET_V1  = 'ssd_mobilenetv1';
					static readonly DETECTOR_TYPE_TINY_FACE_DETECTOR = 'tiny_face_detector';

					static readonly SSD_MOBILE_NET_MIN_CONFIDENCE = 0.5;

					static readonly TINY_FACE_DETECTOR_INPUT_SIZE      = 416;
					static readonly TINY_FACE_DETECTOR_SCORE_THRESHOLD = 0.3;

					static readonly EXPRESSION_MIN_CONFIDENCE = 0.5;

					static readonly EXPRESSION_ANGRY     = 'angry';
					static readonly EXPRESSION_DISGUSTED = 'disgusted';
					static readonly EXPRESSION_FEARFUL   = 'fearful';
					static readonly EXPRESSION_HAPPY     = 'happy';
					static readonly EXPRESSION_NEUTRAL   = 'neutral';
					static readonly EXPRESSION_SAD       = 'sad';
					static readonly EXPRESSION_SURPRISED = 'surprised';

					public config: IFaceApiConfig;
					public event: Avs.Event.Listener;
					public api: Avs.IGenericApi;

					public faceApiClass: any;
					public detectorType: string;
					public detectorOptions: any;
					public predictAgeList: Array<number>;

					public detectorLoaded: boolean;
					public ageGenderLoaded: boolean;
					public landmarksModelLoaded: boolean;
					public recognitionModelLoaded: boolean;
					public faceExpressionModelLoaded: boolean;

					public videoElement: HTMLVideoElement;
					public canvasOverlayElement: HTMLCanvasElement;

					constructor(
						config: IFaceApiConfig,
						event: Avs.Event.Listener,
						api: Avs.IGenericApi
					) {

						super(config, event, api);

						this.config = config;
						this.api    = api;

						if (typeof faceapi === 'undefined') {
							this.debug.error(25011, 'Required face detection library not loaded.');
							throw new Error('Required face detection library not loaded.');
						}

						this.faceApiClass    = faceapi;
						this.detectorOptions = null;
						this.predictAgeList  = [];

						this.videoElement         = (<HTMLVideoElement>$(this.config.videoElementSelector).get(0));
						this.canvasOverlayElement = (<HTMLCanvasElement>$(this.config.canvasOverlayElementSelector).get(0));
						this.detectorType         = this.config.detectorType;

						this.detectorLoaded            = false;
						this.ageGenderLoaded           = false;
						this.landmarksModelLoaded      = false;
						this.recognitionModelLoaded    = false;
						this.faceExpressionModelLoaded = false;

					}

					public loadDetector(cb: Function) {

						switch (this.detectorType) {

							case FaceApi.DETECTOR_TYPE_SSD_MOBILE_NET_V1:

								this.faceApiClass.nets.ssdMobilenetv1.load(this.config.weightsPath).then(
									(result: any) => {

										this.detectorLoaded = true;

										this.debug.info('loaded detector');

										this.detectorOptions = new this.faceApiClass.SsdMobilenetv1Options({
											minConfidence: FaceApi.SSD_MOBILE_NET_MIN_CONFIDENCE
										});

										cb(true);

									},
									(error: Error) => {

										cb(null);

									}
								);

								break;

							case FaceApi.DETECTOR_TYPE_TINY_FACE_DETECTOR:

								this.faceApiClass.nets.tinyFaceDetector.load(this.config.weightsPath).then(
									(result: any) => {

										this.detectorLoaded = true;

										this.debug.info('loaded detector');

										this.detectorOptions = new this.faceApiClass.TinyFaceDetectorOptions({
											inputSize     : FaceApi.TINY_FACE_DETECTOR_INPUT_SIZE,
											scoreThreshold: FaceApi.TINY_FACE_DETECTOR_SCORE_THRESHOLD
										});

										cb(true);

									},
									(error: Error) => {

										cb(null);

									}
								);

								break;

							default:

								cb(null);

						}

					}

					public loadAgeGenderModel(cb: Function) {

						// detector must be loaded
						if (!this.detectorLoaded) {
							this.debug.error(25013, 'Face detection detector must be loaded');
							cb(null);
							return;
						}

						this.faceApiClass.nets.ageGenderNet.load(this.config.weightsPath).then(
							(result: any) => {

								this.ageGenderLoaded = true;

								this.debug.info('loaded age and gender model');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public loadLandmarksModel(cb: Function) {

						this.faceApiClass.loadFaceLandmarkModel(this.config.weightsPath).then(
							(result: any) => {

								this.landmarksModelLoaded = true;

								this.debug.info('loaded landmarks model');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public loadFaceRecognitionModel(cb: Function) {

						this.faceApiClass.loadFaceRecognitionModel(this.config.weightsPath).then(
							(result: any) => {

								this.recognitionModelLoaded = true;

								this.debug.info('loaded face recognition model');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public loadFaceExpressionModel(cb: Function) {

						this.faceApiClass.loadFaceExpressionModel(this.config.weightsPath).then(
							(result: any) => {

								this.faceExpressionModelLoaded = true;

								this.debug.info('loaded face expression model');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public detectFaceAge(cb: Function) {

						// detector must be loaded
						if (!this.detectorLoaded) {
							this.debug.error(25014, 'Face detection detector must be loaded');
							cb(null);
							return;
						}

						// age gender must be loaded
						this.debug.info('detect face age');
						if (!this.ageGenderLoaded) {
							this.debug.error(25015, 'Face detection age and gender model must be loaded');
							cb(null);
							return;
						}

						this.faceApiClass.detectSingleFace(this.videoElement, this.detectorOptions).withAgeAndGender().then(
							(result: any) => {

								console.log('===================');
								console.log(result);
								console.log('===================');

								// face was detected
								if (typeof result !== 'undefined' && result.detection) {

									const age        = result.age;
									const averageAge = parseInt(this.interpolateAgePredictions(age).toFixed());

									//this.drawFaceAgeResults(result, age, averageAge);

									cb({
										detection : result.detection,
										age       : age,
										averageAge: averageAge
									});

								}
								else {

									cb(null);

								}

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public detectFace(cb: Function) {

						// detector must be loaded
						if (!this.detectorLoaded) {
							this.debug.error(25016, 'Face detection detector must be loaded');
							cb(null);
							return;
						}

						this.debug.info('detect face');

						this.faceApiClass.detectSingleFace(this.videoElement, this.detectorOptions).withFaceLandmarks().withFaceDescriptor().then(
							(result: any) => {

								// face was detected
								if (typeof result !== 'undefined') {

									console.log('+++++++++++++++');
									console.log(result);
									console.log('+++++++++++++++');

									cb(result);

								}
								else {

									cb(null);

								}

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public detectFaceFromCustomElement(customElement: HTMLElement, cb: Function) {

						// detector must be loaded
						if (!this.detectorLoaded) {
							this.debug.error(25048, 'Face detection detector must be loaded');
							cb(null);
							return;
						}

						// recognition model must be loaded
						this.debug.info('detect face age');
						if (!this.recognitionModelLoaded) {
							this.debug.error(25049, 'Face detection recognition model must be loaded');
							cb(null);
							return;
						}

						this.debug.info('detect face');

						this.faceApiClass.detectSingleFace(customElement, this.detectorOptions).withFaceLandmarks().withFaceDescriptor().then(
							(result: any) => {

								// face was detected
								if (typeof result !== 'undefined') {

									this.drawFaceAgeResultsToCustomElement(result, 1, 1, $('.documentProcessingCanvasOverlay').get(0), customElement);

									cb(result);

								}
								else {

									cb(null);

								}

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public extractFaceImage(detectedFace: any, cb: Function) {

						// detector must be loaded
						if (!this.detectorLoaded) {
							this.debug.error(25018, 'Face detection detector must be loaded');
							cb(null);
							return;
						}

						this.faceApiClass.extractFaces(this.videoElement, [detectedFace]).then(
							(result: any) => {

								cb(result);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public extractFaceImageFromCustomElement(detectedFace: any, customElement: HTMLElement, cb: Function) {

						// detector must be loaded
						if (!this.detectorLoaded) {
							this.debug.error(25050, 'Face detection detector must be loaded');
							cb(null);
							return;
						}

						this.faceApiClass.extractFaces(customElement, [detectedFace]).then(
							(result: any) => {

								cb(result);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public compareFaceImagePair(image1: any, image2: any, cb: Function) {

						// recognition model must be loaded
						if (!this.recognitionModelLoaded) {
							this.debug.error(25019, 'Face detection recognition model must be loaded');
							cb(null);
							return;
						}

						this.faceApiClass.computeFaceDescriptor(image1).then(
							(face1Descriptors: any) => {

								this.faceApiClass.computeFaceDescriptor(image2).then(
									(face2Descriptors: any) => {

										cb(this.compareFaceDescriptors(face1Descriptors, face2Descriptors));

									},
									(error: Error) => {

										cb(null);

									}
								);
							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public detectFaceExpression(cb: Function) {

						// detector must be loaded
						if (!this.detectorLoaded) {
							this.debug.error(25059, 'Face detection detector must be loaded');
							cb(null);
							return;
						}

						// expression must be loaded
						this.debug.info('detect face expression');
						if (!this.faceExpressionModelLoaded) {
							this.debug.error(25060, 'Face api expression model must be loaded');
							cb(null);
							return;
						}

						this.faceApiClass.detectSingleFace(this.videoElement, this.detectorOptions).withFaceExpressions().then(
							(result: any) => {

								// face was detected
								if (typeof result !== 'undefined' && result.detection && result.expressions) {

									let expressionStrongest = null;
									for (let i in result.expressions) {
										if (result.expressions.hasOwnProperty(i)) {

											let expressionValue = result.expressions[i];
											if (expressionValue >= FaceApi.EXPRESSION_MIN_CONFIDENCE) {
												expressionStrongest = i;
											}

										}
									}

									cb({
										detection          : result.detection,
										expressionList     : result.expressions,
										expressionStrongest: expressionStrongest
									});

								}
								else {

									cb(null);

								}

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public compareFaceDescriptors(face1Descriptors: any, face2Descriptors: any) {

						const originalDistance = this.faceApiClass.euclideanDistance(face1Descriptors, face2Descriptors);

						return originalDistance;

						//return this.faceApiClass.utils.round(originalDistance);

					}

					public drawFaceAgeResults(result: any, age: number, averageAge: number) {

						const dims          = this.faceApiClass.matchDimensions(this.canvasOverlayElement, this.videoElement, true);
						const resizedResult = this.faceApiClass.resizeResults(result, dims);

						this.faceApiClass.draw.drawDetections(this.canvasOverlayElement, resizedResult);

						new this.faceApiClass.draw.DrawTextField(
							[averageAge + ' average', age.toFixed() + ' current'],
							result.detection.box.bottomLeft
						).draw(this.canvasOverlayElement);

					}

					public drawFaceAgeResultsToCustomElement(result: any, age: number, averageAge: number, canvasOverlay: HTMLElement, customElement: HTMLElement) {

						const dims          = this.faceApiClass.matchDimensions(canvasOverlay, customElement, true);
						const resizedResult = this.faceApiClass.resizeResults(result, dims);

						this.faceApiClass.draw.drawDetections(canvasOverlay, resizedResult);

						new this.faceApiClass.draw.DrawTextField(
							[averageAge + ' average', age.toFixed() + ' current'],
							result.detection.box.bottomLeft
						).draw(canvasOverlay);

					}

					public interpolateAgePredictions(age: number) {
						this.predictAgeList = [age].concat(this.predictAgeList).slice(0, 30);

						if (this.predictAgeList.length === 1) {
							return this.predictAgeList[0];
						}

						return this.predictAgeList.reduce((total: number, a: number) => total + a) / this.predictAgeList.length;
					}

					public extractFaceCoordinates(faceDetection: IFaceDetectionCoordinates): IFaceCoordinates {

						return {
							width      : faceDetection.alignedRect._box.width,
							height     : faceDetection.alignedRect._box.height,
							top        : faceDetection.alignedRect._box.top,
							left       : faceDetection.alignedRect._box.left,
							imageWidth : faceDetection.alignedRect._imageDims.width,
							imageHeight: faceDetection.alignedRect._imageDims.height,
						};

					}

				}

				export interface IFaceApiConfig {
					weightsPath: string,
					canvasOverlayElementSelector: string,
					videoElementSelector: string,
					detectorType: string,
					debugLevel?: number,
				}

				export interface IFaceDetectionCoordinates {
					alignedRect: {
						_box: {
							width: number,
							height: number,
							top: number,
							left: number,
							bottom?: number,
							right?: number
						},
						_imageDims: {
							width: number,
							height: number
						}
					}
				}

				export interface IFaceCoordinates {
					width: number,
					height: number,
					top: number,
					left: number,
					imageWidth: number,
					imageHeight: number
				}

			}

		}

	}

}
