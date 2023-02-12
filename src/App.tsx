import { Routes, Route, Link } from 'react-router-dom'
import { Logo, Menu } from './components'
import { Login, Main } from './pages'

function App() {
	return (
		<div className="App">
			<Link to="/login">Login</Link>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				{/* <Route path="*" element={<Login />} /> */}
			</Routes>
		</div>
	)
}

export default App
