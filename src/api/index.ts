// import { getTokenFromLocalStorage } from '@/helpers/saveAuthData'
import axios from 'axios'
import { AuthAPI } from './services/auth-controller'

const baseURL = 'http://localhost:5000/'
// process.env.BASE_URL
export const TOKEN_LOCALSTORAGE_KEY = 'token'

const loginConfig = {
	baseURL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
}

export const LoginAPI = axios.create(loginConfig)

const defaultConfig = {
	baseURL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		// Authorization: getTokenFromLocalStorage(),
	},
}

export const DefaultnAPI = axios.create(defaultConfig)

DefaultnAPI.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)}`

	return config
})

DefaultnAPI.interceptors.response.use(response => {
	

	return response
}, async (error) => {
	const originalRequest = error.config

	if(error?.response?.status === 401) {
		const data = await AuthAPI.refresh()
		
		localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, data.data.accessToken)

		DefaultnAPI.request(originalRequest)
	}
})