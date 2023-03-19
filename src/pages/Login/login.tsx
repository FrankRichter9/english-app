import { Button, Input } from '@/shared'
import React from 'react'
import styles from './login.module.css'

export class Login extends React.Component {
	render() {
		return (
			<div className={styles.root}>
				<div className={styles.authForm}>
					<h2>Login</h2>
					<Input
						className={styles.input}
						value=""
						placeholder="Login"
						whenChange={() => null}
					/>
					<Input
						className={styles.input}
						value=""
						placeholder="Password"
						whenChange={() => null}
					/>
					<Button whenClick={() => null}>Login</Button>
				</div>
			</div>
		)
	}
}
