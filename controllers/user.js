
var _ = require('underscore');
var gearModel = require('../models/gearModel.json');
var userModel = require('../models/user.js');

var userController = {
	updateGear: function(req, res){
		console.log(req.body.clothingList);
		req.user.clothing = req.user.clothing.concat(req.body.clothingList);
		req.user.camp = req.user.camp.concat(req.body.campList);
		req.user.safety = req.user.safety.concat(req.body.safetyList);
		var update = {
			clothing: req.user.clothing.concat(req.body.clothingList) 
		}
		console.log(req.user);
		userModel.findOneAndUpdate({"_id": req.user._id}, update, function(err, person) {
		  	if (err) {
			    console.log('got an error');
  			}
  			console.log(person);
		});
		req.user.save(function(err, results) {
			res.send(results);
			// console.log('results: ', req.body.safetyList);
		});		
	},
	list: function(req, res) {
		res.send(req.user);
	},
	compare: function(req, res) {
		var alaska = gearModel[0].clothing;
		console.log('alaska ; ' , alaska);
		var myClothing = req.user.clothing;
		console.log('clothing:  ' , req.user.clothing);
		// var compare = _.difference([1, 2, 3, 4], [2, 5, 7]); => 1, 3, 4
		var compare = _.difference(alaska, myClothing);
		console.log('test ', compare);
		res.send(compare);
	}
};

module.exports = userController;