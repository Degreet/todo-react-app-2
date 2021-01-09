import React from 'react';

export default function TodoInput({ createTodo }) {
	const [form, setForm] = React.useState('');
	const formHandler = (e) => setForm(e.target.value);

	function addTodo() {
		const title = form;
		createTodo(title);
	}

	return (
		<div className="create-todo">
			<input placeholder="Введите текст" onChange={formHandler} />
			<button className="add-todo" onClick={addTodo}>
				Добавить
			</button>
		</div>
	);
}
