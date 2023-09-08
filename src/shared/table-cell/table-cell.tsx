import { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './table-cell.module.css'

type Props = {
	children?: ReactNode,
	className?: string
}

export const TableCell = ({ children, className }: Props) => {
	return <div className={clsx(styles.root, className)}>{children}</div>
}
