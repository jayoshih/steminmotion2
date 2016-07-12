
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var stem = require('./routes/stem');
var purchase = require('./routes/purchase');
var about = require('./routes/about');
var contact = require('./routes/contact');
var race = require('./routes/race');
var development = require('./routes/development');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Math in Motion Key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/stem-program', stem.view);
app.get('/about', about.view);
app.get('/store', purchase.view);
app.get('/contact',contact.view);
app.get('/soapbox-derby-race', race.view);
app.get('/professional-development', development.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
