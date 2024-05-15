namespace Avs {

	export namespace Video {

		/**
		 * Handles webrtc html video element
		 *
		 */
		export class Webrtc extends Avs.Video.Handler {

			public config: IWebrtcVideoConfig;
			public debug: Avs.Debug.Log;
			public event: Avs.Event.Listener;

			public rootElement: HTMLVideoElement;
			public rootContainer: HTMLDivElement;
			public imageElement: HTMLImageElement = null;
			public videoIsVisible: boolean;

			constructor(
				config: IWebrtcVideoConfig,
				event: Avs.Event.Listener
			) {

				super(config, event);

				if (typeof this.config.options.muted == 'undefined') {
					this.config.options.muted = true;
				}

				this.debug.info('Webrtc video created.');

				this.create();

			}

			public create(): void {

				let rootElement = document.createElement('video');
				rootElement.setAttribute('id', this.config.rootElement.replace('#', ''));
				rootElement.setAttribute('autoplay', 'true');
				rootElement.setAttribute('playsinline', '');

				if (this.config.options.muted) {
					rootElement.setAttribute('muted', 'muted');
					rootElement.muted = true;
				}

				//rootElement.setAttribute('controls', 'true');

				if (typeof this.config.className !== 'undefined') {
					rootElement.setAttribute('class', this.config.className);
				}

				document.querySelector(this.config.rootContainer).appendChild(rootElement);

				this.rootElement   = document.querySelector(this.config.rootElement);
				this.rootContainer = document.querySelector(this.config.rootContainer);

				this.hide();

			}

			public destroy(): void {

				this.rootElement.parentNode.removeChild(this.rootElement);

			}

		}

		export interface IWebrtcVideoConfigOptions {
			localVideo?: any,
			remoteVideo?: any,
			eventNamesPrefix?: string,
			muted?: boolean
		}

		export interface IWebrtcVideoConfig {
			rootContainer: string,
			rootElement: string,
			className?: string,
			options: IWebrtcVideoConfigOptions,
			debugLevel?: number
		}

	}
}
