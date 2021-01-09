import React from 'react';
import TodoItem from './TodoItem';

function TodoItems({ todos, setCompleted, removeTodo }) {
	return (
		<ul className="todo-list">
			{todos.map((todo, i) => (
				<TodoItem
					key={i}
					setCompleted={setCompleted}
					title={todo.title}
					completed={todo.completed}
					id={todo.id}
					removeTodo={removeTodo}
				/>
			))}
		</ul>
	);
}

export default TodoItems;
