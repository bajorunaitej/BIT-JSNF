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
			username: usernameField.value,
			email: emailField.value,
			password: passwordField.value,
		}),
	});

	const response = await promise.text();
	console.log(response);
}

register();

registerButton.onclick = register;

const loginUserNameElement = document.querySelector('#loginUserName');
const loginPasswordElement = document.querySelector('#loginPassword');
const loginButton = document.querySelector('#loginPassword');
async function login() {

	fetch("http://localhost:3000/prisijungimas",{
		method: "POST",
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify({
			username: loginUserNameElement.value,
			password: loginPasswordElement.value
		}),
	})
		.then(response => response.json())
		.then(response=>(window.location.href = response.url))
		.catch(err=>console.log(err));

	// window.location.href = "http://127.0.0.1:5501/0110node/front-end/todos.html"

}

loginButton.onclick = login;