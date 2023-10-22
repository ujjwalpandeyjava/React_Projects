import { configureStore } from '@reduxjs/toolkit'	// majority of work
import todoReducer from '../features/todo/todoSlice';
import feature2Reducer from '../features/feature2Slices/feature2Slice';

/*const reducer = {
	todos: todosReducer,
	visibility: visibilityReducer,
}*/
export const store = configureStore({
	reducer: {
		todoReducer: todoReducer,
		feature2Reducer: feature2Reducer,
	}
});