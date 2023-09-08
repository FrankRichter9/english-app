import { Table, TableCell } from '@/shared'
import { Word } from '@/types'
import styles from './words-table.module.css'
import { DeleteIcon } from '@/shared/delete-icon'
import clsx from 'clsx'

type Props = {
	words: Word[]
	className?: string
	whenWordDelete?: (id: number) => void
}

export const WordsTable = ({ words, className, whenWordDelete }: Props) => {
	const config: TableColumn[] = [
		{
			title: 'word',
			width: '200px',
		},
		{
			title: 'translate',
		},
		...(whenWordDelete ? [{
			title: 'date',
		}] : []),
	]

	const renderTableRow = (word, index) => {
		const { word: text, translate, date, id } = word
		const key = text + translate + date + index

		return (
			<div key={key} className={clsx(styles.contents, styles.row)}>
				<TableCell>{text}</TableCell>
				<TableCell>{translate}</TableCell>
				{
					whenWordDelete && (
						<TableCell>
							<DeleteIcon
								className={styles.deleteCell}
								onClick={() => whenWordDelete(id)}
							/>
						</TableCell>
					)
				}
			</div>
		)
	}

	return <Table className={className} config={config}>{words.map(renderTableRow)}</Table>
}
