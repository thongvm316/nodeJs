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
app.get('/users', function (request, response) {
	response.render('users/index', {
		users: users
	});
});

app.get('/users/search', function (req, res) {
	var q = req.query.q;
	var matchedUsers = users.filter(function (user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1; 
	});

	res.render('users/index', {
		users: matchedUsers
	});
	console.log(req.query)
});


app.listen(port, function () {
	console.log('Port' + port);
});

