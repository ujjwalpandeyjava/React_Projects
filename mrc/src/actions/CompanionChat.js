import apiEndPoints from './apiEndPoints';
import { ADD_ANSWER, ADD_API_ERROR, ADD_QUESTION, CLEAR_CHAT, SET_USER_AUTHENTICATED_STATUS, SET__USER_COMPANY_ID } from './reduxReducers/CompanionChatSlice';

const RESOLVE_QUERY = (userQuery) => (dispatch) => {
	dispatch(ADD_QUESTION({ question: userQuery }));
	apiEndPoints.COMPANION_CHAT().resolveQuery(userQuery)
		.then(res => {
			if (res.status === 200)
				dispatch(ADD_ANSWER({ answer: res.data }))
		})
		.catch(err => {
			dispatch(ADD_API_ERROR({ errorMessage: `${err.message}, code: ${err.code}` }))
			return err.code;
		})
}

const CONVERSATION_ENDED = () => (dispatch) => {
	apiEndPoints.CHAT_ACTION().conversationEnded()
		.then(res => {
			if (res.status === 200) {
				dispatch(CLEAR_CHAT());
				setTimeout(() => {
					dispatch(ADD_AI_INITIAL_MESSAGE())
				}, 1000);
			}
		})
		.catch(err => {
			dispatch(ADD_API_ERROR({ errorMessage: `${err.message}, code: ${err.code}` }))
			return err.code;
		})
}

const ADD_AI_INITIAL_MESSAGE = () => (dispatch) => {
	dispatch(ADD_ANSWER({ answer: apiEndPoints.COMPANION_CHAT().initialAIMessage() }));
}
const SET_USER_COMPANY_ID = (companion_UserId) => (dispatch) => {
	dispatch(SET__USER_COMPANY_ID(companion_UserId))
}
const SET_USER_COMPANY_DETAILS = (companion_UserId) => (dispatch) => {
	apiEndPoints.USER_COMPANY_DETAILS().getUserCompanyDetails(companion_UserId)
		.then(resp => {
			console.warn(resp);
			console.warn(resp.data);

			let userFound = true
			if (userFound) {
				// Set issUserAuthenticate = true, user and company details in the global states...
				dispatch(SET_USER_AUTHENTICATED_STATUS(true))
			} else {
				dispatch(SET_USER_AUTHENTICATED_STATUS(false))
				// Set issUserAuthenticate = false
			}
		})
		.catch((err) => {
			// Redirect the application to the Home/Error page
			dispatch(SET_USER_AUTHENTICATED_STATUS(false))
			dispatch(ADD_API_ERROR({ errorMessage: `${err.message}, code: ${err.code}` }))
			return err.code;
		})
}

export { ADD_AI_INITIAL_MESSAGE, CONVERSATION_ENDED, RESOLVE_QUERY, SET_USER_COMPANY_DETAILS, SET_USER_COMPANY_ID };
