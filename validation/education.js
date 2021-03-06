const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
	let errors = {};
	const dataFields = ['school', 'degree', 'field of study', 'from'];

	dataFields.forEach((field) => {
		data[field] = !isEmpty(data[field]) ? data[field] : '';
		if (Validator.isEmpty(data[field])) {
			errors[field] = `${field} is required`;
		}
	});

	return {
		errors,
		isValid: isEmpty(errors)
	}
};
