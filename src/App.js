import React from 'react';
import TodoInput from './components/Todo/TodoInput';
import TodoItems from './components/Todo/TodoItems';

function App() {
	const [todos, setTodos] = React.useState([
		{
			id: 1,
			title: 'Hello',
			completed: false,
		},
	]);

	function createTodo(title) {
		const id = todos[todos.length - 1].id + 1;
		setTodos(todos.concat({ title, completed: false, id }));
	}

	function setCompleted(id) {
		setTodos(
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

	return (
		<div className="App">
			<h1 className="title">Todo List</h1>
			<TodoInput createTodo={createTodo} />
			<TodoItems todos={todos} setCompleted={setCompleted} />
		</div>
	);
}

export default App;
