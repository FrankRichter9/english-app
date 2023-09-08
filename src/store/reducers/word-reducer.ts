import { UPDATE_WORDS } from "../actions/words"

const defaultState = {
	words: []
}

export const wordsReducer = (state = defaultState, action) => {
	switch(action.type) {
		case UPDATE_WORDS:
			return {...state, words: action.payload}

		default:
			return state
	}
}