namespace Avs {

	export namespace Entity {

		export class SelfieAgeDetection {

			public static instance: SelfieAgeDetection;

			public videoDeviceId: string;
			public facingMode: string;
			public videoDeviceData: Avs.Helper.IAnalysisResponse;
			public totalScanNumber: number;
			public totalExpressionScanNumber: number;
			public validScanNumber: number;
			public ageResultList: Array<number>;
			public currentAge: number;
			public averageAge: number;
			public patchAge: number;
			public challenge25Required: boolean;

			public totalInvalidFaceMatch: number;

			public resourcesPreloaded: boolean;

			public validCanvasFaceList: Array<HTMLCanvasElement>;
			public validFaceList: Array<any>;

			public validateSmileExpression: boolean | null;

			constructor() {

				this.initialValues();

			}

			public static getInstance() {

				if (!this.instance) {
					this.instance = new SelfieAgeDetection();
				}

				return this.instance;

			}

			public initialValues() {

				this.videoDeviceId             = null;
				this.facingMode                = null;
				this.totalScanNumber           = 0;
				this.totalExpressionScanNumber = 0;
				this.validScanNumber           = 0;
				this.averageAge                = 0;
				this.totalInvalidFaceMatch     = 0;
				this.patchAge                  = 0;
				this.challenge25Required       = false;

				this.ageResultList       = [];
				this.validCanvasFaceList = [];
				this.validFaceList       = [];

				this.currentAge = 0;

				this.resourcesPreloaded = false;

				this.validateSmileExpression = null;

			}

		}

	}

}
