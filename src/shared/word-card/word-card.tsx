import { randomInRange } from '@/helpers/randomInRange'
import { Word } from '@/types'
import { Skeleton } from '../skeleton'
import styles from './word-card.module.css'

type Props = {
	word: Word
	loading?: boolean
}

export const WordCard = ({ word, loading = false }: Props) => {
	return !loading ? (
		<div className={styles.root}>
			<div>{word.word}</div>
			<div>{word.translate}</div>
		</div>
	) : (
		<div className={styles.root}>
			<div>
				<Skeleton className={styles.skeleton} style={{
					width: `${randomInRange(70, 150)}px`
				}} />
			</div>
			<div>
				<Skeleton className={styles.skeleton} style={{
					width: `${randomInRange(70, 150)}px`
				}} />
			</div>
		</div>
	)
}
