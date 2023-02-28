import { MainLayout } from '@/layouts/main-layout'
import { Input } from '@/shared'
import { Dictionary } from '@/widgets'
import React from 'react'
import styles from './words.module.css'

export class Words extends React.Component {
	render() {
		return (
			<MainLayout>
				<main className={styles.page}>
					<h2>Words</h2>
					<article className={styles.addWordBlock}>
						<Input
							className={styles.addInput}
							value=""
							whenChange={() => null}
							placeholder="Введите слово чтобы добавить.."
						/>
						<Input
							className={styles.addInput}
							value=""
							whenChange={() => null}
							placeholder="Введите перевод"
						/>
					</article>
					<Dictionary />
				</main>
			</MainLayout>
		)
	}
}
