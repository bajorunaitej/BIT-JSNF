async function sessionCheck() {
	try {
		const promise = await fetch('http://localhost/server/user/session-check', {
			credentials: "include",
		});
		const answer = await promise.json();
		if(!answer.sessionValid) {
			window.location.href = 'http://localhost/';
		}
	} catch (err) {
		console.log(err);
	}
}

async function postNewTodo(todo) {
	try {
		const promise = await fetch("http://localhost/server/todos", {
			method: "post",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		});
		const result = await promise.json();

		return result;
	} catch (error) {}
}


async function getAllTodos() {
	try {
		const promise = await fetch("http://localhost/server/todos");
		const result = await promise.json();
		console.log(result);
		showAllTodos(result.filter((todo) => !todo.done));
		showAllDones(result.filter((todo) => todo.done)); //
		return result;
	} catch (error) {}
}

async function updateTodoApi(todo) {
	const promise = await fetch(`http://localhost/server/todos/${todo.id}`, {
		method: "put",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});
	const result = await promise.json();
	if(promise.ok) {
		console.error("Atsakymas iš endpoint /todos/40 buvo nesėkmingas");
	}
	else{
		return result;
	}
}

async function deleteTodo(id) {
	const promise = await fetch(`http://localhost/server/todos/${id}`, {
		method: "Delete"
	});
	const response = await promise.json();

	if(!promise.ok) {
		console.error('Nepavyko ištrinti todo įrašo');
	}else{
		return response;
	}
}

sessionCheck();