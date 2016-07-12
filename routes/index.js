var slides = require('../slides.json');

exports.view = function(req, res){
	res.render('index', slides)
};