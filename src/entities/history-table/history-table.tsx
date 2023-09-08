import { Button, Table, TableCell } from '@/shared'
import { Word } from '@/types'
import styles from './history-table.module.css'
import clsx from 'clsx'

type Props = {
	words: Word[]
}

export const HistoryTable = ({ words }: Props) => {
	const config: TableColumn[] = [
		{
			title: 'checkbox',
			width: '40px',
		},
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
		{
			title: 'actions',
			width: '150px',
		},
	]

	const renderTableRow = (word, index) => {
		const { text, translate, date } = word
		const key = text + translate + date + index

		return (
			<div key={key} className={clsx(styles.contents, styles.row)}>
				<TableCell>
					<input type={'checkbox'} />
				</TableCell>
				<TableCell>{text}</TableCell>
				<TableCell>{translate}</TableCell>
				<TableCell>{date}</TableCell>
				<TableCell
					className={styles.actionCell}
				>
					<Button
						whenClick={() => null}
					>
						Save
					</Button>
					<Button
						whenClick={() => null}
					>
						Delete
					</Button>
				</TableCell>
			</div>
		)
	}

	return <Table config={config}>{words.map(renderTableRow)}</Table>
}
