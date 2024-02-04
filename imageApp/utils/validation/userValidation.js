function validate(user) {
	const usernameValidation = validateUsername(user.username);
	// {isValid: false, message: " bad username...."}
	// {isValid: true, message: "success"}
	if(!usernameValidation.isValid) return usernameValidation.message;
	
	return "success";
}

function validateUsername(username) {
	if (user.username.length < 5) {
		return {
			isValid: false,
			mesage: "Username must be longer than 5 symbols",
		};
	} else if (user.username.length > 50) {
		return {
			isValid: false,
			message: "Username must be shorter than 50 symbols";
		};
	}

	return { isValid: true, message: "Success" };
}


module.exports = validate;