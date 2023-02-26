import { Table, TableCell } from '@/shared'
import { Word } from '@/types'
import styles from './words-table.module.css'

type Props = {
	words: Word[]
}

export const WordsTable = ({ words } : Props) => {
	const config: TableColumn[] = [
		{
			title: 'word',
			width: '200px',
		},
		{
			title: 'translate',
		},
		{
			title: 'date',
		},
	]

	const renderTableRow = (word) => {
		const { text, translate, date } = word

		return (
			<div className={[styles.contents, styles.row].join(' ')}>
				<TableCell>{text}</TableCell>
				<TableCell>{translate}</TableCell>
				<TableCell>{date}</TableCell>
			</div>
		)
	}

	return <Table config={config}>{words.map(renderTableRow)}</Table>
}
