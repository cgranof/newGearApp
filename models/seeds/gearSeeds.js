var Gear = require('../gear.js');

module.exports = Gear.find({}, function(err, results){
	// if(results.length === 0) {
		var list1 = new Gear({
			location: 'Alaska',
			activity: 'backpacking',
			season: 'summer',
			clothing: [],
			campgear: [],
			safety: [],
			latLong: [63.3333, 150.5]
		});
		list1.save();

		var list2 = new Gear({
			location: 'Moab',
			activity: 'kayaking',
			season: 'summer',
			clothing: [],
			campgear: [],
			safety: [],
			latLong: [38.5725, 109.5497]
		});
		list2.save();
	// }
});

