import { createSlice } from "@reduxjs/toolkit";

const feature2Slice = createSlice({
	name: 'feature2',
	initialState: { list: [] },
	reducers: {
		filterAdded(state, action) {
			state.list.push({
				id: action.payload.id,
				text: action.payload.text,
				completed: false
			})
		},
		filterToggled(state, action) {
			const todo = state.list.find(todo => todo.id === action.payload)
			todo.completed = !todo.completed
		}
	}
});

export const { filterAdded, filterToggled } = feature2Slice.actions;
export default feature2Slice.reducer;