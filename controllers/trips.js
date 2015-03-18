var gearModel = require('../models/gearModel.json');

var tripsController = {
	list: function(req, res) {
		res.send(gearModel)
	}
};

module.exports = tripsController;