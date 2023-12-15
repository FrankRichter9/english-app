import { UPDATE_WORDS, UPDATE_GENERATED_WORDS } from "../actions/words"

const defaultState = {
	words: []
}

export const wordsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_WORDS:
			return { ...state, words: action.payload }
		case UPDATE_GENERATED_WORDS:
			return { ...state, genetatedWords: action.payload }

		default:
			return state
	}
}