import React from 'react';

function TodoItem({ id, title, completed, setCompleted, removeTodo }) {
	const classes = completed
		? 'todo-item-wrapper completed'
		: 'todo-item-wrapper';

	function setCompletedHandler() {
		setCompleted(id);
	}

	function removeTodoHandler() {
		removeTodo(id);
	}

	return (
		<li className={classes}>
			<input type="checkbox" onChange={setCompletedHandler} />
			<button className="remove-todo" onClick={removeTodoHandler}>
				&times;
			</button>

			<div className="todo-item">
				<span className="title">{title}</span>
			</div>
		</li>
	);
}

export default TodoItem;
