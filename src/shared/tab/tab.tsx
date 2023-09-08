import { Lang } from '@/types'
import clsx from 'clsx'

import styles from './tab.module.css'

type Props = {
	text: string
	active: boolean
	whenChange: (value: string) => void
}

export const Tab = ({ text, active, whenChange }: Props) => {
	return (
		<div className={clsx(styles.root, active && styles.active)} onClick={() => whenChange(text)}>
			{text}
			{active && <div className={styles.activeLine} />}
		</div>
	)
}
