import { configureStore } from '@reduxjs/toolkit'	// majority of work
import todoSlice from '../features/todo/todoSlice';

export const store = configureStore({
	reducer: todoSlice
});