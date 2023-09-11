import { createStore, combineReducers } from "redux";
import { wordsReducer } from "./reducers/word-reducer";
import { userReducer } from "./reducers/user-reducer";

const rootReducer = combineReducers({
    words: wordsReducer,
    user: userReducer
})

export const store = createStore(rootReducer)