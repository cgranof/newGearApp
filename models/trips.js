var mongoose = require('mongoose');

var tripsSchema = mongoose.Schema({
	location: String,
	activity: String,
	season: String,
	clothing: [String],
	campgear: [String],
	safety: [String]
});

module.exports = mongoose.model('Trip', tripSchema);