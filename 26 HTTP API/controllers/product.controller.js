// var db = require('../db');
// var shortid = require('shortid');

var Product = require('../models/product.model');

module.exports.index = function (req, res) {
	// var page = parseInt(req.query.page) || 1;
	// console.log(req.query);
	// var perPage = 8;

	// var start = (page - 1) * perPage;
	// var end = page * perPage;
	// res.render('products/index', {
	// 	products: db.get('products').value().slice(start, end)
	// });
	Product.find().then(function (products) {
		res.render('products/index', {
			products: products
		});
	});
};

