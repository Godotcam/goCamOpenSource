"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const config_1 = require("./config");
const random_1 = require("./lib/random");
const session_1 = require("./storage/session");
const indexRoute = __importStar(require("./route"));
const resultRoute = __importStar(require("./route/result"));
const tokenRoute = __importStar(require("./route/token"));
const app = (0, express_1.default)();
const avsStorageInstance = new session_1.AvsStorageSession();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: random_1.AvsRandom.generateRandomString(),
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));
app.use(express_1.default.static('app/frontend'));
app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, '../frontend/static', 'favicon.ico')));
const server = new http_1.default.Server(app);
app.use((0, morgan_1.default)('combined'));
app.set('views', config_1.config.htmlFilePath);
app.set('twig options', {
    allowAsync: true,
    strict_variables: false
});
app.locals.cacheBuster = config_1.config.cacheBuster;
app.locals.isProduction = config_1.config.isProduction;
tokenRoute.load(app, avsStorageInstance);
resultRoute.load(app, avsStorageInstance);
indexRoute.load(app, avsStorageInstance);
server.listen(config_1.config.httpServerPort, config_1.config.httpServerHost, () => {
    console.log('http server started on: ' + config_1.config.httpServerProtocol + '://' + config_1.config.httpServerHost + ':' + config_1.config.httpServerPort);
});
