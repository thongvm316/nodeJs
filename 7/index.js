var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var port = 5000;
var shortid = require('shortid');
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
db.defaults({ users: [] })
  .write()

app.get('/', function (req, res) {
	res.render('index');
});


app.get('/users', function (req, res) {
	res.render('users/index', {
		users: db.get('users').value()
	});
});
app.get('/review', function (req, res) {
	res.render('index');
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

app.get('/users/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	// console.log(req.params);
	var user = db.get('users').find({ id: id }).value();
	console.log(user);
	res.render('users/view', {
		user: user
	});
});

app.post('/users/create', function (req, res) {
	console.log(req.body);
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
});

app.listen(port, function () {
	console.log('Port' + port);
});

