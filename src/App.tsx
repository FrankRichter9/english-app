import { Routes, Route, Link } from 'react-router-dom'
import { Dictionary, Login, Main, Words } from './pages'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dictionary" element={<Dictionary />} />
				<Route path="/words" element={<Words />} />
				{/* <Route path="*" element={<Login />} /> */}
			</Routes>
		</div>
	)
}

export default App
