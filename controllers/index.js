var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	mapshome: function(req, res) {
		res.render('mapshome');
	}
};

module.exports = indexController;