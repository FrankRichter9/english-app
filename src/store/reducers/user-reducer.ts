import { UPDATE_USER } from "../actions/users"

const defaultState = {
	user: null
}

export const userReducer = (state = defaultState, action) => {
	switch(action.type) {
		case UPDATE_USER:
			return {...state, user: action.payload}

		default:
			return state
	}
}