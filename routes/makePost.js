
/*
 * GET makePost page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  	var emoteSelected = req.params.emoteSelected;
	console.log(data);
	res.render('makePost',{
	  "emote": emoteSelected
	});
};
