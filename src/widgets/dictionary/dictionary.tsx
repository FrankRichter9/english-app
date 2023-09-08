import { WordsAPI } from '@/api/services/words-controller'
import { WordsTable } from '@/entities'
import { updateWords } from '@/store/actions/words'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './dictionary.module.css'

export const Dictionary = () => {
	const dispatch = useDispatch()
	//@ts-ignore
	const words = useSelector(state => state?.words.words || [])
	useEffect(() => {
		WordsAPI.getWords().then((data) => {
			dispatch(updateWords(data.data))
		})
	}, [])

	const deleteWordHandler = async (id: number) => {
		await WordsAPI.deleteWord(id)
		WordsAPI.getWords().then((data) => {
			dispatch(updateWords(data.data))
		})
	}

	return (
		<article>
			<h4>All words</h4>
			<WordsTable
				className={styles.table}
				words={[...words]}
				whenWordDelete={deleteWordHandler}
			/>
		</article>
	)
}
