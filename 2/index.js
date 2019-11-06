var express = require('express');
var app = express();
var port = 5000;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
	res.render('index', {
		name: 'Thong de thuong cua Hs',
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

