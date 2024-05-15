namespace Translation {

	var database: { [index: string]: string; } = {};

	export function load(translationData: { [index: string]: string; }) {
		if (!translationData) {
			return;
		}

		for (let key in translationData) {
			if (!translationData.hasOwnProperty(key)) {
				continue;
			}
			database[key] = translationData[key];
		}
	}

	export interface ITranslationOption {
		escape?: boolean
	}

	export function tr(key: string, variableList?: { [name: string]: string }, options?: ITranslationOption): string {
		if (!(key in database)) {
			return key;
		}
		let text = database[key];

		if (variableList && typeof variableList == "object") {
			let escape = options && ('escape' in options) ? options.escape : true;

			for (let variableName in variableList) {
				if (!variableList.hasOwnProperty(variableName)) {
					continue;
				}
				let currentValue = variableList[variableName];
				if (escape) {
					currentValue = StringTool.escapeHtml(currentValue);
				}

				if (variableName.match(/^[a-zA-Z]/)) {
					variableName = "#" + variableName + "#";
				}
				else {
					variableName = "" + variableName;
				}

				text = text.replace("" + variableName, currentValue);

			}
		}

		return text;
	}


	export function trNumber(key: string, value: number, variableList: { [name: string]: any } = {}, options?: ITranslationOption): string {
		var variableListFull = variableList;
		variableListFull['#NUMBER#'] = value;

		// multiple plurals forms are not yet supported
		return tr(key, variableListFull, options);
	}
}


(function() {
	let translationData = document.getElementById('translation-data');

	if (translationData) {
		let content: string = '';
		if ('textContent' in translationData) {
			if (translationData.textContent !== null) {
				content = translationData.textContent;
			}
		}
		else {
			content = jQuery(translationData).text();

			if (!content) {
				content = jQuery(translationData).html();
			}
		}

		if (content) {
			Translation.load(<any> jQuery.parseJSON(content));
		}
	}
})();

