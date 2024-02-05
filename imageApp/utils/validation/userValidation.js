function validate(user) {
	const usernameValidation = validateUsername(user.username);
	if(!usernameValidation.isValid) return usernameValidation.message;
	const passwordValidation = validatePassword(user.password);
	if(!passwordValidation.isValid) return passwordValidation.message;

	
	return "success";
}

function validateUsername(username) {
	if (username.length < 5) {
		return {
			isValid: false,
			mesage: "Username must be longer than 5 symbols",
		};
	} else if (username.length > 50) {
		return {
			isValid: false,
			message: "Username must be shorter than 50 symbols",
		};
	}

	return { isValid: true, message: "success" };
}

function validatePassword(password) {
	if (password.length < 8) {
		return {
			isValid: false,
			mesage: "Username must be longer than 8 symbols",
		};
	} else if (password.length > 80) {
		return {
			isValid: false,
			message: "Username must be shorter than 80 symbols",
		};
	}

	if(!/[0-9]/.test(password)) {
		return {
			isValid: false,
			message: "Password must contain at leats one number",
		};
	};
	if(!/[a-z]/.test(password)) {
		return {
			isValid: false,
			message: "Password must contain at leats one lower case",
		};
	};
	if(!/[A-Z]/.test(password)) {
		return {
			isValid: false,
			message: "Password must contain at leats one upper case",
		};
	};

	return { isValid: true, message: "success" }; 
};



module.exports = validate;