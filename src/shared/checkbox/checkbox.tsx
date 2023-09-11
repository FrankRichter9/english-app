import { useState, useRef, ChangeEvent, useEffect, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './checkbox.module.css'

type Props = {
	checked?: boolean
	className?: string
	whenClick?: () => void
}

export const Checkbox = ({ checked = false, className, whenClick }: Props) => {
	return (
		<label className={clsx(styles.root, className)}>
			<input
				className={styles.nativeCheckbox}
				type="checkbox"
				checked={checked}
				onClick={whenClick}
			/>
		</label>
	)
}
