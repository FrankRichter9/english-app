import { createStore, combineReducers } from "redux";
import { wordsReducer } from "./reducers/word-reducer";

const rootReducer = combineReducers({
    words: wordsReducer
})

export const store = createStore(rootReducer)