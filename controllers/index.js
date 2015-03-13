var indexController = {
	index: function(req, res) {
		res.render('index');
			user:req.user
	},
	mapshome: function(req, res) {
		res.render('mapshome');
	}
};

module.exports = indexController;