import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Dictionary, Login, Main, Translator, Words, Settings } from './pages'
import { useTheme } from './hooks/useTheme'
import { useEffect } from 'react'
import { UsersAPI } from './api/services/users-controller'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './store/actions/users'
import { AxiosError } from 'axios'

function App() {
	const dispatch = useDispatch()

	// @ts-expect-error
	const user = useSelector(state => state.user.user || null)

	useTheme()

	const navigate = useNavigate()

	useEffect(() => {
		const getUser = async () => {
			try {
				const data = await UsersAPI.getMe()

				dispatch(updateUser(data.data))
			} catch (error) {
				console.log('error', { ...error })
				const code = error?.response?.status
				setTimeout(() => {
					if (!user) {
						navigate('/login')
					}
				}, 1000)
			}
		}

		getUser()
	}, [])

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dictionary" element={<Dictionary />} />
				<Route path="/words" element={<Words />} />
				<Route path="/translator" element={<Translator />} />
				<Route path="/settings" element={<Settings />} />
				{/* <Route path="*" element={<Login />} /> */}
			</Routes>
		</div>
	)
}

export default App
