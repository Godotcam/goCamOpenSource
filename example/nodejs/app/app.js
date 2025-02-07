const path       = require('path');
const http       = require('http');
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const favicon    = require('serve-favicon');

const appConfig = {
	cipherKey: 'zIkmW2zEgzlTLTRC5xeMbcOhHcE5sBHB',
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('app/public'));
app.use(favicon(path.join(__dirname, './public/static', 'favicon.ico')))

app.set('views', './app/views/');
app.set('twig options', {
	allowAsync      : true,
	strict_variables: false
});

const indexRoute    = require('./route');
const redirectRoute = require('./route/redirect');
const iframeRoute   = require('./route/iframe');

redirectRoute.load(app, appConfig);
iframeRoute.load(app, appConfig);
indexRoute.load(app);

const server = http.Server(app);

server.listen(8000, 'localhost', () => {
	console.log('http server started on localhost:8000');
});
