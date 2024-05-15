namespace Avs {

	export namespace Entity {

		export class SelfieAgeDetection {

			public static instance: SelfieAgeDetection;

			public videoDeviceId: string;
			public facingMode: string;
			public totalScanNumber: number;
			public totalExpressionScanNumber: number;
			public validScanNumber: number;
			public ageResultList: Array<number>;
			public averageAge: number;

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

				this.ageResultList       = [];
				this.validCanvasFaceList = [];
				this.validFaceList       = [];

				this.resourcesPreloaded = false;

				this.validateSmileExpression = null;

			}

		}

	}

}
