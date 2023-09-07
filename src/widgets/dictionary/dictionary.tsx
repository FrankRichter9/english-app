import { WordsAPI } from '@/api/services/words-controller'
import { WordsTable } from '@/entities'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Dictionary = () => {
	const dispatch = useDispatch()
	//@ts-ignore
	const words = useSelector(state => state?.words || [])
	console.log('words', words)
	useEffect(() => {
		WordsAPI.getWords().then((data) => {
			dispatch(
				{
					type: 'ADD_WORDS',
					payload: data.data
				}
			)
		})
	}, [])

	return (
		<article>
			<h4>All words</h4>
			<WordsTable words={[...words]} />
		</article>
	)
}
