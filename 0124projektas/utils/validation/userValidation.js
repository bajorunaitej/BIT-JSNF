function validate(user) {
	const usernameValidation = validateUsername(user.username);
	if(!usernameValidation.isValid) return usernameValidation.message;

	return "success";
}

function validateUsername(username) {
	if (user.username.length < 5) {
		return {isValid: false, message: "Username must be longer than 5 symbols"};
	} else if (user.username.length > 70) {
		return {isValid: false, message: "Username must be shorter than 70 symbols"};
	}
	return {isValid: true, message: "success"};
}

module.exports = validate;