// var express = require('express');
// var app = express();
// var port = 3000;

// app.get('/', function (request, response) {
// 	response.send('<h1>Minh Thong</h1>');
// })

// app.get('/users', function (request, response) {
// 	response.send('<h1>Demo</h1>');
// })


// app.listen(port, function () {
// 	console.log('Port' + port);
// });

//-------------------------
var express = require('express');
var app = express();
var port = 4000;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
	res.render('index', {
		name: 'Minh Phat',
	});
});
app.get('/users', function (request, response) {
	response.render('users/index', {
		users: [
			{ id:1, name: 'Thong'},
			{ id:2, name: 'Phat'},
		]
	});
});


app.listen(port, function () {
	console.log('Port' + port);
});

