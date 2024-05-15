namespace Avs {

	export namespace Helper {

		export namespace StringTool {

			export function escapeHtml(string: any) {
				var entityMap = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': '&quot;',
					"'": '&#39;',
					"/": '&#x2F;'
				};

				return String(string).replace(/[&<>"'\/]/g, function(s: string) {
					return (<any>entityMap)[s];
				});
			}

		}

	}

}
