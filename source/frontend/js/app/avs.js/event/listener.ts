namespace Avs {

	export namespace Event {

		/**
		 * Custom event library used for internal communication
		 *
		 */
		export class Listener {

			static EVENT_BEFORE = 1;
			static EVENT_AFTER  = 2;

			public fireListener: Listener | null;

			public eventListBefore: { [index: string]: Array<any>; };
			public eventListAfter: { [index: string]: Array<any>; };
			public eventList: { [index: string]: Array<any>; };
			public eventListened: { [key: string]: any };

			private logIdStr: string;

			private config: Avs.Event.IEventsConfig;
			public debug: Avs.Debug.Log;

			constructor(config?: Avs.Event.IEventsConfig) {

				this.config = config;
				this.debug  = new Avs.Debug.Log(this.config.debugLevel || 0);

				this.eventListBefore = {};
				this.eventListAfter  = {};
				this.eventList       = {};
				this.eventListened   = {};

				this.logIdStr = '';
			}

			public logEvent(eventName: string, msg: string) {
				this.debug.info('[event-' + eventName + '] ' + msg);
			}

			public logSetId(id: string) {
				this.logIdStr = id + ' - ';
			}

			public log(msg: string) {
				this.debug.info(this.logIdStr + msg);
			}

			public notice(msg: string) {
				this.debug.info(this.logIdStr + msg);
			}

			public warn(msg: string) {
				this.debug.warn(this.logIdStr + msg);
			}

			public error(msg: string) {
				this.debug.error(25010, this.logIdStr + msg);
			}

			public destroy() {
				this.notice('destroy (delayed)');
				window.setTimeout(this.observerClearAll.bind(this), 5000);
			}

			public observerClearAll() {
				if (this.fireListener) {
					// au cas où il y a des références circulaires
					this.fireListener.removeAllContext(this);
				}
				this.fireListener    = null;
				this.eventListBefore = {};
				this.eventListAfter  = {};
				this.eventList       = {};

				this.notice('observerClearAll');

			}

			public removeAllContext(context: any) {
				this.removeContextFromList(context, this.eventListBefore);
				this.removeContextFromList(context, this.eventList);
				this.removeContextFromList(context, this.eventListAfter);

				// todo: à voir si il faut mettre à jour this.eventListened aussi
			}

			private removeContextFromList(context: any, eventList: { [index: string]: Array<any>; }) {
				for (var event in eventList) {
					var indice = eventList[event].length;
					while (indice--) {
						var eventData = eventList[event][indice];

						if (eventData[1] === context) {
							this.eventList[event].splice(indice, 1);
						}
					}
				}
			}

			// alias for fire event
			public emit(eventName: string, params?: any) {
				this.fire(eventName, params);
			}

			public fire(eventName: string, params?: any): any {
				if (this.fireListener) {
					// redirection simple
					if (arguments.length > 1) {
						var argList = Array.prototype.slice.call(arguments, 0);
						return this.fireListener.fire.apply(this.fireListener, <any>argList);

					}
					else {
						return this.fireListener.fire(eventName);
					}
				}

				var isInNormal = eventName in this.eventList;
				var isInBefore = eventName in this.eventListBefore;
				var isInAfter  = eventName in this.eventListAfter;

				if (!isInNormal && !isInBefore && !isInAfter) {
					this.logEvent(eventName, 'fire: no handler found');
					return;
				}
				this.logEvent(eventName, 'fire');

				var argListCtx = Array.prototype.slice.call(arguments, 1);
				argListCtx.unshift(this);

				if (isInBefore && this.forward(this.eventListBefore[eventName], argListCtx)) {
					this.logEvent(eventName, 'onBefore: exit request');
					return;
				}
				if (isInNormal && this.forward(this.eventList[eventName], argListCtx)) {
					this.logEvent(eventName, 'exit request');
					return;
				}
				if (isInAfter && this.forward(this.eventListAfter[eventName], argListCtx)) {
					this.logEvent(eventName, 'onAfter: exit request');
					return;
				}
			}

			private forward(observateurList: Array<any>, argList: any) {
				var i: number = observateurList.length;
				var r: boolean;
				while (i--) {
					var delay: number = 0;
					var fnctInfo      = observateurList[i];

					if (fnctInfo[2]) {
						if ('delay' in fnctInfo[2]) {
							delay = fnctInfo[2]['delay'];
						}
						if ('once' in fnctInfo[2]) {
							observateurList.splice(i, 1);
						}
					}

					if (fnctInfo[1]) {
						if (delay) {
							window.setTimeout(function () {
								// todo: closure correcte pour la boucle avec une fonction qui retourne une function
							}, delay);

						}
						else {
							r = fnctInfo[0].apply(fnctInfo[1], argList);
						}
					}
					else {
						if (delay) {
							window.setTimeout(function () {
								// todo: closure correcte pour la boucle avec une fonction qui retourne une function
							}, delay);

						}
						else {
							r = fnctInfo[0].apply(this, argList);
						}

					}
					if (r) {
						return r;
					}
				}
				return false;
			}

			public registerEventName(eventName: string, fnct: any, context: any, options?: IListenerOption, position?: number) {

				var eventData = [fnct, context, options];

				switch (position) {
					case Listener.EVENT_BEFORE:
						if (!(eventName in this.eventListBefore)) {
							this.eventListBefore[eventName] = [];
						}
						this.eventListBefore[eventName].push(eventData);
						break;

					case Listener.EVENT_AFTER:
						if (!(eventName in this.eventListAfter)) {
							this.eventListAfter[eventName] = [];
						}
						this.eventListAfter[eventName].push(eventData);
						break;

					default:
						if (!(eventName in this.eventList)) {
							this.eventList[eventName] = [];
						}
						this.eventList[eventName].push(eventData);
				}

				this.eventListened[eventName] = true;
			}

			public on(eventName: string, fnct: any, ctx?: any, options?: IListenerOption) {
				this.registerEventName(eventName, fnct, ctx, options, 0);
			}

			public onBefore(eventName: string, fnct: any, ctx: any, options?: IListenerOption) {
				this.registerEventName(eventName, fnct, ctx, options, Listener.EVENT_BEFORE);
			}

			public onAfter(eventName: string, fnct: any, ctx: any, options?: IListenerOption) {
				this.registerEventName(eventName, fnct, ctx, options, Listener.EVENT_AFTER);
			}

		}

		export interface IListenerOption {
			delay?: number;
			once?: boolean;
		}

		export interface IEventsConfig {
			debugLevel?: number
		}

	}

}
