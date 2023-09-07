import { MainMenu } from '@/widgets'
import styles from './main-layout.module.css'

export const MainLayout = ({ children }) => {
	return (
		<>
			<div className={styles.page} id="page">
				<MainMenu />
				<main className={styles.main}>{children}</main>
			</div>
		</>
	)
}
