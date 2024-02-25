import { configureStore } from "@reduxjs/toolkit";
import companionChatSlice_Reducer from './CompanionChatSlice';
import RefCompSlice_Reducer from './RefCompSlice';

// Redux Thunk: Redux Thunk middleware allows you to write action creators that return a function instead of an action.
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
// The inner function receives the store methods dispatch and getState as parameters.
const reduxStore = configureStore({
	reducer: {
		companionChatSlice_Reducer,
		RefCompSlice_Reducer
	}
});
export { reduxStore }

// import { useSelector } from "react-redux";
// const contacts = useSelector(allStoreReducers => allStoreReducers.reducerKey) // Get sate from redux
// const contacts = useSelector(allStoreReducers => allStoreReducers.companionChatSlice_Reducer) // Get sate from redux