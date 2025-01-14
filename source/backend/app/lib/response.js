"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvsResponse = void 0;
class AvsResponse {
    static successResponse(data = {}) {
        data.success = 1;
        return {
            content: data
        };
    }
    static errorResponse(code, msg) {
        return {
            error: {
                code: code,
                msg: msg
            }
        };
    }
}
exports.AvsResponse = AvsResponse;
