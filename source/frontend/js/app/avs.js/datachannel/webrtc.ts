namespace Avs {

	export namespace DataChannel {

		export class Webrtc {

			static readonly DEFAULT_RESOLUTION_WIDTH_MIN  = 1280;
			static readonly DEFAULT_RESOLUTION_HEIGHT_MIN = 720;

			static readonly RESOLUTION_DOWNGRADE_STEP_1_WIDTH  = 800;
			static readonly RESOLUTION_DOWNGRADE_STEP_1_HEIGHT = 600;

			static readonly RESOLUTION_DOWNGRADE_STEP_2_WIDTH  = 640;
			static readonly RESOLUTION_DOWNGRADE_STEP_2_HEIGHT = 480;

			static readonly ON_VIDEO_PLAY = 'Avs.Datachannel.WebRtc.onVideoPlay';

			static readonly ON_WEBCAM_INIT_ERROR = 'Avs.Datachannel.WebRtc.onStreamingError';

			static readonly ON_VIDEO_PLAY_DELAY_MS = 1000;

			private config: IWebrtcDataConfig;
			private debug: Avs.Debug.Log;
			public event: Avs.Event.Listener;
			public api: Avs.IGenericApi;

			public streamInstance: any;

			public eventNamesPrefix: string;

			public videoElement: HTMLVideoElement;

			public resolutionFallbackList: Array<{
				width: number,
				height: number
			}>;

			public currentFallbackStep: number;

			public options: any;

			constructor(
				config: any,
				event: Avs.Event.Listener,
				api: Avs.IGenericApi
			) {

				this.config = config;
				this.debug  = new Avs.Debug.Log(this.config.debugLevel || Debug.Log.LOG_LEVEL_ERROR);
				this.debug.info('Webrtc datachannel created.');

				this.options = this.config.options;

				this.event        = event;
				this.api          = api;
				this.videoElement = config.options.localVideo;

				this.currentFallbackStep    = 0;
				this.resolutionFallbackList = [
					{
						width : Webrtc.DEFAULT_RESOLUTION_WIDTH_MIN,
						height: Webrtc.DEFAULT_RESOLUTION_HEIGHT_MIN
					},
					{
						width : Webrtc.RESOLUTION_DOWNGRADE_STEP_1_WIDTH,
						height: Webrtc.RESOLUTION_DOWNGRADE_STEP_1_HEIGHT
					},
					{
						width : Webrtc.RESOLUTION_DOWNGRADE_STEP_2_WIDTH,
						height: Webrtc.RESOLUTION_DOWNGRADE_STEP_2_HEIGHT
					}

				];

				this.eventNamesPrefix = this.config.options.eventNamesPrefix
					? this.config.options.eventNamesPrefix + '.'
					: '';

			}

			public init(): void {

				this.startStreaming();

			}

			public startStreaming() {

				let streamVideoInputDevice = this.config.options.streamVideoInputDevice;
				let facingMode             = this.config.options.facingMode;

				this.debug.info('Trying to start the stream using resolution: ' + JSON.stringify(this.resolutionFallbackList[this.currentFallbackStep]))

				let videoConstraints: any = {
					width : {exact: this.resolutionFallbackList[this.currentFallbackStep].width},
					height: {exact: this.resolutionFallbackList[this.currentFallbackStep].height},
				};

				if (streamVideoInputDevice !== null) {
					videoConstraints.deviceId = {exact: streamVideoInputDevice};
				}

				if (facingMode !== null) {
					delete videoConstraints.deviceId;
					videoConstraints.facingMode = {exact: facingMode};
				}

				navigator.mediaDevices.getUserMedia({
					video: videoConstraints,
				}).then(
					(stream: any) => {

						this.streamInstance = stream;

						(<HTMLVideoElement>this.videoElement).srcObject = stream;

						this.videoElement.onplay = () => {

							setTimeout(() => {
								this.event.emit(this.eventNamesPrefix + Webrtc.ON_VIDEO_PLAY);
							}, Webrtc.ON_VIDEO_PLAY_DELAY_MS);

						};

					},
					(error: Error) => {

						if (this.currentFallbackStep < this.resolutionFallbackList.length - 1) {
							this.currentFallbackStep++;
							this.startStreaming();
						}
						else {
							this.debug.error(25003, 'Webcam initialization error', error);
							this.event.emit(this.eventNamesPrefix + Webrtc.ON_WEBCAM_INIT_ERROR, {
								code: 25003,
								msg : 'Webcam initialization error'
							});
						}

					}
				);

			}

			public stopStreaming() {

				this.streamInstance.getTracks().forEach(function (track: MediaStreamTrack) {
					track.stop();
				});

			}

		}

		export interface IWebrtcDataConfig {
			options: iWebrtcOptions,
			iceConfig?: any,
			debugLevel?: number
		}

		export interface iWebrtcOptions {
			localVideo?: any,
			remoteVideo?: any,
			videoStream?: any,
			audioStreams?: any,
			mediaConstraints?: any,
			connectionConstraints?: any,
			peerConnection?: any,
			sendSource?: any,
			onstreamended?: any,
			onicecandidate?: any,
			oncandidategatheringdone?: any,
			dataChannels?: any,
			dataChannelConfig?: any,
			simulcast?: boolean,
			configuration?: any,
			facingMode?: any

			// custom options
			eventNamesPrefix?: string,
			streamResolution?: IStreamResolution,
			streamVideoInputDevice?: string,
			streamAudioInputDevice?: string,
			uaInfo?: IUaInfoOptions
		}

		export interface IStreamResolution {
			width: number,
			height: number,
			frameRate?: number,
			aspectRatio?: number
		}

		export interface IUaInfoOptions {
			'os.name'?: string,
			'os.version'?: string,
			'os.versionMajor'?: number,
			'os.mobile'?: number,
			'os.arch'?: string | null,
			'browser.name'?: string,
			'browser.version'?: string,
			'browser.versionMajor'?: number,
			'browser.engine.name'?: string,
			'browser.engine.version'?: string,
			'crawler'?: number,
			'mobile.os.version': string | null,
			'mobile.device.name': string
		}

	}

}
