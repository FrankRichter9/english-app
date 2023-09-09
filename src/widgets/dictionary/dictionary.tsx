import { WordsAPI } from '@/api/services/words-controller'
import { Pagination, WordsTable } from '@/entities'
import { updateWords } from '@/store/actions/words'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './dictionary.module.css'

export const Dictionary = () => {
	const [countPages, setCountPages] = useState(0)
	const [page, setPage] = useState(1)

	const dispatch = useDispatch()
	//@ts-ignore
	const words = useSelector(state => state?.words.words || [])
	useEffect(() => {
		WordsAPI.getWords(15, page).then((data) => {
			dispatch(updateWords(data.data.words))
			setCountPages(data.data.pagination.countPages)
		})
	}, [])

	const updateWordsRequest = (newPage = page) => {
		return WordsAPI.getWords(15, newPage).then((data) => {
			dispatch(updateWords(data.data.words))
			setCountPages(data.data.pagination.countPages)
		})
	}

	const deleteWordHandler = async (id: number) => {
		await WordsAPI.deleteWord(id)
		await updateWordsRequest()
	}

	const changePageHandler = async (newPage: number) => {
		console.log(newPage)
		setPage(newPage)

		updateWordsRequest(newPage)
	}

	return (
		<article>
			<h4>All words</h4>
			<WordsTable
				className={styles.table}
				words={[...words]}
				whenWordDelete={deleteWordHandler}
			/>
			<Pagination
				className={styles.pagination}
				page={page}
				countPages={countPages}
				whenChangePage={changePageHandler}
			/>
		</article>
	)
}
