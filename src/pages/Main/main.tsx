import React from 'react'
import styles from './main.module.css'
import { MainLayout } from '~/layouts/main-layout'
import { ProfileBadge } from '@/entities'
import { Dictionary } from '@/widgets'

export class Main extends React.Component {
	render() {
		return (
			<MainLayout>
				<div className={styles.page}>
					<ProfileBadge
						title="Alisa sokolova"
						email="alisasokolova1989@yandex.ru"
					/>
					<div className={styles.separator} />
					<h1>Main</h1>
					<Dictionary />
				</div>
			</MainLayout>
		)
	}
}
