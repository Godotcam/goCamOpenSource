namespace Avs {

	export interface IGenericApi {
		apiDataChannel: Avs.DataChannel.Http,
		modelManagerApiDataChannel: Avs.DataChannel.Http,
		startPolling: Function,
		stopPolling: Function
	}

	export interface IGenericObject {
		[key: string]: any
	}

}
