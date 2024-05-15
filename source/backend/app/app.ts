import {config} from './config';

const path         = require('path');
const http         = require('http');
const express      = require('express');
const app          = express();
const bodyParser   = require('body-parser');
const cookieParser = require("cookie-parser");
const favicon      = require('serve-favicon');

const session = require('express-session');
declare module 'express-session' {
	export interface SessionData {
		[key: string]: any;
	}
}

import {AvsRandom}         from "./lib/random";
import {AvsStorageSession} from "./storage/session";

const avsStorageInstance = new AvsStorageSession();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
	secret           : AvsRandom.generateRandomString(),
	resave           : false,
	saveUninitialized: true,
	cookie           : {
		secure: false
	}
}));
app.use(express.static('app/frontend'));
app.use(favicon(path.join(__dirname, '../frontend/static', 'favicon.ico')))

const server = http.Server(app);

const morgan = require('morgan');
app.use(morgan('combined'));

app.set('views', config.htmlFilePath);
app.set('twig options', {
	allowAsync      : true,
	strict_variables: false
});
app.locals.cacheBuster = config.cacheBuster;

let indexRoute  = require('./route');
let resultRoute = require('./route/result');
let tokenRoute  = require('./route/token');

tokenRoute.load(app, avsStorageInstance);
resultRoute.load(app, avsStorageInstance);
indexRoute.load(app, avsStorageInstance);

server.listen(config.httpServerPort, config.httpServerHost, () => {
	console.log('http server started on: ' + config.httpServerHost + ':' + config.httpServerPort);
});
