import { LoginAPI, DefaultnAPI } from '@/api'
import { AxiosResponse } from 'axios'

export const AuthAPI = {
    /*
    * @param {string} login
    * @param {string} password
    * @returns {Promise<AxiosResponce<any>>}
    * 
    */
    login(login: string, password: string): Promise<AxiosResponse<any>> {
        const url = '/auth/login'
        const data = {
            username: login,
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
    user(id: number): Promise<AxiosResponse<any>> {
        const url = '/users/' + id

        return DefaultnAPI.get(url)
    },
}