import React, { useState } from 'react'
import { useDispatch } from 'react-redux'	// it will interact with the store
import { addTodo } from '../features/todo/todoSlice'	// This is the action we want to perform

function AddTodo() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const addTodoHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(input))	// addTodo() takes payload
		setInput("");
	}

	return (
		<form onSubmit={addTodoHandler} className='space-s-3 m-2'>
			<input type='text' placeholder='Enter a text..' value={input}
				className='text-white bg-gray-800 rounded border border-gray-700 py-2 px-6 focus:border-indigo-500 focus:ring-2 focus: ring-indigo-900 text-base'
				onChange={(e) => setInput(e.target.value)} />
			<button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus: outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
		</form>
	)
}

export default AddTodo