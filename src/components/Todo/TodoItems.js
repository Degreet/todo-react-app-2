import React from 'react';
import TodoItem from './TodoItem';

function TodoItems({ todos, setCompleted }) {
	return (
		<ul className="todo-list">
			{todos.map((todo, i) => (
				<TodoItem
					key={i}
					setCompleted={setCompleted}
					title={todo.title}
					completed={todo.completed}
					id={todo.id}
				/>
			))}
		</ul>
	);
}

export default TodoItems;
