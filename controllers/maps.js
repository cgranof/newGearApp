var gearSeedsModel = require('../models/seeds/gearSeeds.js');
var mapsController = {
    listMarkers: function(req, res) {
        res.send(gearSeedsModel)
    },
    getMarkers: function(req, res){

    }
}    
module.exports = mapsController;