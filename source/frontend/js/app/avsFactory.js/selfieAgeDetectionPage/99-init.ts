namespace AvsFactory {

	export namespace SelfieAgeDetectionPage {

		export var instance: Avs.SelfieAgeDetectionPage;

		export function init() {

			let selfieAgeDetectionEntity     = Avs.Entity.SelfieAgeDetection.getInstance();
			let verificationStepGlobalEntity = Avs.Entity.VerificationStepGlobal.getInstance();
			let faceApiDetectorType          = Avs.Plugin.Library.Ml.FaceApi.DETECTOR_TYPE_TINY_FACE_DETECTOR;
			if (verificationStepGlobalEntity.faceApiType == Avs.Entity.VerificationStepGlobal.FACE_API_TYPE_PRECISE) {
				faceApiDetectorType = Avs.Plugin.Library.Ml.FaceApi.DETECTOR_TYPE_SSD_MOBILE_NET_V1;
			}

			instance = new Avs.SelfieAgeDetectionPage({
				debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				event     : {
					debugLevel: Config.DEFAULT_DEBUG_LEVEL,
				},
				plugin    : {
					Library: {
						Ml   : {
							FaceApi: {
								weightsPath                 : Config.FACE_API_WEIGHTS_PATH,
								canvasOverlayElementSelector: Config.CAMERA_SOURCE_CANVAS_OVERLAY_ELEMENT,
								videoElementSelector        : Config.CAMERA_SOURCE_ROOT_ELEMENT,
								detectorType                : faceApiDetectorType,
								debugLevel                  : Config.DEFAULT_DEBUG_LEVEL,
							}
						},
						Video: {
							CameraSource: {
								debugLevel: Config.DEFAULT_DEBUG_LEVEL,
								webrtc    : {
									debugLevel   : Config.DEFAULT_DEBUG_LEVEL,
									rootContainer: Config.CAMERA_SOURCE_ROOT_ELEMENT_CONTAINER,
									rootElement  : Config.CAMERA_SOURCE_ROOT_ELEMENT,
									options      : {
										streamVideoInputDevice: selfieAgeDetectionEntity.videoDeviceId,
										facingMode            : selfieAgeDetectionEntity.facingMode,
										eventNamesPrefix      : Config.EVENT_NAME_PREFIX
									}
								}
							}
						}
					}
				}
			});

			instance.entity.VerificationStepGlobal.stepId = Avs.Entity.VerificationStepGlobal.STEP_SELFIE_AGE_DETECTION_PAGE;

			Ui.init();
			Event.init();
			Binding.init();
			Method.init();

		}

	}

}
