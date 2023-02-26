import { ReactNode } from 'react'
import styles from './table.module.css'

type Props = {
	config: TableColumn[]
	children: ReactNode
}

export const Table = ({ config, children }: Props) => {
	const gridTemplateColumnsString = config.reduce<string>((acc, column) => {
		const width = column.width || '1fr'

		return `${acc} ${width}`
	}, '')

	return (
		<div
			className={styles.root}
			style={{
				gridTemplateColumns: gridTemplateColumnsString,
			}}
		>
			{children}
		</div>
	)
}
