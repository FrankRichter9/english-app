import styles from './tabs.module.css'

export const Tabs = ({ children }) => {
	return (
		<div className={styles.root}>
			{children}
		</div>
	)
}
