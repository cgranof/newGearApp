var express = require('express');
var bodyParser = require('body-parser');

var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var passportConfig = require('./config/passport');


var indexController = require('./controllers/index.js');
var tripsController = require('./controllers/trips.js');
var authenticationController = require('./controllers/authentication');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gears');

// var seedData = require('./models/seeds/gearSeeds.js');
// seedData.find();
require('./models/gearModel.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); 	

app.use(cookieParser());
app.use(flash());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
// app.use(session({secret: 'secret'}));
app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/mapshome', indexController.mapshome);
app.get('/gear', tripsController.list);

app.get('/auth/login', authenticationController.login);
app.post('/auth/login', authenticationController.processLogin);
app.post('/auth/signup', authenticationController.processSignup);
app.get('/auth/logout', authenticationController.logout);


app.use(passportConfig.ensureAuthenticated);

var server = app.listen(6450, function() {
	console.log('Express server listening on port ' + server.address().port);
});
