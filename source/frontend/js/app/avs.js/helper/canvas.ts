namespace Avs {

	export namespace Helper {

		export class Canvas {

			public static canvasToImage(canvasElement: HTMLCanvasElement) {

				let dataURL      = canvasElement.toDataURL();
				let imageElement = document.createElement('img');
				imageElement.setAttribute('src', dataURL);

				return imageElement;

			}

			public static grayscaleCanvas(canvas: HTMLCanvasElement) {

				let canvasContext = canvas.getContext('2d');
				let imgData       = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
				let pixels        = imgData.data;

				for (var i = 0; i < pixels.length; i += 4) {
					let lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
					pixels[i]     = lightness;
					pixels[i + 1] = lightness;
					pixels[i + 2] = lightness;
				}

				canvasContext.putImageData(imgData, 0, 0);

			}

			public static contrastCanvas(canvas: HTMLCanvasElement, contrast: number) {

				let canvasContext = canvas.getContext('2d');
				let imgData       = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
				let pixels        = imgData.data;

				contrast      = (contrast / 100) + 1;
				var intercept = 128 * (1 - contrast);
				for (var i = 0; i < pixels.length; i += 4) {
					pixels[i]     = pixels[i] * contrast + intercept;
					pixels[i + 1] = pixels[i + 1] * contrast + intercept;
					pixels[i + 2] = pixels[i + 2] * contrast + intercept;
				}

				canvasContext.putImageData(imgData, 0, 0);

			}

			public static brightnessCanvas(canvas: HTMLCanvasElement, brightness: number) {

				let canvasContext = canvas.getContext('2d');
				let imgData       = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
				let pixels        = imgData.data;

				for (var i = 0; i < pixels.length; i += 4) {
					var red   = pixels[i];
					var green = pixels[i + 1];
					var blue  = pixels[i + 2];

					let brightenedRed   = (brightness + 100) / 100 * red;
					let brightenedGreen = (brightness + 100) / 100 * green;
					let brightenedBlue  = (brightness + 100) / 100 * blue;

					pixels[i]     = brightenedRed;
					pixels[i + 1] = brightenedGreen;
					pixels[i + 2] = brightenedBlue;
				}

				canvasContext.putImageData(imgData, 0, 0);

			}

			public static thresholdCanvas(canvas: HTMLCanvasElement, threshold: number) {

				let canvasContext = canvas.getContext('2d');
				let imgData       = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
				let pixels        = imgData.data;

				for (var i = 0; i < pixels.length; i += 4) {
					var r     = pixels[i];
					var g     = pixels[i + 1];
					var b     = pixels[i + 2];
					var v     = (0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold) ? 255 : 0;
					pixels[i] = pixels[i + 1] = pixels[i + 2] = v
				}

				canvasContext.putImageData(imgData, 0, 0);

			}

			public static fileToCanvas(file: Blob, canvas: HTMLCanvasElement) {

				let reader = new FileReader();

				reader.readAsDataURL(file);

				reader.onloadend = (readerLoadEvent: ProgressEvent) => {

					let image = new Image();
					image.src = (<any>readerLoadEvent.target).result;

					image.onload = (onloadEvent: Event) => {
						canvas.width  = image.width;
						canvas.height = image.height;
						var ctx       = canvas.getContext('2d');
						ctx.drawImage(image, 0, 0);
					}

				}

			}

		}

	}

}
