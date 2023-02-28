import { Lang } from '@/types'
import styles from './tab.module.css'

type Props = {
	text: string
	active: boolean
	whenChange: (value: string) => void
}

export const Tab = ({ text, active, whenChange }: Props) => {
	return (
		<div className={[styles.root, active && styles.active].join(' ')} onClick={() => whenChange(text)}>
			{text}
			{active && <div className={styles.activeLine} />}
		</div>
	)
}
