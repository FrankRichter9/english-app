import React, { useEffect, useState } from 'react'
import styles from './main.module.css'
import { MainLayout } from '~/layouts/main-layout'
import { ProfileBadge } from '@/entities'
import { Dictionary } from '@/widgets'
import { Button } from '@/shared'
import { Sidebar } from '@/entities/sidebar'
import { AddWordForm } from '@/widgets/add-word-form'
import { WordsAPI } from '@/api/services/words-controller'
import { UserBadge } from '@/widgets/user-badge'

export const Main = () => {
	const [addWordSidebarIsShown, showAddWordSidebar] = useState(false);

	return (
		<MainLayout>
			<div className={styles.page}>
				<UserBadge />
				<div className={styles.separator} />
				<header className={styles.pageHeader}>
					<h2 className={styles.title}>Main</h2>
					<Button
						whenClick={() => showAddWordSidebar(true)}
					>
						Add word
					</Button>
				</header>

				<Dictionary />

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
