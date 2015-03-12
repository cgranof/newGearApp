var Gear = require('../gear.js');

Gear.find({}, function(err, results){
	if(results.length === 0) {
		var list1 = new Gear({
			location: 'Alaska',
			activity: 'backpacking',
			season: 'summer',
			clothing: [],
			campgear: [],
			safety: []
		});
		list1.save();

		var list2 = new Gear({
			location: 'test',
			activity: 'test',
			season: 'summer',
			clothing: [],
			campgear: [],
			safety: []
		});
		list2.save();
	}
});
