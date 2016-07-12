var faq = require('../faq.json');

exports.view = function(req, res){
	res.render('contact', faq);
};