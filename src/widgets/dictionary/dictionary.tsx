import { WordsAPI } from '@/api/services/words-controller'
import { WordsTable } from '@/entities'
import { useEffect, useState } from 'react'

export const Dictionary = () => {
	const [words, setWords] = useState([])

	useEffect(() => {
		const words = WordsAPI.getWords().then((data) => {
			setWords(data.data)
		})
	}, [])

	return (
		<article>
			<h4>All words</h4>
			<WordsTable words={words} />
		</article>
	)
}
