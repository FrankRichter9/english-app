import { MainLayout } from "@/layouts/main-layout"

import styles from './settings.module.css'
import { Button } from "@/shared"
import { useTheme } from "@/hooks/useTheme"

export const Settings = () => {
	const { theme, setTheme } = useTheme()

	return (
		<MainLayout>
			<main className={styles.page}>
				<h2>Settings</h2>
				<div className={styles.buttonsBlock}>
					<Button
						whenClick={() => setTheme('light')}
					>
						Light
					</Button>
					<Button
						whenClick={() => setTheme('dark')}
					>
						Dark
					</Button>
				</div>
			</main>
		</MainLayout>
	)
}
