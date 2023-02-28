import { WordsTable } from '@/entities'

export const Dictionary = () => {
	const test = new Array(10).fill({
		text: 'test',
		translate: 'тест',
		date: '12.08.2000',
	})

	return (
		<article>
			<h4>Test dictionary name</h4>
			<WordsTable words={test} />
		</article>
	)
}
