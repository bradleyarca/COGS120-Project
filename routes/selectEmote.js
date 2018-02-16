
/*
 * GET selectEmote page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  	console.log(data);
	res.render('selectEmote',data);
};
