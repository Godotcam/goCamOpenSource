namespace Avs {

	export namespace Plugin {

		export namespace Library {

			export namespace Ml {

				export class Tesseract extends Avs.Plugin.Handler {

					static readonly LANGUAGE_EN = 'eng';
					static readonly LANGUAGE_FR = 'fra';

					static readonly MONTH_NAME_LANGUAGE_FR = 'fr';
					static readonly MONTH_NAME_LANGUAGE_EN = 'en';
					static readonly MONTH_NAME_LANGUAGE_BE = 'be';
					static readonly MONTH_NAME_LANGUAGE_EL = 'el';
					static readonly MONTH_NAME_LANGUAGE_NL = 'nl';

					public config: ITesseractConfig;
					public event: Avs.Event.Listener;
					public api: Avs.IGenericApi;

					private monthNameLanguage: string;
					private monthNameList: IMonthNameList;

					public tesseractClass: any;
					public workerInstance: any;

					public workerLoaded: boolean;
					public languageLoaded: boolean;
					public languageInit: boolean;
					public workerConfigured: boolean;

					public videoElement: HTMLVideoElement;

					constructor(
						config: ITesseractConfig,
						event: Avs.Event.Listener,
						api: Avs.IGenericApi
					) {

						super(config, event, api);

						this.config = config;
						this.api    = api;

						this.monthNameLanguage = Tesseract.MONTH_NAME_LANGUAGE_FR;
						this.monthNameList     = {
							[Tesseract.MONTH_NAME_LANGUAGE_FR]: {
								'01': 'janv',
								'02': 'févr',
								'03': 'mars',
								'04': 'avril',
								'05': 'mai',
								'06': 'juin',
								'07': 'juil',
								'08': 'août',
								'09': 'sept',
								'10': 'oct',
								'11': 'nov',
								'12': 'déc',
							},
							[Tesseract.MONTH_NAME_LANGUAGE_EN]: {
								'01': 'jan',
								'02': 'feb',
								'03': 'mar',
								'04': 'apr',
								'05': 'may',
								'06': 'jun',
								'07': 'jul',
								'08': 'aug',
								'09': 'sept',
								'10': 'oct',
								'11': 'nov',
								'12': 'dec',
							},
							[Tesseract.MONTH_NAME_LANGUAGE_BE]: {
								'01': 'jan',
								'02': 'feb',
								'03': 'maart',
								'04': 'apr',
								'05': 'mei',
								'06': 'juni',
								'07': 'juli',
								'08': 'aug',
								'09': 'sept',
								'10': 'oct',
								'11': 'nov',
								'12': 'dec',
							},
							[Tesseract.MONTH_NAME_LANGUAGE_NL]: {
								'01': 'jan',
								'02': 'feb',
								'03': 'maart',
								'04': 'apr',
								'05': 'mei',
								'06': 'juni',
								'07': 'juli',
								'08': 'aug',
								'09': 'sept',
								'10': 'oct',
								'11': 'nov',
								'12': 'dec',
							},
							[Tesseract.MONTH_NAME_LANGUAGE_EL]: {
								'01': 'ian',
								'02': 'phevr',
								'03': 'mart',
								'04': 'apr',
								'05': 'maios',
								'06': 'ioun',
								'07': 'ioul',
								'08': 'aug',
								'09': 'sept',
								'10': 'okt',
								'11': 'noem',
								'12': 'dek',
							}
						};

						// TODO: load the library on demand

						if (typeof Tesseract === 'undefined') {
							this.debug.error(25012, 'Required ocr library not loaded.');
							throw new Error('Required ocr library not loaded.');
						}

						this.tesseractClass = (<any>window).Tesseract;

						this.workerInstance = new this.tesseractClass.createWorker({
							workerPath : this.config.workerPath,
							langPath   : this.config.languagePath,
							corePath   : this.config.corePath,
							cacheMethod: 'refresh',
							logger     : (result: any) => {
							},
						});

						this.videoElement = (<HTMLVideoElement>$(this.config.videoElementSelector).get(0));

						this.workerLoaded     = false;
						this.languageLoaded   = false;
						this.languageInit     = false;
						this.workerConfigured = false;

					}

					public setIdConfig(idConfig: Avs.Entity.IIdTypeToConfigItem, cb: Function) {

						this.config.idConfig = idConfig;
						this.configureWorker((result: boolean | null) => {
							cb(result);
						});

					}

					public isValidLanguage(language: string) {
						return language == Tesseract.LANGUAGE_EN || language == Tesseract.LANGUAGE_FR;
					}

					public loadWorker(cb: Function) {

						this.workerInstance.load().then(
							(result: any) => {

								this.workerLoaded = true;

								this.debug.info('worker loaded');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public loadLanguage(language: string, cb: Function) {

						// needs worker load
						if (!this.workerLoaded) {
							this.debug.error(25020, 'Ocr worker was not loaded');
							cb(null);
							return;
						}

						if (!this.isValidLanguage(language)) {
							this.debug.error(25021, 'Load request for invalid ocr language');
							cb(null);
							return;
						}

						this.workerInstance.loadLanguage(language).then(
							(result: any) => {

								this.languageLoaded = true;

								this.debug.info(language + ' language loaded');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public initLanguage(language: string, cb: Function) {

						// needs worker load
						if (!this.workerLoaded) {
							this.debug.error(25022, 'Ocr worker was not loaded');
							cb(null);
							return;
						}

						// needs language load
						if (!this.languageLoaded) {
							this.debug.error(25023, 'Ocr language was not loaded');
							cb(null);
							return;
						}

						if (!this.isValidLanguage(language)) {
							this.debug.error(25024, 'Initialization request for invalid tesseract language');
							cb(null);
							return;
						}

						this.workerInstance.initialize(language).then(
							(result: any) => {

								this.languageInit = true;

								this.debug.info(language + ' language initialized');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public configureWorker(cb: Function) {

						// needs worker load
						if (!this.workerLoaded) {
							this.debug.error(25025, 'Ocr worker was not loaded');
							cb(null);
							return;
						}

						// needs language load
						if (!this.languageLoaded) {
							this.debug.error(25026, 'Ocr language was not loaded');
							cb(null);
							return;
						}

						// needs language init
						if (!this.languageInit) {
							this.debug.error(25027, 'Ocr language was not initialized');
							cb(null);
							return;
						}

						this.workerInstance.setParameters(this.config.idConfig.tesseractConfig).then(
							(result: any) => {

								this.workerConfigured = true;

								this.debug.info('worker configured');

								cb(true);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public ocrImage(image: any, cb: Function) {

						// needs worker load
						if (!this.workerLoaded) {
							this.debug.error(25028, 'Ocr worker was not loaded');
							cb(null);
							return;
						}

						// needs language load
						if (!this.languageLoaded) {
							this.debug.error(25029, 'Ocr language was not loaded');
							cb(null);
							return;
						}

						// needs language init
						if (!this.languageInit) {
							this.debug.error(25030, 'Ocr language was not initialized');
							cb(null);
							return;
						}

						// needs worker config
						if (!this.workerConfigured) {
							this.debug.error(25031, 'Ocr worker was not configured');
							cb(null);
							return;
						}

						this.workerInstance.recognize(image).then(
							(result: any) => {

								this.debug.info('ocr image');

								cb(result);

							},
							(error: Error) => {

								cb(null);

							}
						);

					}

					public extractInformationFromId(image: any, cb: Function) {

						this.ocrImage(image, (result: any) => {

							let foundText = result.data.text.trim();
							if (this.config.idConfig.stripWhiteSpace) {
								foundText = foundText.replace(/\s/g, '');
							}

							let findDate = null;

							this.debug.logToContainer(foundText);
							this.debug.logToContainer('<br/>');

							let ruleMatched = 0;
							for (let i = 0, j = this.config.idConfig.textMatcherRule.length; i < j; i++) {

								let regexString = this.config.idConfig.textMatcherRule[i];
								regexString = regexString.slice(1);
								regexString = regexString.slice(0, -3);

								this.debug.logToContainer(regexString);
								this.debug.logToContainer('<br/>');

								let regex = new RegExp(regexString, 'ig')
								findDate = regex.exec(foundText);

								if (findDate !== null) {
									ruleMatched = i;
									break;
								}
							}

							if (findDate === null) {
								cb(null);
								return;
							}

							if (this.config.idConfig.monthNameLanguage) {
								this.monthNameLanguage = this.config.idConfig.monthNameLanguage;
							}

							if (findDate.length >= 4) {

								let dateComponentsPosition = this.config.idConfig.dateComponentsPosition[ruleMatched];
								let dayIndex               = dateComponentsPosition.day;
								let monthIndex             = dateComponentsPosition.month;
								let yearIndex              = dateComponentsPosition.year;

								let day   = this.formatDay(findDate[dayIndex]);
								let month = this.formatMonth(findDate[monthIndex]);
								let year  = this.formatYear(findDate[yearIndex]);

								let dateFoundString = year + '-' + month + '-' + day;
								let dateFound       = Date.parse(dateFoundString);

								let dateNow = (+new Date());

								let scanIdPersonYears = ((dateNow - dateFound) / 1000 / 3600 / 24 / 365).toFixed();

								cb({
									birthDate: dateFoundString,
									age      : scanIdPersonYears,
								});

							}
							else {
								cb(null);
							}

						});

					}

					public formatDay(day: string): string {

						return day.length == 2 ? day : '0' + day;

					}

					public formatMonth(month: string): string {

						month = month.toLowerCase();

						for (let i in this.monthNameList[this.monthNameLanguage]) {
							month = month.replace(this.monthNameList[this.monthNameLanguage][i], i);
							month = month.replace(this.monthNameList[this.monthNameLanguage][i].toUpperCase(), i);
						}

						return month.length == 2 ? month : '0' + month;

					}

					public formatYear(year: string) {

						if (year.length == 4) {
							return year;
						}

						if (year.length == 2) {
							let currentYear = new Date().getFullYear().toString().substr(-2);

							if (year < currentYear) {
								year = '20' + year;
								return year;
							}

							year = '19' + year;
							return year;

						}

						return 0;

					}


				}

				export interface ITesseractConfig {
					idConfig: Avs.Entity.IIdTypeToConfigItem,
					workerPath: string,
					languagePath: string,
					corePath: string,
					videoElementSelector: string,
					debugLevel?: number,
				}

				export interface IMonthNameList {
					[key: string]: {
						[key: string]: string
					}
				}

			}

		}

	}

}
