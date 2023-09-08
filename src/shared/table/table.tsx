import { ReactNode } from 'react'
import styles from './table.module.css'
import clsx from 'clsx'

type Props = {
	config: TableColumn[]
	children: ReactNode
	className?: string
}

export const Table = ({ config, children, className }: Props) => {
	const gridTemplateColumnsString = config.reduce<string>((acc, column) => {
		const width = column.width || '1fr'

		return `${acc} ${width}`
	}, '')

	return (
		<div
			className={clsx(styles.root, className)}
			style={{
				gridTemplateColumns: gridTemplateColumnsString,
			}}
		>
			{children}
		</div>
	)
}
