import { WordsTable } from '@/entities'

export const Dictionary = () => {
	const test = new Array(10).fill({
		text: 'test',
		translate: 'тест',
		date: '12.08.2000',
	})

	return (
		<article>
			<h3>Test dictionary name</h3>
			<WordsTable words={test} />
		</article>
	)
}
