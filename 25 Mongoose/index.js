require('dotenv').config();
console.log(process.env.SESSION_SECRET);
var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);


var productRoute = require('./routes/product.route');
var sessionMiddleware = require('./middlewares/session.middleware');
var cartRoute = require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route');

var authMiddleware = require('./middlewares/auth.middleware');

var app = express();
var port = 4000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);// ảnh hưởng all đường dẫn




app.get('/', function (req, res) {
	res.render('index');
});

app.use('/users', authMiddleware.requireAuth, userRoute); // su dung middleware o day de protect route user
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use(csurf({ cookie: true }));
app.use('/transfer',authMiddleware.requireAuth, transferRoute);



app.listen(port, function () {
	console.log('Port' + port);
});



