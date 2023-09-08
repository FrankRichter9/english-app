import { useState, useRef, ChangeEvent, useEffect, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './button.module.css'

type Props = {
	children: ReactNode
	className?: string
	whenClick?: () => void
}

export const Button = ({ children, className, whenClick }: Props) => {
	return (
		<button
			className={clsx(styles.reset, styles.root, className)}
			type='submit'
			onClick={whenClick}
		>
			{children}
		</button>
	)
}
