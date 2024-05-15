namespace Avs {

	export namespace Entity {

		export class VerificationStepGlobal {

			static readonly VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL = 1;
			static readonly VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_FORCED   = 2;
			static readonly VERIFICATION_TYPE_CREDIT_CARD                 = 3;
			static readonly VERIFICATION_TYPE_SCAN_ID                     = 4;

			static readonly FACE_API_TYPE_FAST    = 1;
			static readonly FACE_API_TYPE_PRECISE = 2;

			static readonly TESSERACT_TYPE_FAST_EN    = 1;
			static readonly TESSERACT_TYPE_PRECISE_EN = 2;
			static readonly TESSERACT_TYPE_FAST_FR    = 3;
			static readonly TESSERACT_TYPE_PRECISE_FR = 4;

			static readonly STEP_START_PAGE                         = 1;
			static readonly STEP_SELFIE_AGE_DETECTION_INTRO         = 2;
			static readonly STEP_SELFIE_AGE_DETECTION_PAGE          = 3;
			static readonly STEP_SCAN_ID_AGE_VERIFICATION_INTRO     = 4;
			static readonly STEP_SCAN_ID_AGE_VERIFICATION_PAGE      = 5;
			static readonly STEP_CREDIT_CARD_AGE_VERIFICATION_INTRO = 6;
			static readonly STEP_CREDIT_CARD_AGE_VERIFICATION_PAGE  = 7;

			static readonly DEVICE_LOCATION_VERIFICATION_INTERNAL = 0;
			static readonly DEVICE_LOCATION_VERIFICATION_EXTERNAL = 1;

			public static instance: VerificationStepGlobal;

			public termsAndConditionAgreement: boolean;
			public verificationType: number;
			public screenOrientation: string;

			public layout: string;
			public faceApiType: number;
			public tesseractType: number;

			public partnerId: number;
			public payload: string;
			public successPayload: string;
			public deviceLocationVerification: number;
			public sessionId: string;
			public isVerified: boolean;

			public scanIdAgeVerificationInVideoBypassMode: boolean;

			public stepId: number;

			constructor() {

				this.initialValues();

			}

			public static getInstance() {

				if (!this.instance) {
					this.instance = new VerificationStepGlobal();
				}

				return this.instance;

			}

			public initialValues() {

				this.termsAndConditionAgreement = false;
				this.verificationType           = VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL;
				this.faceApiType                = VerificationStepGlobal.FACE_API_TYPE_FAST;
				this.tesseractType              = VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR;
				this.screenOrientation          = Avs.Helper.ResponsiveElements.DEVICE_ORIENTATION_PORTRAIT;
				this.stepId                     = VerificationStepGlobal.STEP_START_PAGE;

				this.partnerId                              = null;
				this.payload                                = null;
				this.successPayload                         = null;
				this.deviceLocationVerification             = VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_INTERNAL;
				this.sessionId                              = null;
				this.isVerified                             = false;
				this.scanIdAgeVerificationInVideoBypassMode = false;

			}

		}

	}

}
