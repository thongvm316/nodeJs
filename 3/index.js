var express = require('express');
var app = express();
var port = 4000;
app.set('view engine', 'pug');
app.set('views', './views');

var users = [
	{ id:1, name: 'Thong'},
	{ id:2, name: 'Phat'}
];

app.get('/', function (req, res) {
	res.render('index', {
		name: 'Minh Phat',
	});
});
app.get('/users', function (req, res) {
	res.render('index', {
		users: users
	});
});

app.get('/users/search', function (req, res) {
	var q = req.query.a;
	var matchedUsers = users.filter(function (user) {
		// return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1; 
		return user.name.indexOf(q) !== -1; 
	});

	res.render('users/index', {
		users: matchedUsers
	});
});


app.listen(port, function () {
	console.log('Port' + port);
});

