"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvsStoragePayload = void 0;
const config_1 = require("../config");
class AvsStoragePayload {
    constructor() {
        this.payloadList = {};
    }
    store(payload) {
        if (this.isStored(payload)) {
            return;
        }
        this.payloadList[payload] = {
            payload: payload,
            created: this.getNow(),
        };
    }
    isStored(payload) {
        return typeof this.payloadList[payload] != 'undefined';
    }
    isExpired(payload) {
        if (!this.isStored(payload)) {
            return false;
        }
        let payloadData = this.payloadList[payload];
        let created = payloadData.created;
        let now = this.getNow();
        return created + config_1.config.storage.payloadExpirationTime > now;
    }
    getNow() {
        return +new Date();
    }
}
exports.AvsStoragePayload = AvsStoragePayload;
