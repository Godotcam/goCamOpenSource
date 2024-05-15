namespace Avs {

	export class GenericPage {

		static readonly DEFAULT_DEBUG_LEVEL = Debug.Log.LOG_LEVEL_ERROR;

		public config: IGenericPageConfig;

		public event: Avs.Event.Listener;
		public plugin: IGenericPagePlugin;
		public ui: IGenericPageUi;
		public video: IGenericPageVideo;
		public entity: IGenericPageEntities;
		public debug: Avs.Debug.Log;
		public debugLevel: number = GenericPage.DEFAULT_DEBUG_LEVEL;

		public apiEndpoint: string;
		public apiDataChannel: Avs.DataChannel.Http;

		constructor(config: IGenericPageConfig) {

			this.config = config;
			this.event  = new Avs.Event.Listener(this.config.event);

			this.apiEndpoint    = null;
			this.apiDataChannel = null;

			if (typeof config.api !== 'undefined' && typeof config.api.apiEndpoint !== 'undefined') {
				this.apiEndpoint    = config.api.apiEndpoint;
				this.apiDataChannel = new Avs.DataChannel.Http({
					apiEndpoint: this.apiEndpoint,
					debugLevel : this.config.debugLevel
				}, this.event);
			}

			this.debug = new Avs.Debug.Log(this.config.debugLevel || GenericPage.DEFAULT_DEBUG_LEVEL);

			this.setDefaultDebugLevel();
			this.initEntities();
			this.initPlugins();

		}

		public setDefaultDebugLevel(): void {

			for (let configValue in this.config) {
				if (typeof this.config[configValue] === 'object' &&
				    typeof this.config[configValue]['debugLevel'] == 'undefined' &&
				    configValue !== 'plugin'
				) {

					this.config[configValue]['debugLevel'] = this.debugLevel;
				}
			}

		}

		public initEntities() {

			this.entity = {};

			for (let entityName in Avs.Entity) {
				this.entity[entityName] = (<IGenericObject>Avs.Entity)[entityName].getInstance();
			}

		}

		public initPlugins(): void {

			this.plugin = {
				Library: {}
			};

			if (typeof this.config.plugin === 'undefined') {
				return;
			}

			for (let pluginCategory in this.config.plugin.Library) {

				if (this.config.plugin.Library.hasOwnProperty(pluginCategory)) {

					// init a plugin category
					if (typeof this.plugin[pluginCategory] === 'undefined') {
						this.plugin.Library[pluginCategory] = {};
					}

					// init all config Plugins
					for (let pluginName in this.config.plugin.Library[pluginCategory]) {

						if (this.config.plugin.Library[pluginCategory].hasOwnProperty(pluginName)) {

							this.plugin.Library[pluginCategory][pluginName] = new (<any>Avs.Plugin.Library)[pluginCategory][pluginName](
								this.config.plugin.Library[pluginCategory][pluginName],
								this.event,
								{
									apiDataChannel: this.apiDataChannel,
								}
							);

						}

					}

				}

			}

		}

		public destroyPlugins(): void {

			for (let pluginCategory in this.plugin) {

				if (this.plugin.hasOwnProperty(pluginCategory)) {
					for (let pluginName in this.plugin[pluginCategory]) {

						if (this.plugin[pluginCategory].hasOwnProperty(pluginName)) {
							// destroy Plugins using the provided "destroy()" method
							if (typeof this.plugin[pluginCategory][pluginName]['destroy'] === 'function') {
								this.plugin[pluginCategory][pluginName]['destroy']();
							}

						}

					}
				}

			}

		}

		public destroy(): void {

			this.destroyPlugins();
			this.event.destroy();

		}

	}

	export interface IGenericPageConfig {
		[key: string]: any

		event: Avs.Event.IEventsConfig,
		api?: {
			apiEndpoint?: string,
		},
		plugin?: IGenericPagePluginConfig,
	}

	export interface IGenericPagePluginConfig {
		[key: string]: any

	}

	export interface IGenericPagePlugin {
		[key: string]: any

		Library: IGenericPagePluginLibrary
	}

	export interface IGenericPagePluginLibrary {
		[key: string]: any

		Ml?: {
			FaceApi?: Avs.Plugin.Library.Ml.FaceApi,
			Tesseract?: Avs.Plugin.Library.Ml.Tesseract,
		},

		Video?: {
			CameraSource?: Avs.Plugin.Library.Video.CameraSource,
		}

	}

	export interface IGenericPageVideo {
		[key: string]: any
	}

	export interface IGenericPageEntities {
		[key: string]: any

		Ui?: Avs.Entity.Ui,
		VerificationStepGlobal?: Avs.Entity.VerificationStepGlobal,
		SelfieAgeDetection?: Avs.Entity.SelfieAgeDetection,
		ScanIdAgeVerification?: Avs.Entity.ScanIdAgeVerification,
	}

	export interface IGenericPageUi {
		[key: string]: any

	}

	export interface IApiResponseData {
		success: number,
		isValidated: boolean
	}

	export interface IApiError {
		code: number,
		msg: string
	}

}

interface Window {
	Base64?: any,
}
