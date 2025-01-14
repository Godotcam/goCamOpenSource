"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const favicon = require('serve-favicon');
const session = require('express-session');
const random_1 = require("./lib/random");
const session_1 = require("./storage/session");
const avsStorageInstance = new session_1.AvsStorageSession();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: random_1.AvsRandom.generateRandomString(),
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));
app.use(express.static('app/frontend'));
app.use(favicon(path.join(__dirname, '../frontend/static', 'favicon.ico')));
const server = http.Server(app);
const morgan = require('morgan');
app.use(morgan('combined'));
app.set('views', config_1.config.htmlFilePath);
app.set('twig options', {
    allowAsync: true,
    strict_variables: false
});
app.locals.cacheBuster = config_1.config.cacheBuster;
let indexRoute = require('./route');
let resultRoute = require('./route/result');
let tokenRoute = require('./route/token');
tokenRoute.load(app, avsStorageInstance);
resultRoute.load(app, avsStorageInstance);
indexRoute.load(app, avsStorageInstance);
server.listen(config_1.config.httpServerPort, config_1.config.httpServerHost, () => {
    console.log('http server started on: ' + config_1.config.httpServerHost + ':' + config_1.config.httpServerPort);
});
