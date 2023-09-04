import React from 'react'
import styles from './dictionary.module.css'
import { MainLayout } from '~/layouts/main-layout'

export class Dictionary extends React.Component {
	render() {
		return (
			<MainLayout>
				<main className={styles.page}>
					<h2>Dictionary 1232</h2>
					<div>123</div>
				</main>
			</MainLayout>
		)
	}
}
