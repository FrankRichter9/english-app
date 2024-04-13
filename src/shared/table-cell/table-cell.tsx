import { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './table-cell.module.css'

type Props = {
	children?: ReactNode,
	whenClick?: () => void,
	className?: string
}

export const TableCell = ({ whenClick, children, className }: Props) => {
	return (
		<div
			className={clsx(styles.root, className)}
			onClick={whenClick}
		>
			{children}
		</div>
	)
}
