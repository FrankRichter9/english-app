import React, { useEffect, useState } from 'react'
import styles from './main.module.css'
import { MainLayout } from '~/layouts/main-layout'
import { ProfileBadge } from '@/entities'
import { Dictionary } from '@/widgets'
import { Button } from '@/shared'
import { Sidebar } from '@/entities/sidebar'
import { AddWordForm } from '@/widgets/add-word-form'
import { WordsAPI } from '@/api/services/words-controller'

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
					Add word
				</Button>
				<Sidebar
					show={addWordSidebarIsShown}
					whenClose={() => showAddWordSidebar(false)}

					title="Add word"
				>
					<AddWordForm
						whenAddWord={() => showAddWordSidebar(false)}
					/>
				</Sidebar>
			</div>
		</MainLayout>
	)
}
