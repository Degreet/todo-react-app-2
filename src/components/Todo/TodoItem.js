import React from 'react';

function TodoItem({ id, title, completed, setCompleted }) {
	const classes = completed
		? 'todo-item-wrapper completed'
		: 'todo-item-wrapper';

	function setCompletedHandler() {
		setCompleted(id);
	}

	return (
		<li className={classes}>
			<input type="checkbox" onChange={setCompletedHandler} />

			<div className="todo-item">
				<span className="title">{title}</span>
			</div>
		</li>
	);
}

export default TodoItem;
