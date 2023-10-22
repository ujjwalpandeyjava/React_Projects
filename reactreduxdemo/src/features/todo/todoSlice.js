// Slice: Help you to create a big obj to export, track state and collect all the related reducers.
import { createSlice, nanoid } from '@reduxjs/toolkit'

const todoInitialState = {
	todos: [{
		id: nanoid(),
		text: "Todo text 1"
	}]
}

// Can see all in redux devtools.
export const todoSlice = createSlice({
	name: 'todo',
	initialState: todoInitialState,
	reducers: {
		// Must parameters (state, action)
		getTodos: (state, action) => {
			// state = state;
		},
		addTodo: (state, action) => {
			// ...state,	// old way
			console.log(state, action);
			let newTodo = {
				id: nanoid(),
				text: action.payload
			}
			state.todos.push(newTodo)
		},
		removeTodo: (state, action) => {
			console.log(action);
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
		}
	}
});

export const { getTodos, addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer;	// Wires with the store
// use them 