var express = require('express');
var bodyParser = require('body-parser');

var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var passportConfig = require('./config/passport');


var indexController = require('./controllers/index.js');
<<<<<<< HEAD
var tripsController = require('./controllers/trips.js');
var authenticationController = require('./controllers/authentication');
=======
var gearController = require('./controllers/gear.js');
>>>>>>> 5d71718b84b5283af5138de8cebfc58bfcc2ae67

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gears');

<<<<<<< HEAD
// var seedData = require('./models/seeds/gearSeeds.js');
// seedData.find();
require('./models/gearModel.json');
=======
require('./Models/seeds/gearSeeds.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); 	


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/api/gear', gearController.getAll);


var server = app.listen(6450, function() {
	console.log('Express server listening on port ' + server.address().port);
});
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var gearController = require('./controllers/gear.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gears');

require('./models/seeds/gearSeeds.js');
>>>>>>> 5d71718b84b5283af5138de8cebfc58bfcc2ae67

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); 	

<<<<<<< HEAD
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

=======
>>>>>>> 5d71718b84b5283af5138de8cebfc58bfcc2ae67

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

<<<<<<< HEAD
app.get('/mapshome', indexController.mapshome);
app.get('/gear', tripsController.list);

app.get('/auth/login', authenticationController.login);
app.post('/auth/login', authenticationController.processLogin);
app.post('/auth/signup', authenticationController.processSignup);
app.get('/auth/logout', authenticationController.logout);


app.use(passportConfig.ensureAuthenticated);
=======
app.get('/api/gear', gearController.getAll);

app.get('/templates/:templateid', indexController.getTemplate);
>>>>>>> 5d71718b84b5283af5138de8cebfc58bfcc2ae67

var server = app.listen(6450, function() {
	console.log('Express server listening on port ' + server.address().port);
});

