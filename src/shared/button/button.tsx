import { useState, useRef, ChangeEvent, useEffect, ReactNode } from 'react'

import styles from './button.module.css'

type Props = {
	children: ReactNode
	className?: string
	whenClick: () => void
}

export const Button = ({ children, className, whenClick }: Props) => {
	return (
		<div className={[styles.root, className].join(' ')} onClick={whenClick}>
			{children}
		</div>
	)
}
