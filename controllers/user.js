var userController = {
	updateGear: function(req, res){
		req.user.clothing.push(req.body);
		req.user.camp.push(req.body);
		req.user.safety.push(req.body);
		req.user.save();
			
	}
};

module.exports = userController;