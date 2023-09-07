import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './variables.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const defaultState = {
	words: []
}

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'ADD_WORDS':
			return {...state, words: action.payload}

		default:
			return state
	}
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
			<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
