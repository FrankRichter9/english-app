// import { getTokenFromLocalStorage } from '@/helpers/saveAuthData'
import axios from 'axios'

const baseURL = 'http://176.53.162.254/'
// process.env.BASE_URL

const loginConfig = {
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
}

export const LoginAPI = axios.create(loginConfig)

const defaultConfig = {
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		// Authorization: getTokenFromLocalStorage(),
	},
}

export const DefaultnAPI = axios.create(defaultConfig)
