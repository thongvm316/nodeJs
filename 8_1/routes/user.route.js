var express = require('express');
var router = express.Router();
var db = require('../db');
var shortid = require('shortid');

router.get('/', function (req, res) {
	res.render('users/index', {
		users: db.get('users').value()
	});
});

router.get('/search', function (req, res) {
	var q = req.query.q;
	var matchedUsers = users.filter(function (user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1; 
		// return user.name.indexOf(q) !== -1; 
	});

	res.render('users/index', {
		users: matchedUsers
	});
	console.log(req.query);
});

router.get('/create', function (req, res) {
	res.render('users/create');
});

router.get('/:id', function (req, res) {
	var id = req.params.id;
	// console.log(req.params);
	var user = db.get('users').find({ id: id }).value();
	console.log(user);
	res.render('users/view', {
		user: user
	});
});

router.post('/create', function (req, res) {
	console.log(req.body);
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
});

module.exports = router;