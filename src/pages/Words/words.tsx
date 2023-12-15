import { MainLayout } from '@/layouts/main-layout'
import { Button, Input } from '@/shared'
import { Dictionary, EditWordForm } from '@/widgets'
import React, { useEffect, useState } from 'react'
import styles from './words.module.css'
import { Popup } from '@/entities'
import { AddWordForm } from '@/widgets/add-word-form'
import { Word } from '@/types'

export const Words = () => {
	const [addWordSidebarIsShown, showAddWordSidebar] = useState(false);
	const [editWord, setEditWord] = useState<Word | null>(null);

	const editWordHandler = (word: Word) => {
		setEditWord(word)
	}

	return (
		<MainLayout>
			<main className={styles.page}>
				<header className={styles.pageHeader}>
					<h2 className={styles.title}>Words</h2>
					<Button
						whenClick={() => showAddWordSidebar(true)}
					>
						add word
					</Button>
				</header>

				<Dictionary
					whenWordEdit={editWordHandler}
				/>

				<Popup
					show={addWordSidebarIsShown}
					whenClose={() => showAddWordSidebar(false)}
					position="top"
					title="Add word"
				>
					<AddWordForm
						whenAddWord={() => showAddWordSidebar(false)}
					/>
				</Popup>
				<Popup
					show={Boolean(editWord)}
					whenClose={() => setEditWord(null)}
					position="top"
					title="Edit word"
				>
					<EditWordForm
						data={editWord}
						whenEditWord={() => setEditWord(null)}
					/>
				</Popup>
			</main>
		</MainLayout>
	)
}
