export class AvsResponse {

	static successResponse(data: any = {}) {

		data.success = 1;

		return {
			content: data
		}

	}

	static errorResponse(code: number, msg: string) {

		return {
			error: {
				code: code,
				msg : msg
			}
		}

	}

}
