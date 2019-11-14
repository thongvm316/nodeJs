module.exports.postCreate = function  (req, res, next) {
	var errors = [];

	if (!req.body.name) {
		errors.push('Name is require.');
	}

	if (!req.body.phone) {
		errors.push('Phone is require.');
	}

	if (errors.length > 0) {
		res.render('users/create', {
			errors: errors,
			values: req.body
		});
		return;
	}

	res.locals.success = true;

	next();
};