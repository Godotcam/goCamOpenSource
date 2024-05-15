namespace Avs {

	export namespace Plugin {

		export namespace Library {

			export namespace Video {

				export class CameraSource extends Avs.Plugin.Handler {

					public static readonly EVENT_NAME_PREFIX = 'Plugin.video.CameraSource';

					public config: IPluginCameraSourceConfig;
					public event: Avs.Event.Listener;
					public api: Avs.IGenericApi;

					public adapters: IAdapters;
					public currentAdapter: string;
					public datachannels: IDatachannels;

					constructor(
						config: ICameraSourceConfig,
						event: Avs.Event.Listener,
						api: Avs.IGenericApi
					) {

						super(config, event, api);

						this.api = api;

						this.adapters = {
							webrtc: new Avs.Video.Webrtc(this.config.webrtc, this.event),
						};

						this.config.webrtc.options.localVideo       = this.adapters.webrtc.getRootElement();
						this.config.webrtc.options.eventNamesPrefix = this.config.webrtc.options.eventNamesPrefix || CameraSource.EVENT_NAME_PREFIX;

						this.datachannels = {
							webrtc: new Avs.DataChannel.Webrtc(this.config.webrtc, this.event, this.api),
						};

						this.currentAdapter = 'webrtc';

					}

					public init() {

						this.datachannels.webrtc.init();

					}

					public getVideoElement() {

						return $(this.adapters[this.currentAdapter].rootElement);

					}

					public showVideo(): void {
						this.adapters[this.currentAdapter].show();
					}

					public hideVideo(): void {
						this.adapters[this.currentAdapter].hide();
					}

					public destroy(): void {

						this.beforeDestroy();

					}


				}

				export interface ICameraSourceConfig {
					debugLevel?: number,
					pollingInterval?: number
				}

				export interface IPluginCameraSourceConfig {
					webrtc: Avs.Video.IWebrtcVideoConfig,
					debugLevel?: number,
				}

				export interface IAdapters {
					[key: string]: any
				}

				export interface IDatachannels {
					[key: string]: any
				}

			}

		}

	}

}
