// import { getTokenFromLocalStorage } from '@/helpers/saveAuthData'
import axios from 'axios'

const baseURL = 'http://localhost:5000/'
// process.env.BASE_URL

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
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

	return config
})
