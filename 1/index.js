var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (request, response) {
	response.send('<h1>Minh Thong</h1>');
})

app.get('/users', function (request, response) {
	response.send('<h1>Demo</h1>');
})


app.listen(port, function () {
	console.log('Port' + port);
});

