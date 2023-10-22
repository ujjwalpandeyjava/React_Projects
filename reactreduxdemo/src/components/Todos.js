import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'	// This is the action we want to perform


const deleteButton = {
	border: '1px solid brown',
	marginLeft: '1em',
	marginTop: '1px',
	padding: '2px 8px',
	borderRadius: '0.7em',
	background: 'red',
	color: 'white'
}
const heSt = {
	borderBottom: '1px dotted gray',
	width: 'max-content',
	margin: '1px',
	color: 'white',
	backgroundColor: 'blue',
	padding: '2px 5px',
	borderRadius: '6px'
}
const li = {
	borderBottom: '1px dotted gray',
	width: 'max-content',
	margin: '1px',
	backgroundColor: 'lightblue',
	padding: '2px 5px',
	borderRadius: '6px'
}
function Todos() {
	const todosList = useSelector((allReduxStates) => allReduxStates.todoReducer.todos)
	const dispatch = useDispatch();
	return (
		<div className='m-3'>
			<h1 style={heSt}>Todo list</h1>
			<hr />
			<ol start="50">
				{todosList.length > 0 ? todosList.map((eachTodo, index) => <li style={li} key={eachTodo.id}>
					{index + 1}). {eachTodo.text}
					<button style={deleteButton} onClick={(e) => dispatch(removeTodo({ id: eachTodo.id }))}>Delete</button></li>) : "Add new"}
			</ol>
		</div>
	)
}

export default Todos