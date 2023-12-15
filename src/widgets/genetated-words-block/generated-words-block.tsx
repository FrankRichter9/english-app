import { WordsAPI } from '@/api/services/words-controller'
import { ProfileBadge, WordsList } from '@/entities'
import { updateGeneratedWords } from '@/store/actions/words'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
	className?: string
}

export const GeneratedWordsBlock = ({ className }: Props) => {
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
	//@ts-ignore
	const genetatedWords = useSelector(state => state?.words.genetatedWords || Array.from({ length: 10 }).fill({ word: 'test', translate: 'test' }))

	useEffect(() => {
		if (genetatedWords.length && genetatedWords[0].translate !== 'test') {
			return
		}
		setLoading(true)
		WordsAPI.getGenerateWords().then((data) => {
			dispatch(updateGeneratedWords(data.data.words))
			setLoading(false)
		})
	}, [])

	// const words = [
	// 	{ word: 'test', translate: 'test', id: 1, date: 'test' },
	// { word: 'test', translate: 'test' }
	// ]

	return (
		<WordsList className={className} words={genetatedWords} loading={loading} />
	)
}
