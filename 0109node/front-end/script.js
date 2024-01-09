const usernameField = document.querySelector("#register-username"),
	emailField = document.querySelector("#register-email"),
	passwordField = document.querySelector("#register-password"),
	registerButton = document.querySelector("#send-registration");

async function register() {
	const promise = await fetch("http://localhost:3000/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "Juste",
			email: "bajor@gmail.com",
			password: "noriu pas mama",
		}),
	});

	const response = await promise.text();
	console.log(response);
}

register();