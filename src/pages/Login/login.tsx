import { LoginAPI } from '@/api'
import { Button, Input } from '@/shared'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { AuthAPI } from '@/api/services/auth-controller'
import { useRoutes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateUser } from '@/store/actions/users'

export const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const login = async () => {
		const { data } = await AuthAPI.login(email, password)

		if (data) {
			localStorage.setItem('token', data.accessToken)
			dispatch(updateUser(data.user))
			navigate('/')
		}


	}

	return (
		<div className={styles.root}>
			<div className={styles.authForm}>
				<h2>Login</h2>
				<Input
					className={styles.input}
					value={email}
					placeholder="Email"
					whenChange={setEmail}
				/>
				<Input
					className={styles.input}
					type={'password'}
					value={password}
					placeholder="Password"
					whenChange={setPassword}
				/>
				<Button whenClick={login}>Login</Button>
			</div>
		</div>
	)
}
