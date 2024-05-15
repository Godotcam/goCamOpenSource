"use strict";
(function () {
    var appData = document.getElementById('app-data');
    if (appData) {
        var content = '';
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
            jQuery(document).ready(function () {
                if ('onDocumentReady' in Application) {
                    var fonctionStr = Application['onDocumentReady'];
                    var tokenList = fonctionStr.split(/\./);
                    var currentObj_1 = window;
                    var currentToken = void 0;
                    while (currentToken = tokenList.shift()) {
                        if (currentToken in currentObj_1) {
                            currentObj_1 = currentObj_1[currentToken];
                        }
                        else {
                            currentObj_1 = null;
                            break;
                        }
                    }
                    if (typeof currentObj_1 === "function") {
                        window.setTimeout(function () {
                            currentObj_1();
                        }, 1);
                    }
                }
            });
        }
    }
})();

"use strict";

"use strict";
var StringTool;
(function (StringTool) {
    function escapeHtml(str) {
        var entityMap = {
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
    StringTool.escapeHtml = escapeHtml;
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
    var Utf8;
    (function (Utf8) {
        function encodeToUtf8(buffer) {
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
        Utf8.encodeToUtf8 = encodeToUtf8;
        function encodeToUtf8Bytes(buffer) {
            if (buffer === undefined || buffer === null) {
                return [];
            }
            buffer = buffer.replace(/\r\n/g, "\n");
            var arrayOfBytes = [];
            for (var n = 0; n < buffer.length; n++) {
                var c = buffer.charCodeAt(n);
                if (c >= 0xD800 && c <= 0xDBFF) {
                    var lowerSurrogate = buffer.charCodeAt(n + 1);
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
        Utf8.encodeToUtf8Bytes = encodeToUtf8Bytes;
        function decodeFromUtf8Bytes(byteList) {
            var buffer = "";
            var i = 0;
            var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
            var numberToChar;
            if ('fromCodePoint' in String) {
                // ES6 supporté
                numberToChar = String.fromCodePoint;
            }
            else {
                numberToChar = String.fromCharCode;
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
        Utf8.decodeFromUtf8Bytes = decodeFromUtf8Bytes;
        function decodeFromUtf8(strUtf8) {
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
        Utf8.decodeFromUtf8 = decodeFromUtf8;
    })(Utf8 = StringTool.Utf8 || (StringTool.Utf8 = {}));
    var Base64;
    (function (Base64) {
        var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function b64toUint6(charCode) {
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
        function encodeToBase64Bytes(inputRaw) {
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
                }
                else if (chrUnicode3 === undefined) {
                    enc4 = 64;
                }
                output = output +
                    keyString.charAt(enc1) + keyString.charAt(enc2) +
                    keyString.charAt(enc3) + keyString.charAt(enc4);
            }
            return output;
        }
        Base64.encodeToBase64Bytes = encodeToBase64Bytes;
        function encodeToBase64(inputRaw, disableConversionUnicodeToByte) {
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
                }
                else if (isNaN(chrUnicode3)) {
                    enc4 = 64;
                }
                output = output +
                    keyString.charAt(enc1) + keyString.charAt(enc2) +
                    keyString.charAt(enc3) + keyString.charAt(enc4);
            }
            return output;
        }
        Base64.encodeToBase64 = encodeToBase64;
        function decodeFromBase64Byte(inputB64) {
            var output = [];
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
        Base64.decodeFromBase64Byte = decodeFromBase64Byte;
        function decodeFromBase64(inputB64, disableConversionByteToUnicode) {
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
        Base64.decodeFromBase64 = decodeFromBase64;
        function encodeToBase64Raw(bufferRaw) {
            if (bufferRaw === undefined || bufferRaw === null) {
                return bufferRaw;
            }
            return encodeToBase64Bytes(Utf8.encodeToUtf8Bytes(bufferRaw));
        }
        Base64.encodeToBase64Raw = encodeToBase64Raw;
        function decodeFromBase64Raw(buffer64) {
            if (buffer64 === undefined || buffer64 === null) {
                return buffer64;
            }
            return Utf8.decodeFromUtf8Bytes(decodeFromBase64Byte(buffer64));
        }
        Base64.decodeFromBase64Raw = decodeFromBase64Raw;
    })(Base64 = StringTool.Base64 || (StringTool.Base64 = {}));
})(StringTool || (StringTool = {}));

"use strict";
var Core;
(function (Core) {
    Core.MSG_INTERNAL_ERROR = 'Internal error';
    var Ajax;
    (function (Ajax) {
        function extractError(data) {
            if ('content' in data) {
                return {
                    code: 0,
                    msg: 'No error found'
                };
            }
            if (!data) {
                return {
                    code: 1,
                    msg: Core.MSG_INTERNAL_ERROR
                };
            }
            if (!('error' in data)) {
                return {
                    code: 2,
                    msg: Core.MSG_INTERNAL_ERROR
                };
            }
            var errorInfoIn = data.error;
            var errorInfoOut = {
                code: 3,
                msg: Core.MSG_INTERNAL_ERROR
            };
            if (errorInfoIn) {
                if ('code' in errorInfoIn) {
                    errorInfoOut.code = errorInfoIn.code;
                }
                if ('msg' in errorInfoIn) {
                    errorInfoOut.msg = errorInfoIn.msg;
                }
                if ('extra' in errorInfoIn) {
                    errorInfoOut.extra = errorInfoIn.extra;
                }
            }
            return errorInfoOut;
        }
        function post(path, content) {
            if (content === void 0) { content = null; }
            var jqXHR = $.ajax({
                type: 'post',
                dataType: 'json',
                data: content,
                url: path
            });
            var promise = jqXHR.then(function (data) {
                var promiseDeferred;
                if (!data || !('content' in data)) {
                    // application error
                    promiseDeferred = $.Deferred();
                    promiseDeferred.reject(extractError(data));
                    return promiseDeferred;
                }
                return data.content;
            }, function (xhr) {
                var contentType = xhr.getResponseHeader('content-type');
                if ((contentType === "application/json") || (contentType === "text/json")) {
                    if ('JSON' in window) {
                        var dataObj = JSON.parse(xhr.responseText);
                        if ('error' in dataObj && dataObj.error) {
                            var errorObj_1 = dataObj.error;
                            if (('code' in errorObj_1) && errorObj_1.code > 0) {
                                return errorObj_1;
                            }
                        }
                    }
                }
                var errorObj = {
                    code: 0,
                    msg: Core.MSG_INTERNAL_ERROR
                };
                if (xhr.status == 500) {
                    errorObj.code = 4;
                }
                else if (xhr.status == 200) {
                    errorObj.code = 5;
                }
                else if (xhr.statusText == "abort") {
                    errorObj.code = 7;
                }
                else if (xhr.status > 500 && xhr.status < 600) {
                    errorObj.code = 8;
                }
                else {
                    errorObj.code = 6;
                }
                return errorObj;
            });
            promise.jqXHR = jqXHR;
            return promise;
        }
        Ajax.post = post;
    })(Ajax = Core.Ajax || (Core.Ajax = {}));
    function clone(obj) {
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) {
            return obj;
        }
        // Handle Date
        if (obj instanceof Date) {
            var copyDate = new Date();
            copyDate.setTime(obj.getTime());
            return copyDate;
        }
        // Handle Array
        if (obj instanceof Array) {
            var copyList = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copyList[i] = clone(obj[i]);
            }
            return copyList;
        }
        // Handle Object
        if (obj instanceof Object) {
            var copyObj = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copyObj[attr] = clone(obj[attr]);
                }
            }
            return copyObj;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
    Core.clone = clone;
    function bootstrap() {
        if ('onDocumentReady' in Application) {
            var fonctionStr = Application['onDocumentReady'];
            var tokenList = fonctionStr.split(/\./);
            var currentObj_1 = window;
            var currentToken = void 0;
            while (currentToken = tokenList.shift()) {
                if (currentToken in currentObj_1) {
                    currentObj_1 = currentObj_1[currentToken];
                }
                else {
                    currentObj_1 = null;
                    break;
                }
            }
            if (typeof currentObj_1 === "function") {
                window.setTimeout(function () {
                    currentObj_1();
                }, 1);
            }
        }
    }
    Core.bootstrap = bootstrap;
})(Core || (Core = {}));

"use strict";
var Translation;
(function (Translation) {
    var database = {};
    function load(translationData) {
        if (!translationData) {
            return;
        }
        for (var key in translationData) {
            if (!translationData.hasOwnProperty(key)) {
                continue;
            }
            database[key] = translationData[key];
        }
    }
    Translation.load = load;
    function tr(key, variableList, options) {
        if (!(key in database)) {
            return key;
        }
        var text = database[key];
        if (variableList && typeof variableList == "object") {
            var escape_1 = options && ('escape' in options) ? options.escape : true;
            for (var variableName in variableList) {
                if (!variableList.hasOwnProperty(variableName)) {
                    continue;
                }
                var currentValue = variableList[variableName];
                if (escape_1) {
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
    Translation.tr = tr;
    function trNumber(key, value, variableList, options) {
        if (variableList === void 0) { variableList = {}; }
        var variableListFull = variableList;
        variableListFull['#NUMBER#'] = value;
        // multiple plurals forms are not yet supported
        return tr(key, variableListFull, options);
    }
    Translation.trNumber = trNumber;
})(Translation || (Translation = {}));
(function () {
    var translationData = document.getElementById('translation-data');
    if (translationData) {
        var content = '';
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
            Translation.load(jQuery.parseJSON(content));
        }
    }
})();

"use strict";
var faceapi;
var Tesseract;
var AvsHome;
(function (AvsHome) {
    var API_BASE_URL = '/';
    function main() {
        Action.init();
    }
    AvsHome.main = main;
    var Action;
    (function (Action) {
        var exampleImplementationStartRedirectButton = $('#exampleImplementationStartRedirectButton');
        var exampleImplementationStartJsButton = $('#exampleImplementationStartJsButton');
        var exampleImplementationIframeJsButton = $('#exampleImplementationIframeJsButton');
        var colorConfigBodyBackgroundInput = $('#colorConfigBodyBackgroundInput');
        var colorConfigBodyForegroundInput = $('#colorConfigBodyForegroundInput');
        var colorConfigButtonBackgroundInput = $('#colorConfigButtonBackgroundInput');
        var colorConfigButtonForegroundInput = $('#colorConfigButtonForegroundInput');
        var colorConfigButtonForegroundCTAInput = $('#colorConfigButtonForegroundCTAInput');
        var accessInformationCallbackUrlInput = $('#accessInformationCallbackUrlInput');
        var ageVerificationLogTextarea = $('#ageVerificationLogTextarea');
        var avsInstance = null;
        function init() {
            createUi();
            createBindings();
        }
        Action.init = init;
        function createUi() {
            exampleImplementationIframeJsButton.attr('disabled', 'disabled');
        }
        function createBindings() {
            exampleImplementationStartRedirectButton.on('click', function (e) {
                if (exampleImplementationStartRedirectButton.is('[disabled]')) {
                    return;
                }
                exampleImplementationStartRedirectButton.attr('disabled', 'disabled');
                var postData = {
                    colorConfigBodyBackgroundInput: colorConfigBodyBackgroundInput.val().toString(),
                    colorConfigBodyForegroundInput: colorConfigBodyForegroundInput.val().toString(),
                    colorConfigButtonBackgroundInput: colorConfigButtonBackgroundInput.val().toString(),
                    colorConfigButtonForegroundInput: colorConfigButtonForegroundInput.val().toString(),
                    colorConfigButtonForegroundCTAInput: colorConfigButtonForegroundCTAInput.val().toString(),
                    callbackUrl: accessInformationCallbackUrlInput.val()
                };
                Ajax.getVerificationPayloadAndUrl(postData).then(function (data) {
                    exampleImplementationStartRedirectButton.removeAttr('disabled');
                    window.open(data.url);
                }, function (error) {
                    exampleImplementationStartRedirectButton.removeAttr('disabled');
                    triggerError(error);
                });
                e.preventDefault();
            });
            exampleImplementationStartJsButton.on('click', function (e) {
                if (exampleImplementationStartJsButton.is('[disabled]')) {
                    return;
                }
                exampleImplementationStartJsButton.attr('disabled', 'disabled');
                var postData = {
                    colorConfigBodyBackgroundInput: colorConfigBodyBackgroundInput.val().toString(),
                    colorConfigBodyForegroundInput: colorConfigBodyForegroundInput.val().toString(),
                    colorConfigButtonBackgroundInput: colorConfigButtonBackgroundInput.val().toString(),
                    colorConfigButtonForegroundInput: colorConfigButtonForegroundInput.val().toString(),
                    colorConfigButtonForegroundCTAInput: colorConfigButtonForegroundCTAInput.val().toString(),
                    callbackUrl: accessInformationCallbackUrlInput.val()
                };
                Ajax.getVerificationPayloadAndUrl(postData).then(function (data) {
                    iframeAvsHandler(data.iframeUrl);
                }, function (error) {
                    exampleImplementationStartJsButton.removeAttr('disabled');
                    triggerError(error);
                });
                e.preventDefault();
            });
            exampleImplementationIframeJsButton.on('click', function (e) {
                if (exampleImplementationIframeJsButton.is('[disabled]')) {
                    return;
                }
                avsInstance.iframeInstance.expand();
                e.preventDefault();
            });
            colorConfigBodyBackgroundInput.on('change', function (e) {
                restartIframeVerification();
            });
            colorConfigBodyForegroundInput.on('change', function (e) {
                restartIframeVerification();
            });
            colorConfigButtonBackgroundInput.on('change', function (e) {
                restartIframeVerification();
            });
            colorConfigButtonForegroundInput.on('change', function (e) {
                restartIframeVerification();
            });
            colorConfigButtonForegroundCTAInput.on('change', function (e) {
                restartIframeVerification();
            });
        }
        function triggerError(error) {
            alert('Error: ' + error.code + ' - ' + error.msg);
        }
        function appendToLog(message) {
            ageVerificationLogTextarea.append(message + "\n");
            ageVerificationLogTextarea.get(0).scrollTop = ageVerificationLogTextarea.get(0).scrollHeight;
        }
        function iframeAvsHandler(iframeUrl) {
            if (avsInstance === null) {
                AvsFactoryIframeSdk.V1.Config.create({
                    verificationType: AvsFactoryIframeSdk.V1.Config.VERIFICATION_TYPE_DETECTION,
                    iframeLocationUrl: iframeUrl
                });
                avsInstance = new AvsFactoryIframeSdk.V1.Core();
                avsInstance.init();
            }
            else {
                avsInstance.iframeInstance.iframeLocationUrl = iframeUrl;
                avsInstance.iframeInstance.refresh();
            }
            avsInstance.onMessage = function (eventMessage) {
                //ageVerificationLogTextarea.append('Received event: ' + eventMessage.name + "\n");
                switch (eventMessage.name) {
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_CHECK_IFRAME_LOADED:
                        appendToLog('Iframe content was loaded');
                        avsInstance.emit(AvsFactoryIframeSdk.V1.Config.EVENT_STATUS_REQUEST);
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_SUCCESS:
                        appendToLog('Verification already completed, delete the "isAgeVerified" cookie to retry');
                        Ajax.validateVerificationPayload({
                            verificationPayload: eventMessage.data.payload
                        }).then(function (data) {
                            appendToLog('Cookie payload integrity check success, verification session id: ' + data.sessionId);
                        }, function (error) {
                            triggerError(error);
                        });
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_NOT_FOUND:
                        avsInstance.emit(AvsFactoryIframeSdk.V1.Config.EVENT_RESOURCE_PRELOAD);
                        appendToLog('Cookie was not found, verification is initializing');
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR:
                        appendToLog('Verification fatal error: ' + JSON.stringify(eventMessage.data));
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_START_PAGE_LOADED:
                        appendToLog('Resources started loading');
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_RESOURCES_LOADED:
                        appendToLog('Resources loaded, verification is ready!');
                        exampleImplementationIframeJsButton.removeAttr('disabled');
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_CLOSE_IFRAME:
                        avsInstance.iframeInstance.collapse();
                        appendToLog('Verification iframe closed');
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_VERIFICATION_SUCCESS:
                        appendToLog('Verification completed successfully');
                        exampleImplementationStartJsButton.attr('disabled', 'disabled');
                        exampleImplementationIframeJsButton.attr('disabled', 'disabled');
                        Ajax.validateVerificationPayload({
                            verificationPayload: eventMessage.data.payload
                        }).then(function (data) {
                            appendToLog('Cookie payload integrity check success, verification session id: ' + data.sessionId);
                        }, function (error) {
                            triggerError(error);
                        });
                        break;
                    case AvsFactoryIframeSdk.V1.Config.EVENT_ON_VERIFICATION_ERROR:
                        appendToLog('Verification completed with error');
                        break;
                    default:
                    //
                }
            };
        }
        function restartIframeVerification() {
            exampleImplementationStartJsButton.removeAttr('disabled');
            exampleImplementationIframeJsButton.attr('disabled', 'disabled');
        }
    })(Action = AvsHome.Action || (AvsHome.Action = {}));
    var Ajax;
    (function (Ajax) {
        function getVerificationPayloadAndUrl(postData) {
            return Core.Ajax.post(API_BASE_URL + 'getVerificationPayloadAndUrl', postData);
        }
        Ajax.getVerificationPayloadAndUrl = getVerificationPayloadAndUrl;
        function validateVerificationPayload(postData) {
            return Core.Ajax.post(API_BASE_URL + 'validateVerificationPayload', postData);
        }
        Ajax.validateVerificationPayload = validateVerificationPayload;
    })(Ajax = AvsHome.Ajax || (AvsHome.Ajax = {}));
})(AvsHome || (AvsHome = {}));

"use strict";
var AvsToken;
(function (AvsToken) {
    function main() {
        AvsFactory.StartPage.Config.create({
            verificationVersion: Application.verificationVersion,
            partnerId: Application.p,
            payload: Application.d,
            sessionId: Application.sessionId,
            partnerColorConfig: Application.partnerColorConfig
        });
        AvsFactory.StartPage.init();
    }
    AvsToken.main = main;
})(AvsToken || (AvsToken = {}));
