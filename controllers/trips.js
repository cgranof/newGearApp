// var Gear = require('../models/gear.js');

// var gearController = {
// 	getAll: function(req, res){
// 		if(req.query._id){
// 			Gear.findById(req.query._id, function(err, result){
// 				res.send(result);
// 			});
// 		} else {
// 			Gear.find({}, function(err, results){
// 				res.send(results);
// 			});
// 		}
// 	},
	
// };
// 
var trips = require('../models/gearModel.json');

var tripsController = {
	list: function(req, res) { 
		var tripId = req.params.trip_id;
		Trip.findById(tripID, function(err, result) {
		});
		
	}
};

module.exports = tripsController;