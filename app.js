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
var userController = require('./controllers/user.js');

var mongoose = require('mongoose');
mongoose.connect('process.env.MONGOLAB_URI' || 'mongodb://localhost/gears');

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
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', indexController.index);

app.get('/mapshome', indexController.mapshome);
app.get('/trips', indexController.trips);
app.get('/destination', indexController.destination);

app.get('/triplist', tripsController.list);

app.get('/auth/login', authenticationController.login);
app.post('/auth/login', authenticationController.processLogin);
app.post('/auth/signup', authenticationController.processSignup);
app.get('/auth/logout', authenticationController.logout);


app.use(passportConfig.ensureAuthenticated);
app.get('/profile', indexController.profile);
app.post('/update', userController.updateGear);

var port = process.env.PORT || 6450;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
