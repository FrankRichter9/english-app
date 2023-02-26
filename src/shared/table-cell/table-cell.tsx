import styles from './table-cell.module.css'

export const TableCell = ({ children }) => {
	return <div className={styles.root}>{children}</div>
}
