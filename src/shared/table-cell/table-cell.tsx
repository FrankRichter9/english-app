import { ReactNode } from 'react'
import styles from './table-cell.module.css'

type Props = {
	children?: ReactNode,
	className?: string
}

export const TableCell = ({ children, className }: Props) => {
	return <div className={[styles.root, className].join(' ')}>{children}</div>
}
