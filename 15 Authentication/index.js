var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var cookieParser = require('cookie-parser');

var authMiddleware = require('./middlewares/auth.middleware');

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

app.use('/users', authMiddleware.requireAuth, userRoute); // su dung middleware o day de protext route user
app.use('/auth', authRoute);

app.listen(port, function () {
	console.log('Port' + port);
});

