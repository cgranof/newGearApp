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
var gearModel = require('../models/gearModel.json');

var tripsController = {
	list: function(req, res) {
		res.send(gearModel)
	}
};

module.exports = tripsController;