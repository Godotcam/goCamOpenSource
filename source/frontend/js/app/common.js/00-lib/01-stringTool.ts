"use strict";


namespace StringTool {

	export function escapeHtml(str: string) {
		let entityMap: { [index: string]: string; } = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};

		return String(str).replace(/[&<>"'\/]/g, function (s) {
			return entityMap[s];
		});
	}

	/*
	export function unescapeHtml(string: string) {
		let entityMap: any = {
			"&amp;" : "&",
			"&lt;"  : "<",
			"&gt;"  : ">",
			'&quot;': '"',
			'&#39;' : "'",
			'&#x2F;': "/",
		};

		return String(string).replace(/(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&#39;)|(&\#x2F;)/g, function(s) {
			return entityMap[s];
		});
	}
	*/

	export namespace Utf8 {
		export function encodeToUtf8(buffer: string): string {
			buffer = buffer.replace(/\r\n/g, "\n");
			var bufferUtf8 = "";

			for (var n = 0; n < buffer.length; n++) {
				var c = buffer.charCodeAt(n);

				if (c < 128) {
					bufferUtf8 += String.fromCharCode(c);
				}
				else if ((c > 127) && (c < 2048)) {
					bufferUtf8 += String.fromCharCode((c >> 6) | 192);
					bufferUtf8 += String.fromCharCode((c & 63) | 128);
				}
				else {
					bufferUtf8 += String.fromCharCode((c >> 12) | 224);
					bufferUtf8 += String.fromCharCode(((c >> 6) & 63) | 128);
					bufferUtf8 += String.fromCharCode((c & 63) | 128);
				}
			}

			return bufferUtf8;
		}

		export function encodeToUtf8Bytes(buffer: string): number[] {
			if (buffer === undefined || buffer === null) {
				return [];
			}

			buffer = buffer.replace(/\r\n/g, "\n");
			let arrayOfBytes: number[] = [];

			for (let n = 0; n < buffer.length; n++) {
				let c = buffer.charCodeAt(n);

				if (c >= 0xD800 && c <= 0xDBFF) {
					let lowerSurrogate = buffer.charCodeAt(n + 1);

					if (lowerSurrogate >= 0xDC00 && lowerSurrogate <= 0xDFFF) {
						c = ((c & 0x03FF) << 10) + (lowerSurrogate & 0x03FF) + 0x10000;
						n++;
					}
				}

				if (c < 0x80) {
					arrayOfBytes.push(c);
				}
				else if (c < 0x800) {
					arrayOfBytes.push((c >> 6) | 192);
					arrayOfBytes.push((c & 63) | 128);
				}
				else if (c < 0x10000) {
					arrayOfBytes.push((c >> 12) | 224);
					arrayOfBytes.push(((c >> 6) & 63) | 128);
					arrayOfBytes.push((c & 63) | 128);
				}
				else if (c < 0x200000) {
					// note: max code point is 0x10FFFF
					arrayOfBytes.push((c >> 18) | 240);
					arrayOfBytes.push(((c >> 12) & 63) | 128);
					arrayOfBytes.push(((c >> 6) & 63) | 128);
					arrayOfBytes.push((c & 63) | 128);
				}

				else if (c < 0x4000000) {
					arrayOfBytes.push((c >> 24) | 248);
					arrayOfBytes.push(((c >> 18) & 63) | 128);
					arrayOfBytes.push(((c >> 12) & 63) | 128);
					arrayOfBytes.push(((c >> 6) & 63) | 128);
					arrayOfBytes.push((c & 63) | 128);
				}
				else {
					// < 0x7fffffff
					arrayOfBytes.push((c >> 30) | 252);
					arrayOfBytes.push(((c >> 24) & 63) | 128);
					arrayOfBytes.push(((c >> 18) & 63) | 128);
					arrayOfBytes.push(((c >> 12) & 63) | 128);
					arrayOfBytes.push(((c >> 6) & 63) | 128);
					arrayOfBytes.push((c & 63) | 128);
				}
			}

			return arrayOfBytes;
		}

		export function decodeFromUtf8Bytes(byteList: number[]): string {
			let buffer = "";
			let i = 0;
			let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
			let numberToChar;

			if ('fromCodePoint' in String) {
				// ES6 supporté
				numberToChar = (<any>String).fromCodePoint;
			}
			else {
				numberToChar = (<any>String).fromCharCode;
			}

			while (i < byteList.length) {
				c1 = byteList[i++];

				// 0x3F = 63 = 00111111
				if (c1 < 0x80) {
					// one byte only
					buffer += String.fromCharCode(c1);
				}
				else if ((c1 & 0xE0) === 0xC0) {
					// two bytes, (c > 191) && (c < 224): 110xxxxx + 10xxxxxx
					c2 = byteList[i++];
					buffer += String.fromCharCode(((c1 & 0x1F) << 6) | (c2 & 0x3F));
				}
				else if ((c1 & 0xF0) === 0xE0) {
					// three bytes, c > 223 && c < 240: 1110xxxx + 10xxxxxx + 10xxxxxx
					c2 = byteList[i++];
					c3 = byteList[i++];
					buffer += String.fromCharCode(((c1 & 0xF) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F));
				}
				else if ((c1 & 0xF8) === 0xF0) {
					// four bytes, c > 239 && c < 248: 11110xxx + 10xxxxxx + 10xxxxxx + 10xxxxxx
					c2 = byteList[i++];
					c3 = byteList[i++];
					c4 = byteList[i++];

					buffer += numberToChar(((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) | ((c3 & 0x3F) << 6) | (c4 & 0x3F));
				}
				else if ((c1 & 0xFC) === 0xF8) {
					// five bytes, c > 247 && c < 252, 111110xx + 10xxxxxx + 10xxxxxx + 10xxxxxx + 10xxxxxx
					c2 = byteList[i++];
					c3 = byteList[i++];
					c4 = byteList[i++];
					c5 = byteList[i++];

					buffer += String.fromCharCode(((c1 & 0x03) << 24) | ((c2 & 0x3F) << 18) | ((c3 & 0x3F) << 12) | ((c4 & 0x3F) << 6) | (c5 & 0x3F));
				}
				else if ((c1 & 0xFE) === 0xFC) {
					// six bytes: c > 251 && c < 254, 1111110x + 10xxxxxx + 10xxxxxx + 10xxxxxx + 10xxxxxx + 10xxxxxx
					c2 = byteList[i++];
					c3 = byteList[i++];
					c4 = byteList[i++];
					c5 = byteList[i++];
					c6 = byteList[i++];

					buffer += String.fromCharCode(((c1 & 0x01) << 30) | ((c2 & 0x3F) << 24) | ((c3 & 0x3F) << 18) | ((c4 & 0x3F) << 12) | ((c5 & 0x3F) << 6) | (c6 & 0x3F));
				}
				else {
					// error
				}

			}
			return buffer;
		}

		export function decodeFromUtf8(strUtf8: string): string {
			var buffer = "";
			var i = 0;
			var c1 = 0, c2 = 0, c3 = 0, c4 = 0;

			while (i < strUtf8.length) {
				c1 = strUtf8.charCodeAt(i);

				if (c1 < 128) {
					buffer += String.fromCharCode(c1);
					i++;
				}
				else if ((c1 & 0xE0) === 0xC0) {
					c2 = strUtf8.charCodeAt(i + 1);
					buffer += String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else if ((c1 & 0xF0) === 0xE0) {
					c2 = strUtf8.charCodeAt(i + 1);
					c3 = strUtf8.charCodeAt(i + 2);
					buffer += String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
				else {
					// four bytes, c > 239 && c < 248: 11110xxx + 10xxxxxx + 10xxxxxx + 10xxxxxx
					c2 = strUtf8.charCodeAt(i + 1);
					c3 = strUtf8.charCodeAt(i + 2);
					c4 = strUtf8.charCodeAt(i + 3);

					buffer += String.fromCharCode(((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) | ((c3 & 0x3F) << 6) | (c4 & 0x3F));
					i += 4;
				}

			}
			return buffer;
		}
	}

	export namespace Base64 {
		let keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

		function b64toUint6(charCode: number): number {
			if ((charCode & 0x60) === 0x60) {
				// a-z
				return charCode - 71;
			}
			if ((charCode & 0x40) === 0x40) {
				// A-Z
				return charCode - 65;
			}
			if (charCode === 61) {
				return 64;
			}
			if ((charCode & 0x30) === 0x30) {
				// 0-9
				return charCode + 4;
			}
			if (charCode === 43) {
				// +
				return 62;
			}
			if (charCode === 47) {
				return 63;
			}
			throw new Error("Charcode invalid: " + charCode);
		}

		export function encodeToBase64Bytes(inputRaw: number[]): string {
			// ne pas utiliser un array, cela n'optimise pas du tout les performances
			var output = "";

			// code unicode
			var chrUnicode1, chrUnicode2, chrUnicode3;

			// code en 6 bits
			var enc1, enc2, enc3, enc4;

			var i = 0;

			while (i < inputRaw.length) {
				chrUnicode1 = inputRaw[i++];
				chrUnicode2 = inputRaw[i++];
				chrUnicode3 = inputRaw[i++];

				enc1 = chrUnicode1 >> 2;

				enc2 = ((chrUnicode1 & 3) << 4) | (chrUnicode2 >> 4);

				enc3 = ((chrUnicode2 & 15) << 2) | (chrUnicode3 >> 6);

				enc4 = chrUnicode3 & 63;

				if (chrUnicode2 === undefined) {
					enc3 = enc4 = 64;
				} else if (chrUnicode3 === undefined) {
					enc4 = 64;
				}

				output = output +
				         keyString.charAt(enc1) + keyString.charAt(enc2) +
				         keyString.charAt(enc3) + keyString.charAt(enc4);

			}

			return output;
		}

		export function encodeToBase64(inputRaw: string, disableConversionUnicodeToByte?: boolean): string {
			var output = "";

			// code unicode
			var chrUnicode1, chrUnicode2, chrUnicode3;

			// code en 6 bits
			var enc1, enc2, enc3, enc4;

			if (!disableConversionUnicodeToByte) {
				inputRaw = Utf8.encodeToUtf8(inputRaw);
			}

			var i = 0;

			while (i < inputRaw.length) {

				chrUnicode1 = inputRaw.charCodeAt(i++);
				chrUnicode2 = inputRaw.charCodeAt(i++);
				chrUnicode3 = inputRaw.charCodeAt(i++);

				enc1 = chrUnicode1 >> 2;

				enc2 = ((chrUnicode1 & 3) << 4) | (chrUnicode2 >> 4);

				enc3 = ((chrUnicode2 & 15) << 2) | (chrUnicode3 >> 6);

				enc4 = chrUnicode3 & 63;

				if (isNaN(chrUnicode2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chrUnicode3)) {
					enc4 = 64;
				}

				output = output +
				         keyString.charAt(enc1) + keyString.charAt(enc2) +
				         keyString.charAt(enc3) + keyString.charAt(enc4);
			}

			return output;
		}


		export function decodeFromBase64Byte(inputB64: string): number[] {
			var output: number[] = [];

			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;

			while (i < inputB64.length) {
				enc1 = b64toUint6(inputB64.charCodeAt(i++));
				enc2 = b64toUint6(inputB64.charCodeAt(i++));
				enc3 = b64toUint6(inputB64.charCodeAt(i++));
				enc4 = b64toUint6(inputB64.charCodeAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output.push(chr1);

				if (enc3 != 64) {
					output.push(chr2);
				}
				if (enc4 != 64) {
					output.push(chr3);
				}
			}

			return output;
		}

		export function decodeFromBase64(inputB64: string, disableConversionByteToUnicode?: boolean): string {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;

			inputB64 = inputB64.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			while (i < inputB64.length) {

				enc1 = b64toUint6(inputB64.charCodeAt(i++));
				enc2 = b64toUint6(inputB64.charCodeAt(i++));
				enc3 = b64toUint6(inputB64.charCodeAt(i++));
				enc4 = b64toUint6(inputB64.charCodeAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}

			}

			if (!disableConversionByteToUnicode) {
				return Utf8.decodeFromUtf8(output);
			}

			return output;
		}


		export function encodeToBase64Raw(bufferRaw: string): string {
			if (bufferRaw === undefined || bufferRaw === null) {
				return bufferRaw;
			}
			return encodeToBase64Bytes(Utf8.encodeToUtf8Bytes(bufferRaw));
		}

		export function decodeFromBase64Raw(buffer64: string): string {
			if (buffer64 === undefined || buffer64 === null) {
				return buffer64;
			}

			return Utf8.decodeFromUtf8Bytes(decodeFromBase64Byte(buffer64));
		}

	}

}
