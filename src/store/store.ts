import { AuthAPI } from '@/api/services/auth-controller'
import { makeAutoObservable } from 'mobx'

export default class Store {
    user = {}
    isAuth = false

    constructor () {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: any) {
        this.user = user
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthAPI.login(email, password)

            localStorage.setItem('token', response.data.accessToken)

            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e) {
            console.error(e)
        }
    }

    async logout() {
        try {
            const response = await AuthAPI.logout()

            localStorage.removeItem('token')

            this.setAuth(false)
            this.setUser({})
        } catch(e) {
            console.error(e)
        }
    }
}