var db = require('../db');
var shortid = require('shortid');
module.exports.create = function (req, res, next) {
	res.render('transfer/create', {
		csrfToken: req.csrfToken()
	});
};

module.exports.postCreate = function (req, res, next) {
	var data = {
		id: shortid.generate(),
		amount: parseInt(req.body.amount),
		accountId: req.body.accountId,
		userId: req.signedCookies.userId
	};
	// req.body.id = shortid.generate();
	// req.body.amount = parseInt(req.body.amount);
	db.get('transfers').push(data).write();
	console.log(req.body);
	res.redirect('/transfer/create');
};