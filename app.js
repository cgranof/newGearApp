var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var gearController = require('./controllers/gear.js');
var mapsController = require('./controllers/maps.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gears');

var seedData = require('./models/seeds/gearSeeds.js');
seedData.find();

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); 	


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/mapshome', indexController.mapshome);
app.get('/mapshome/seed', gearController.getAll);

app.get('/api/gear', gearController.getAll);



var server = app.listen(6450, function() {
	console.log('Express server listening on port ' + server.address().port);
});
