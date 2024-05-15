namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class QrCode extends Common {

				static readonly QR_CODE_SIZE = 10;

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;
				public debug: Avs.Debug.Log;
				public qrCodeInstance: any;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;
					this.debug = new Avs.Debug.Log(Debug.Log.LOG_LEVEL_ERROR);

					if (typeof (<any>window).qr === 'undefined') {
						this.debug.error(25065, 'Required qr code library not loaded.');
						throw new Error('Required qr code library not loaded.');
					}

					this.qrCodeInstance = (<any>window).qr;

				}

				public renderString(qrCodeString: string, size?: number) {

					let qrCodeSize  = size || QrCode.QR_CODE_SIZE;
					let qrCodeImage = this.qrCodeInstance.image({
						size : qrCodeSize,
						value: qrCodeString
					});

					this.element.html(qrCodeImage);

				}

				public renderTestToOtherDeviceQr() {

					this.renderString(window.location.href.replace('/iframeRender', ''));

				}

				public toggleVisibility() {

					if (this.states.visible) {
						return this.hide();
					}

					return this.show();

				}

			}

		}

	}

}
