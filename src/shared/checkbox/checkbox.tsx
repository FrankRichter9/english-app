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
			{checked && (
				<svg
					className={styles.icon}
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path d="M10.4258 5.49865L7.15842 8.77002L5.96281 7.57304C5.74264 7.35237 5.38549 7.35237 5.16532 7.57304C4.94489 7.79347 4.94489 8.15103 5.16532 8.37145L6.7598 9.96776C6.86989 10.078 7.01441 10.1333 7.15867 10.1333C7.30294 10.1333 7.44721 10.0782 7.5573 9.96776L11.2236 6.2973C11.4437 6.07663 11.4437 5.71932 11.2236 5.49865C11.0031 5.27822 10.6462 5.27822 10.4258 5.49865Z" />
				</svg>
			)}
			<input
				className={styles.nativeCheckbox}
				type="checkbox"
				checked={checked}
				onClick={whenClick}
			/>
		</label>
	)
}
