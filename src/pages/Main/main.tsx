import React, { useEffect } from 'react'
import styles from './main.module.css'
import { MainLayout } from '~/layouts/main-layout'
import { WordsAPI } from '@/api/services/words-controller'
import { UserBadge } from '@/widgets/user-badge'
import { useDispatch, useSelector } from 'react-redux'
import { updateGeneratedWords } from '@/store/actions/words'
import { GeneratedWordsBlock } from '@/widgets/genetated-words-block'

export const Main = () => {

	return (
		<MainLayout>
			<div className={styles.page}>

				{/* <div className={styles.separator} /> */}
				<header className={styles.pageHeader}>
					<h2 className={styles.title}>Main</h2>
					<UserBadge />
				</header>
				<GeneratedWordsBlock />
			</div>
		</MainLayout>
	)
}
