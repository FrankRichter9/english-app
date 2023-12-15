import clsx from 'clsx'
import styles from './skeleton.module.css'

type Props = {
	className?: string
	style?: React.CSSProperties
}

export const Skeleton = ({ className, style }: Props) => {
	return (
		<div className={clsx(styles.root, className)} style={style} />
	)
}
