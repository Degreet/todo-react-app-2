import React from 'react';
import TodoInput from './components/Todo/TodoInput';
import TodoItems from './components/Todo/TodoItems';

function App() {
	const [todos, setTodos] = React.useState([
		{
			id: 1,
			title: 'Loading...',
			completed: false,
		},
	]);

	React.useEffect(() => {
		if (localStorage.todos) {
			save(JSON.parse(localStorage.todos));
		}
	}, [setTodos]);

	function createTodo(title) {
		const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
		save(todos.concat({ title, completed: false, id }));
	}

	function setCompleted(id) {
		save(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}

				return todo;
			})
		);
	}

	function removeTodo(id) {
		save(todos.filter((todo) => todo.id !== id));
	}

	function save(result) {
		const res = result.length
			? result
			: [{ id: 1, title: 'Создайте первую задачу...', completed: false }];
		setTodos(res);
		localStorage.todos = JSON.stringify(res);
	}

	return (
		<div className="App">
			<h1 className="title">Todo List</h1>
			<TodoInput createTodo={createTodo} />
			<TodoItems
				removeTodo={removeTodo}
				todos={todos}
				setCompleted={setCompleted}
			/>
		</div>
	);
}

export default App;
