namespace Avs {

	export namespace Helper {

		export class ElementPositionCalculator {

			public static getScreenPositionFromConfig(elementConfig: IContainerConfig) {

				let bodyElement = $(window);

				let screenWidth  = bodyElement.width();
				let screenHeight = bodyElement.height();

				if (screenWidth - elementConfig.boundary.left - elementConfig.boundary.right > elementConfig.maxWidth) {
					let horizontalBoundary       = (screenWidth - elementConfig.maxWidth) / 2;
					elementConfig.boundary.left  = horizontalBoundary;
					elementConfig.boundary.right = horizontalBoundary;
				}

				if (screenHeight - elementConfig.boundary.top - elementConfig.boundary.bottom > elementConfig.maxHeight) {
					let verticalBoundary          = (screenHeight - elementConfig.maxHeight) / 2;
					elementConfig.boundary.bottom = verticalBoundary + verticalBoundary - elementConfig.boundary.top;
				}

				let maxWidth  = screenWidth - elementConfig.boundary.left - elementConfig.boundary.right;
				let maxHeight = screenHeight - elementConfig.boundary.top - elementConfig.boundary.bottom;

				let maxAspectRatio = maxWidth / maxHeight;
				let aspectRatio    = elementConfig.width / elementConfig.height;

				let finalWidth  = elementConfig.width;
				let finalHeight = elementConfig.height;
				let finalTop    = elementConfig.boundary.top;
				let finalBottom = elementConfig.boundary.bottom;
				let finalLeft   = elementConfig.boundary.left;
				let finalRight  = elementConfig.boundary.right;
				let scaleRatio  = 1;

				// maxWidth ratio greater than elementWidth ratio
				if (maxAspectRatio > aspectRatio) {

					scaleRatio = maxHeight / elementConfig.height;

					finalHeight = maxHeight;
					finalWidth  = elementConfig.width * scaleRatio;

					let widthDiff = (maxWidth - finalWidth) / 2;
					finalLeft += widthDiff;
					finalRight += widthDiff;

				}
				else {

					scaleRatio = maxWidth / elementConfig.width;

					finalWidth  = maxWidth;
					finalHeight = elementConfig.height * scaleRatio;

					let heightDiff = (maxHeight - finalHeight) / 2;

					// uncomment if you want vertical centering of the container
					// finalTop += heightDiff;
					// finalBottom += heightDiff;

					finalBottom += heightDiff * 2;

				}

				return {
					screenWidth : screenWidth,
					screenHeight: screenHeight,
					width       : finalWidth,
					height      : finalHeight,
					top         : finalTop,
					bottom      : finalBottom,
					left        : finalLeft,
					right       : finalRight,
					scaleRatio  : scaleRatio
				};

			}

			public static getScreenPositionRelativeToContainer(containerConfig: IContainerConfig, elementConfig: IRelativeContainerConfig) {

				let containerScreenPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionFromConfig(containerConfig);

				let screenWidth  = containerScreenPosition.screenWidth;
				let screenHeight = containerScreenPosition.screenHeight;

				let finalWidth  = elementConfig.width * containerScreenPosition.scaleRatio;
				let finalHeight = elementConfig.height * containerScreenPosition.scaleRatio;
				let finalTop    = containerScreenPosition.top + (elementConfig.top * containerScreenPosition.scaleRatio);
				let finalBottom = screenHeight - finalHeight - finalTop;
				let finalLeft   = containerScreenPosition.left + (elementConfig.left * containerScreenPosition.scaleRatio);
				let finalRight  = screenWidth - finalWidth - finalLeft;
				let scaleRatio  = containerScreenPosition.scaleRatio;

				return {
					screenWidth : screenWidth,
					screenHeight: screenHeight,
					width       : finalWidth,
					height      : finalHeight,
					top         : finalTop,
					bottom      : finalBottom,
					left        : finalLeft,
					right       : finalRight,
					scaleRatio  : scaleRatio
				};

			}

			public static calculateBirthDateMaskPosition(faceCoordinates: Avs.Plugin.Library.Ml.IFaceCoordinates, idSizeConfig: Avs.Entity.IIdSizeItem) {

				let faceDimensionRatio = faceCoordinates.width / idSizeConfig.faceArea.width;
				// allow up to 20% random position
				if (Math.random() > 0.5) {
					faceDimensionRatio += faceDimensionRatio * Math.random() / 5;
				}
				else {
					faceDimensionRatio -= faceDimensionRatio * Math.random() / 5;
				}

				return {
					top         : faceCoordinates.top + (idSizeConfig.faceArea.birthDateAreaDistance.top * faceDimensionRatio),
					left        : faceCoordinates.left + (idSizeConfig.faceArea.birthDateAreaDistance.left * faceDimensionRatio),
					width       : idSizeConfig.birthDateArea.width * faceDimensionRatio,
					height      : idSizeConfig.birthDateArea.height * faceDimensionRatio,
					scalePercent: faceDimensionRatio
				};

			}

			public static applyPositioning(element: any, positioning: any) {


				$(element).css({
					//position: 'fixed',
					//border  : 'solid',
					width   : positioning.width,
					height  : positioning.height,
					top     : positioning.top,
					left    : positioning.left,
				});

			}

		}

		export interface IContainerConfig {
			width: number,
			height: number,
			maxWidth: number,
			maxHeight: number,
			boundary: {
				top: number,
				bottom: number,
				left: number,
				right: number
			}
		}

		export interface IRelativeContainerConfig {
			width: number,
			height: number,
			top: number,
			left: number
		}

	}

}
