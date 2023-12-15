import { Checkbox, Table, TableCell, WordCard } from '@/shared'
import { Word } from '@/types'
import styles from './words-list.module.css'
import { DeleteIcon } from '@/shared/delete-icon'
import { format } from 'date-fns'
import clsx from 'clsx'
import { EditIcon } from '@/shared/edit-icon'

type Props = {
	words: Word[]
	loading?: boolean
	className?: string
}

export const WordsList = ({
	words,
	loading = false,
	className,
}: Props) => {

	const renderTableRow = (word, index) => {
		return (
			<WordCard word={word} loading={loading} />
		)
	}

	return <ul className={clsx(styles.root, className)} >{words.map(renderTableRow)}</ul>
}
