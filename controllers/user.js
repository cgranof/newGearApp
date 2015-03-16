var userController = {
	updateGear: function(req, res){
		var gear = req.body.clothingList;
		console.log(gear);
		// gear.find(user, function(err, result){
		// 	gear.save();
		// });	
	}
};

module.exports = userController;