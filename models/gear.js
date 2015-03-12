var mongoose = require('mongoose');

var gearSchema = mongoose.Schema({
	location: String,
	activity: String,
	season: String,
	clothing: [String],
	campgear: [String],
	safety: [String]
});

module.exports = mongoose.model('Gear', gearSchema);