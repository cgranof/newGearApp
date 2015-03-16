var indexController = {
	index: function(req, res) {
		res.render('index')
		// , {
			// user:req.user
		// });
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
	}
};

module.exports = indexController;