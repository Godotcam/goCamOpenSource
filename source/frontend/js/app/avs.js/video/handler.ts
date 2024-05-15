namespace Avs {

	export namespace Video {

		/**
		 * Base class for handling various video adapters
		 *
		 */
		export class Handler {

			public config: IVideoConfig;
			public debug: Avs.Debug.Log;
			public event: Avs.Event.Listener;

			public rootElement: HTMLVideoElement;
			public rootContainer: HTMLDivElement;
			public imageElement: HTMLImageElement = null;
			public videoIsVisible: boolean;

			constructor(
				config: IVideoConfig,
				event: Avs.Event.Listener
			) {

				this.config = config;
				this.debug  = new Avs.Debug.Log(this.config.debugLevel || Debug.Log.LOG_LEVEL_ERROR);

				this.event = event;

				this.videoIsVisible = true;

			}

			public show(): void {
				this.rootElement.style.display = 'block';
				this.videoIsVisible            = true;
			}

			public hide(): void {
				this.rootElement.style.display = 'none';
				this.videoIsVisible            = false;
			}

			public showImageReplacement(imagePath: string): void {

				if (this.imageElement == null) {

					let imageElement = document.createElement('img');
					imageElement.setAttribute('class', 'replacementImage');
					imageElement.style.display = 'none';

					this.rootContainer.appendChild(imageElement);
					this.imageElement = document.querySelector(this.config.rootContainer + ' .replacementImage');
				}

				this.hide();
				this.imageElement.setAttribute('src', imagePath);
				this.imageElement.style.display = 'block';

			}

			public hideImageReplacement(): void {

				if (this.imageElement != null) {
					this.imageElement.style.display = 'none';
					this.show();
				}

			}

			public getRootContainer(): HTMLDivElement {
				return this.rootContainer;
			}

			public getRootElement(): HTMLVideoElement {
				return this.rootElement;
			}

			public stop(): void {

			}

			public stopHideAndDestroy(): void {
				this.stop();
				this.hide();
				this.destroy();
			}

			public mute() {
				// does not work with webrtc
				this.rootElement.muted = true;
			}

			public unmute() {
				// does not work with webrtc
				this.rootElement.muted = false;
			}

			public destroy(): void {
				this.stop();
				this.rootContainer.removeChild(this.rootElement);
			}

		}

		export interface IVideoConfig {
			[key: string]: any
		}

	}
}
