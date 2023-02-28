import React from 'react'
import styles from './dictionary.module.css'
import { MainLayout } from '~/layouts/main-layout'

export class Dictionary extends React.Component {
	render() {
		return (
			<MainLayout>
				<main className={styles.page}>
					<h2>Dictionary</h2>
				</main>
			</MainLayout>
		)
	}
}
