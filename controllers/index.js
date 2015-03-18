
var _ = require('underscore');
var gearModel = require('../models/gearModel.json');
// gearModel = JSON.parse(gearModel);
var indexController = {

	index: function(req, res) {
		res.render('index');
	},
	mapshome: function(req, res) {
		res.render('mapshome');
	},
	trips: function(req, res) {
		res.render('trips');
	},
	profile: function(req, res) {
		res.render('profile', {
			user:req.user

		});
		var alaska = gearModel[0].clothing;
		var myClothing = req.user.clothing;
		var compare = _.difference(alaska, myClothing);
		console.log('from index: ' , compare);
	},
	destination: function(req, res) {
		res.render('destination', {
			// user:req.user
		});
	}
};

module.exports = indexController;