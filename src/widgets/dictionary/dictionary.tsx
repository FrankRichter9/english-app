import { WordsAPI } from '@/api/services/words-controller'
import { Pagination, WordsTable } from '@/entities'
import { Button } from '@/shared'
import { updateWords } from '@/store/actions/words'
import { Word } from '@/types'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import styles from './dictionary.module.css'

type Props = {
	whenWordEdit?: (word: Word) => void
}

export const Dictionary = ({ whenWordEdit }: Props) => {
	const [countPages, setCountPages] = useState(0)
	const [page, setPage] = useState(1)
	const [selectedWordsMap, setSelectedWordsMap] = useState({})

	const [searchParams, setSearchParams] = useSearchParams();

	const dispatch = useDispatch()
	//@ts-ignore
	const words = useSelector(state => state?.words.words || [])
	useEffect(() => {
		const page = +searchParams.get('page') || 1
		setPage(page)
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

	const selectWordHandler = (id: number) => {
		setSelectedWordsMap({
			...selectedWordsMap,
			[id]: !selectedWordsMap[id],
		})
	}

	const editWordHandler = (id: number) => {
		const word = words?.find(({ id: wordId }) => wordId === id)
		word && whenWordEdit?.(word)
	}

	const changePageHandler = async (newPage: number) => {
		setPage(newPage)
		const params = new URLSearchParams({ page: newPage.toString() });
		setSearchParams(params)

		updateWordsRequest(newPage)
	}

	return (
		<article>
			<div className={styles.tableWrapper}>
				<WordsTable
					className={styles.table}
					words={[...words]}
					selectedWordsMap={selectedWordsMap}
					whenWordDelete={deleteWordHandler}
					whenWordSelect={selectWordHandler}
					whenWordEdit={whenWordEdit && editWordHandler}
				/>
				{/* <Button>add word</Button> */}
			</div>
			<Pagination
				className={styles.pagination}
				page={page}
				countPages={countPages}
				whenChangePage={changePageHandler}
			/>
		</article>
	)
}
