var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');
var cookieParser = require('cookie-parser');


var app = express();
var port = 4000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', function (req, res) {
	res.render('index');
});

app.use('/users', userRoute);

app.listen(port, function () {
	console.log('Port' + port);
});

