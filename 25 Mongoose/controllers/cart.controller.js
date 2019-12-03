var db = require('../db');

module.exports.addToCart = function (req, res, next) {
	var productId = req.params.productId;
	console.log(productId);
	var sessionId = req.signedCookies.sessionId;

	if (!sessionId) {
		res.redirect('/products');
		return;
	}

	db.get('sessions').find({ id: sessionId }).set('cart.' + productId, 1).write();

	res.redirect('/products');
};

// app.get('/users/:id', function (req, res) {
// 	var id = req.params.id;
// 	console.log(id);
// 	// console.log(req.params);
// 	var user = db.get('users').find({ id: id }).value();
// 	console.log(user);
// 	res.render('users/view', {
// 		user: user
		
// 	});
// });