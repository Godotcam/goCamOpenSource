import bodyParser          from 'body-parser';
import cookieParser        from 'cookie-parser';
import express             from 'express';
import session             from 'express-session';
import http                from 'http';
import morgan              from 'morgan';
import path                from 'path';
import favicon             from 'serve-favicon';
import {config}            from './config';
import {AvsRandom}         from "./lib/random";
import {AvsStorageSession} from "./storage/session";

import * as indexRoute  from './route';
import * as resultRoute from './route/result';
import * as tokenRoute  from './route/token';

const app = express();
declare module 'express-session' {
	export interface SessionData {
		[key: string]: any;
	}
}

const avsStorageInstance = new AvsStorageSession();

app.set('trust proxy', config.trustProxy);
// Health probes must not allocate sessions or depend on cookies/templates.
app.get('/healthz', (_req, res) => {
	res.set('Cache-Control', 'no-store').status(200).json({status: 'ok'});
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
	secret           : config.sessionSecret || AvsRandom.generateRandomString(),
	resave           : false,
	saveUninitialized: false,
	cookie           : {
		secure: config.httpServerProtocol === 'https',
		// HTTPS iframe integrations need an explicit cross-site session cookie.
		sameSite: config.httpServerProtocol === 'https' ? 'none' : 'lax',
		maxAge: config.test.maxDuration
	}
}));
app.use(express.static('app/frontend'));
app.use(favicon(path.join(__dirname, '../frontend/static', 'favicon.ico')))

const server = new http.Server(app);

app.use(morgan('combined'));

app.set('views', config.htmlFilePath);
app.set('twig options', {
	allowAsync      : true,
	strict_variables: false
});
app.locals.cacheBuster = config.cacheBuster;
app.locals.nodeEnv     = process.env.NODE_ENV || 'not defined';
tokenRoute.load(app, avsStorageInstance);
resultRoute.load(app, avsStorageInstance);
indexRoute.load(app, avsStorageInstance);

server.listen(config.httpServerPort, config.httpBindAddress, () => {
	console.log('http server listening on: ' + config.httpBindAddress + ':' + config.httpServerPort);
});

let shuttingDown = false;
function shutdown() {
	if (shuttingDown) return;
	shuttingDown = true;
	console.log('Stopping HTTP server');
	const timeout = setTimeout(() => process.exit(1), 25000);
	timeout.unref();
	server.close((error) => {
		clearTimeout(timeout);
		process.exit(error ? 1 : 0);
	});
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
