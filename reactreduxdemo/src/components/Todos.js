import React from 'react'
import { useSelector } from 'react-redux'
// import { } from '../features/todo/todoSlice'

function Todos() {
	// Read from redux store
	const todosList = useSelector((state) => state.todos)
	console.log(todosList);
	return (
		<div className='m-3'>
			<h1 style={{
				borderBottom: '1px dotted gray',
				width: 'max-content',
				margin: '1px',
				color: 'white',
				backgroundColor: 'blue',
				padding: '2px 5px',
				borderRadius: '6px'
			}}>Todo list</h1>
			<ol>
				{todosList.map((eachTodo, index) => <li style={{ borderBottom: '1px dotted gray', width: 'max-content', margin: '1px', backgroundColor: 'lightblue', padding: '2px 5px', borderRadius: '6px' }} key={eachTodo.id}>
					{index + 1}). {eachTodo.text}
				</li>)}
			</ol>
		</div>
	)
}

export default Todos