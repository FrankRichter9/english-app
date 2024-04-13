import { Checkbox, Table, TableCell } from '@/shared'
import { Word } from '@/types'
import styles from './words-table.module.css'
import { DeleteIcon } from '@/shared/delete-icon'
import { format } from 'date-fns'
import clsx from 'clsx'
import { EditIcon } from '@/shared/edit-icon'

type Props = {
	words: Word[]
	selectedWordsMap?: Record<number, boolean>
	className?: string
	whenWordSelect?: (id: number) => void
	whenWordDelete?: (id: number) => void
	whenWordEdit?: (id: number) => void
}

export const WordsTable = ({
	words,
	selectedWordsMap = {},
	className,
	whenWordDelete,
	whenWordSelect,
	whenWordEdit
}: Props) => {
	const config: TableColumn[] = [
		{
			title: 'checkbox',
			width: '60px',
		},
		{
			title: 'word',
			width: '200px',
		},
		{
			title: 'translate',
			width: '200px',
		},
		{
			title: 'create',
			width: '200px',
		},
		{
			title: 'update',
			width: '200px',
		},
		{
			title: 'rating',
			width: '100px',
		},
		...(whenWordDelete ? [{
			title: 'Actions',
			width: '1fr',
		}] : []),
	]

	const renderTableRow = (word, index) => {
		const { word: text, translate, date, id, created_date, update_date, rating } = word
		const key = text + translate + date + index

		const dateFormat = 'dd.MM.yyyy   HH:mm'
		const created = format(new Date(created_date), dateFormat)
		const update = format(new Date(update_date), dateFormat)

		const selected = selectedWordsMap[id] || false

		return (
			<div key={key} className={clsx(styles.contents, styles.row, selected && styles.selected)}>
				<TableCell
				// whenClick={() => whenWordSelect(id)}
				>
					<Checkbox
						checked={selected}
						whenClick={(e) => {
							e.stopPropagation()
							whenWordSelect(id)
						}}
					/>
				</TableCell>
				<TableCell>{text}</TableCell>
				<TableCell>{translate}</TableCell>
				<TableCell className={styles.dataCell}>{created}</TableCell>
				<TableCell className={styles.dataCell}>{update}</TableCell>
				<TableCell>{rating}</TableCell>
				<TableCell className={styles.actionsCell}>
					{whenWordEdit && (
						<EditIcon
							className={styles.action}
							onClick={() => whenWordEdit(id)}
						/>
					)}
					{whenWordDelete && (
						<DeleteIcon
							className={styles.action}
							onClick={() => whenWordDelete(id)}
						/>
					)}
				</TableCell>
			</div>
		)
	}

	return <Table className={className} config={config}>{words.map(renderTableRow)}</Table>
}
