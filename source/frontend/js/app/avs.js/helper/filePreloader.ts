namespace Avs {

	export namespace Helper {

		export class FilePreloader {

			static readonly ON_PRELOAD_EVENT = 'Avs.Helper.FilePreloader.onPreloadEvent';

			static readonly FILE_STATUS_PRELOADING = 1;
			static readonly FILE_STATUS_SUCCESS    = 2;
			static readonly FILE_STATUS_ERROR      = 3;

			public fileList: Array<string>;
			public fileListInfo: IFileListInfo;

			public event: Avs.Event.Listener;
			public instanceIndex: string;

			public constructor(fileList: Array<string>, event: Avs.Event.Listener, instanceIndex: string) {

				this.fileList     = fileList;
				this.fileListInfo = {
					total: {
						progress: 0,
						status  : FilePreloader.FILE_STATUS_PRELOADING,
						error   : {
							code: 0,
							msg : ''
						}
					}
				};

				this.event         = event;
				this.instanceIndex = instanceIndex;

			}

			public startPreloading() {

				for (let i = 0, j = this.fileList.length; i < j; i++) {

					this.preloadFile(this.fileList[i]);
					this.fileListInfo[this.fileList[i]] = {
						progress: 0,
						status  : FilePreloader.FILE_STATUS_PRELOADING,
						error   : {
							code: 0,
							msg : ''
						}
					};

				}

			}

			public preloadFile(fileUrl: string) {

				$.ajax({
					type       : 'get',
					dataType   : 'text',
					url        : fileUrl,
					async      : true,
					processData: false,
					success    : (data) => {

						let parsedData: any;
						try {
							parsedData = JSON.parse(data);
						}
						catch (e) {
						}

						if (typeof parsedData !== 'undefined' && typeof parsedData.error !== 'undefined') {
							this.fileListInfo[fileUrl].status = FilePreloader.FILE_STATUS_ERROR;
							this.fileListInfo[fileUrl].error  = parsedData.error;
						}
						else {
							this.fileListInfo[fileUrl].progress = 100;
							this.fileListInfo[fileUrl].status   = FilePreloader.FILE_STATUS_SUCCESS;
						}

						this.triggerChange();

					},
					error      : (error: JQueryXHR, textStatus: string, errorThrown: string) => {

						this.fileListInfo[fileUrl].status = FilePreloader.FILE_STATUS_ERROR;
						this.fileListInfo[fileUrl].error  = {
							code: 25010,
							msg: 'status: ' + textStatus + ' error: ' + errorThrown
						};

						this.triggerChange();

					},
					xhr        : () => {

						var xhr        = $.ajaxSettings.xhr();
						xhr.onprogress = (e: ProgressEvent) => {

							this.fileListInfo[fileUrl].progress = e.loaded / e.total * 100;
							this.triggerChange();

						};

						return xhr;

					}
				});

			}

			public triggerChange() {

				let fileListPreloadComplete  = true;
				let fileListTotalErrorNumber = 0;
				let fileListProgressTotal    = 0;
				let fileListPreloadStatus    = FilePreloader.FILE_STATUS_PRELOADING;

				for (let i in this.fileListInfo) {

					if (i === 'total') {
						continue;
					}

					fileListProgressTotal += this.fileListInfo[i].progress;
					if (this.fileListInfo[i].status === FilePreloader.FILE_STATUS_PRELOADING) {
						fileListPreloadComplete = false;
					}

					if (this.fileListInfo[i].status === FilePreloader.FILE_STATUS_ERROR) {
						this.fileListInfo.total.error = this.fileListInfo[i].error;
						fileListTotalErrorNumber++;
					}

				}

				fileListProgressTotal = fileListProgressTotal / this.fileList.length;
				fileListProgressTotal = parseInt(<any>fileListProgressTotal);

				if (fileListPreloadComplete) {
					fileListPreloadStatus = fileListTotalErrorNumber == 0 ? FilePreloader.FILE_STATUS_SUCCESS : FilePreloader.FILE_STATUS_ERROR;
				}

				this.fileListInfo.total.progress = fileListProgressTotal;
				this.fileListInfo.total.status   = fileListPreloadStatus;

				this.event.emit(FilePreloader.ON_PRELOAD_EVENT + '.' + this.instanceIndex, this.fileListInfo);

			}

		}

		export interface IFileListInfo {
			[key: string]: {
				progress: number,
				status: number,
				error: {
					code: number,
					msg: string
				}
			},

			total: {
				progress: number,
				status: number,
				error: {
					code: number,
					msg: string
				}
			}
		}

	}

}
