import { LoginAPI } from '@/api'
import { Button, Input } from '@/shared'
import React, { useContext, useState } from 'react'
import styles from './login.module.css'

export const Login = () => {

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const login = () => {
		// store.login(email, password)
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
