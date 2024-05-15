namespace Avs {

	export namespace Ui {

		export namespace Handler {

			export class Text extends Common {

				public element: JQuery;
				public states: any;
				public event: Avs.Event.Listener;

				constructor(event: Avs.Event.Listener) {

					super(event);

					this.event = event;

				}

				public toggleVisibility(displayAsBlock?: boolean) {

					if (this.states.visible) {
						return this.hide();
					}

					return this.show(displayAsBlock);

				}

				public clearContents() {

					this.element.html('');
					this.states.value = '';

				}

				public setContent(content: string) {

					this.element.html(content);
					this.states.value = content;

				}

				public setImage(imagePath: string) {

					let content = '<img src="' + imagePath + '"/>'
					this.element.html(content);
					this.states.content = content;

				}

				public addContent(content: string) {

					this.element.append(content);
					this.states.value += content;

				}

			}

		}

	}

}
