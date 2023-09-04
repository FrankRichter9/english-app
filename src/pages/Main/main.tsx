import React, { useState } from 'react'
import styles from './main.module.css'
import { MainLayout } from '~/layouts/main-layout'
import { ProfileBadge } from '@/entities'
import { Dictionary } from '@/widgets'
import { Sidebar } from '@/shared/sidebar'
import { Button } from '@/shared'

export const Main = () => {
	const [addWordSidebarIsShown, showAddWordSidebar] = useState(false);

	return (
		<MainLayout>
			<div className={styles.page}>
				<ProfileBadge
					title="Alisa sokolova"
					email="alisasokolova1989@yandex.ru"
				/>
				<div className={styles.separator} />
				<h2>Main</h2>
				<Dictionary />
				<Button
					whenClick={() => showAddWordSidebar(true)}
				>
					Добавить слово
				</Button>
				<Sidebar
					show={addWordSidebarIsShown}
					whenClose={() => showAddWordSidebar(false)}
				/>
			</div>
		</MainLayout>
	)
}
