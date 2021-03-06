var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middleware');
router.get('/', authMiddleware.requireAuth, controller.index);

// function middleware1 (req, res, next) {
// 	console.log('1');
// 	next();
// }
// function middleware2 (req, res, next) {
// 	console.log('2');
// 	res.send('Hello');
// }
// router.get('/test', middleware1, middleware2);
router.get('/cookie', function (req, res, next) {
	res.cookie('user-id', 12345);
	res.send('Hananim');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;