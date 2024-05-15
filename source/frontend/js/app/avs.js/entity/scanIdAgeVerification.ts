namespace Avs {

	export namespace Entity {

		export class ScanIdAgeVerification {

			static readonly RATIO_TYPE_LANDSCAPE = 1;
			static readonly RATIO_TYPE_PORTRAIT  = 2;

			public static instance: ScanIdAgeVerification;

			public videoDeviceId: string;
			public facingMode: string;

			public idCountry: string;
			public idState: string;
			public idTypeString: "idCard" | "passport" | "driverLicence";
			public idVariantCurrent: number;

			public validScanNumber: number;
			public totalScanNumber: number;

			public validScanValueList: Array<number>;
			public lowestScanValue: number;

			public validFaceNumber: number;
			public totalFaceNumber: number;

			public resourcesPreloaded: boolean;

			public workingBrightnessValue: number;
			public workingContrastValue: number;

			public validCanvasFaceList: Array<HTMLCanvasElement>;
			public validFaceList: Array<any>;

			public totalValidFaceMatch: number;

			constructor() {

				this.idCountry        = null;
				this.idState          = null;
				this.idTypeString     = null;
				this.idVariantCurrent = 0;

				this.initialValues();

			}

			public static getInstance() {

				if (!this.instance) {
					this.instance = new ScanIdAgeVerification();
				}

				return this.instance;

			}

			public initialValues() {

				this.videoDeviceId      = null;
				this.facingMode         = null;
				this.validScanNumber    = 0;
				this.totalScanNumber    = 0;
				this.validScanValueList = [];
				this.lowestScanValue    = 0;

				this.validFaceNumber     = 0;
				this.totalFaceNumber     = 0;
				this.validCanvasFaceList = [];
				this.validFaceList       = [];

				this.workingBrightnessValue = null;
				this.workingContrastValue   = null;

				this.totalValidFaceMatch = 0;

				this.resourcesPreloaded = false;

			}

			public setLowestScanValue() {

				this.lowestScanValue = Math.min.apply(Math, this.validScanValueList);

			}

			public getIdTypeConfig() {

				if (this.idState !== null) {
					return Avs.Config.scanIdList[this.idCountry]['stateList'][this.idState]['idConfig'][this.idTypeString][this.idVariantCurrent];
				}

				return Avs.Config.scanIdList[this.idCountry]['idConfig'][this.idTypeString][this.idVariantCurrent];

			}

			public incrementIdVariantCurrent() {

				let totalIdVariantNumber = 0;
				if (this.idState !== null) {
					totalIdVariantNumber = Avs.Config.scanIdList[this.idCountry]['stateList'][this.idState]['idConfig'][this.idTypeString].length;
				}
				else {
					totalIdVariantNumber = Avs.Config.scanIdList[this.idCountry]['idConfig'][this.idTypeString].length;
				}

				this.idVariantCurrent = (this.idVariantCurrent + 1) % totalIdVariantNumber;

			}

			// TODO: make this dynamic, not static (extract from DB maybe)
			public getStateMajorityList(): { [key: string]: { [key: string]: number } } {

				return {
					"US": {
						"AR": 18,
						"LA": 18,
						"MS": 21,
						"MT": 18,
						"NC": 18,
						"TX": 18,
						"UT": 18,
						"VA": 18,

					}
				};

			}

		}

		export interface IIdTypeConfig {
			[key: string]: {
				countryName: string,
				hasMultipleState: boolean,
				idConfig?: {
					idCard: IIdTypeToConfigItem[],
					passport: IIdTypeToConfigItem[],
					driverLicence: IIdTypeToConfigItem[]
				},
				stateList?: {
					[key: string]: {
						stateName: string,
						idConfig: {
							idCard: IIdTypeToConfigItem[],
							passport: IIdTypeToConfigItem[],
							driverLicence: IIdTypeToConfigItem[]
						}
					}
				}

			}
		}

		export interface IIdTypeToConfig {
			[key: number]: IIdTypeToConfigItem
		}

		export interface IIdTypeToConfigItem {
			year: number,
			tesseractConfig: {
				tessedit_char_whitelist: string,
				tessedit_ocr_engine_mode?: number,
				tessedit_pageseg_mode?: number
			},
			textMatcherRule: Array<string>,
			dateComponentsPosition: Array<{
				day: number,
				month: number,
				year: number
			}>,
			monthNameLanguage?: string,
			stripWhiteSpace: boolean,
			brightness: number,
			contrast: number,
			threshold: number,
			idSizeList: IIdSizeItem,
			idRegionZoom: number
		}

		export interface IIdSizeItem {
			container: {
				width: number,
				height: number,
				ratioType: number
			},
			birthDateArea: {
				width: number,
				height: number,
				top: number,
				left: number,
			}
			faceArea: {
				width: number,
				height: number,
				top: number,
				left: number,
				birthDateAreaDistance: {
					top: number,
					left: number
				}
			}
		}

	}

}
