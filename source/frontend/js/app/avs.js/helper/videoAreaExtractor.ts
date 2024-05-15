namespace Avs {

	export namespace Helper {

		export class VideoAreaExtractor {

			public static calculateMaskPosition(maskElement: HTMLElement, videoElement: HTMLElement): IVideoMaskPosition {

				let maskElementInstance  = $(maskElement);
				let videoElementInstance = $(videoElement);

				let maskElementWidth    = maskElementInstance.width();
				let maskElementHeight   = maskElementInstance.height();
				let maskElementPosition = maskElementInstance.position();
				let maskElementBorder   = parseInt(maskElementInstance.css('border-left-width'));

				let videoElementWidth  = videoElementInstance.width();
				let videoElementHeight = videoElementInstance.height();

				let mediaWidth  = (<HTMLVideoElement>videoElementInstance.get(0)).videoWidth;
				let mediaHeight = (<HTMLVideoElement>videoElementInstance.get(0)).videoHeight;

				let onScreenAspectRatio = videoElementWidth / videoElementHeight;
				let mediaAspectRatio    = mediaWidth / mediaHeight;

				let scalePercent    = 0;
				let maskElementTop  = 0;
				let maskElementLeft = 0;

				if (onScreenAspectRatio > mediaAspectRatio) {

					scalePercent = (videoElementWidth * 100 / mediaWidth);

					maskElementTop  = ((mediaHeight - (videoElementHeight * 100 / scalePercent)) / 2) + maskElementPosition.top * 100 / scalePercent;
					maskElementLeft = maskElementPosition.left * 100 / scalePercent;
					maskElementTop  = maskElementTop + maskElementBorder;
					maskElementLeft = maskElementLeft + maskElementBorder;

				}
				else {

					scalePercent = (videoElementHeight * 100 / mediaHeight);

					maskElementTop  = maskElementPosition.top * 100 / scalePercent;
					maskElementLeft = ((mediaWidth - (videoElementWidth * 100 / scalePercent)) / 2) + (maskElementPosition.left * 100 / scalePercent);
					maskElementTop  = maskElementTop + maskElementBorder;
					maskElementLeft = maskElementLeft + maskElementBorder;

				}

				return {
					top         : maskElementTop,
					left        : maskElementLeft,
					width       : maskElementWidth * 100 / scalePercent,
					height      : maskElementHeight * 100 / scalePercent,
					scalePercent: scalePercent
				};

			}

			public static videoMaskToCanvas(videoElement: HTMLElement, canvasElement: HTMLElement, maskPosition: IVideoMaskPosition, canvasZoom?: number) {

				let canvasZoomValue = canvasZoom || 1;

				let videoElementInstance                                 = $(videoElement);
				let canvasElementInstance                                = $(canvasElement);
				(<HTMLCanvasElement>canvasElementInstance.get(0)).width  = maskPosition.width * canvasZoomValue;
				(<HTMLCanvasElement>canvasElementInstance.get(0)).height = maskPosition.height * canvasZoomValue;

				let contextCanvasBirthDate = (<HTMLCanvasElement>canvasElementInstance.get(0)).getContext('2d');
				(<CanvasRenderingContext2D>contextCanvasBirthDate).drawImage(
					(<HTMLVideoElement>videoElementInstance.get(0)),
					maskPosition.left,
					maskPosition.top,
					maskPosition.width,
					maskPosition.height,
					0,
					0,
					maskPosition.width * canvasZoomValue,
					maskPosition.height * canvasZoomValue
				);

				return <HTMLCanvasElement>canvasElementInstance.get(0);

			}

		}

		export interface IVideoMaskPosition {
			top: number,
			left: number,
			width: number,
			height: number,
			scalePercent: number
		}

	}

}
