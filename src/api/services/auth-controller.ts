import { LoginAPI, DefaultnAPI } from '@/api'
import { AxiosResponse } from 'axios'

export const AuthAPI = {
    /*
    * @param {string} login
    * @param {string} password
    * @returns {Promise<AxiosResponce<any>>}
    * 
    */
    login(email: string, password: string): Promise<AxiosResponse<any>> {
        const url = '/auth/login'
        const data = {
            email,
            password
        }

        return LoginAPI.post(url, data)
    },

    /*
    * @param {string} login
    * @param {string} password
    * @returns {Promise<AxiosResponce<any>>}
    * 
    */
    logout(): Promise<AxiosResponse<any>> {
        const url = '/auth/logout'

        return DefaultnAPI.get(url)
    },
}