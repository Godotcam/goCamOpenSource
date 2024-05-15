
(function() {
	let appData = document.getElementById('app-data');

	if (appData) {
		let content: string = '';
		if ('textContent' in appData) {
			if (appData.textContent !== null) {
				content = appData.textContent;
			}
		}
		else {
			content = jQuery(appData).text();

			if (!content) {
				content = jQuery(appData).html();
			}
		}

		if (content) {
			window.Application = jQuery.parseJSON(content);

			jQuery(document).ready(function() {

				if ('onDocumentReady' in Application) {
					let fonctionStr = Application['onDocumentReady'];

					let tokenList = fonctionStr.split(/\./);

					let currentObj: any = window;
					let currentToken;

					while (currentToken = tokenList.shift()) {
						if (currentToken in currentObj) {
							currentObj = currentObj[currentToken];
						}
						else {
							currentObj = null;
							break;
						}
					}

					if (typeof currentObj === "function") {
						window.setTimeout(function() {
							currentObj();
						}, 1);
					}

				}

			});

		}
	}
})();

