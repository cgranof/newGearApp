<<<<<<< HEAD
// var Gear = require('../gear.js');

// module.exports = Gear.find({}, function(err, results){
// 	// if(results.length === 0) {
// 		var list1 = new Gear({
// 			location: 'Alaska',
// 			activity: 'backpacking',
// 			season: 'summer',
// 			clothing: [],
// 			campgear: [],
// 			safety: [],
// 			latLong: [63.3333, 150.5]
// 		});
// 		list1.save();

// 		var list2 = new Gear({
// 			location: 'Moab',
// 			activity: 'kayaking',
// 			season: 'summer',
// 			clothing: [],
// 			campgear: [],
// 			safety: [],
// 			latLong: [38.5725, 109.5497]
// 		});
// 		list2.save();
// 	// }
// });

=======
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
>>>>>>> 5d71718b84b5283af5138de8cebfc58bfcc2ae67
