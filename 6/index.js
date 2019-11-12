var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var port = 4000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// lowdb
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write()

// var users = [
// 	{ id:1, name: 'Thong'},
// 	{ id:2, name: 'Phat'}
// ];

app.get('/', function (req, res) {
	res.render('index', {
		name: 'Minh Phat',
	});
});
app.get('/users', function (req, res) {
	res.render('users/index', {
		users: db.get('users').value()
	});
});

app.get('/users/search', function (req, res) {
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

app.get('/users/create', function (req, res) {
	res.render('users/create');
});

app.post('/users/create', function (req, res) {
	console.log(req.body);
	db.get('users').push(req.body).write();
	res.redirect('/users');
});

app.listen(port, function () {
	console.log('Port' + port);
});

