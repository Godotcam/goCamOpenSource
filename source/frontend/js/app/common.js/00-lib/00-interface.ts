

interface IAppAjaxResponseError {
	code: number;
	msg: string;
	extra?: any;
}


interface IAppAjaxResponse {
	error?: IAppAjaxResponseError;
	content?: any;
}

interface IAppConfig {
	url: {
		root: string;
		static1: string;
		static2: string;
	};
}


declare namespace Application {
	export let Config: IAppConfig;

	export let onDocumentReady: string;
}

interface JQueryPromise<T> { jqXHR: JQueryXHR; }


