import clsx from 'clsx';
import React, { MouseEvent, ReactNode, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';

import styles from './popup-base.module.css'

type PopupPosition = 'center' | 'top'

export type Props = {
	show: boolean
	children?: ReactNode
	position?: PopupPosition
	whenClose: () => void
}

const animationStyles = () => ({
	'fade-enter': {
		opacity: 0,
	},
	'fade-enter-active': {
		opacity: 1,
		transition: "opacity 300ms"
	},
	'fade-exit': {
		opacity: 1,
	},
	'fade-exit-active': {
		opacity: 0,
		transition: "opacity 300ms"
	},
})

export const PopupBase = ({ show, position = 'center', whenClose, children }: Props) => {
	const nodeRef = useRef(null);
	const rootClickHandler = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		e.stopPropagation()
	}

	const classes = animationStyles()

	return (
		<CSSTransition
			in={show}
			nodeRef={nodeRef}
			timeout={450}
			classNames={{
				enter: styles.animationEnter,
				enterActive: styles.animationEnterActive,
				exit: styles.animationExit,
				exitActive: styles.animationExitActive,
			}}
			unmountOnExit
		>
			<div ref={nodeRef} className={clsx(styles.backdrop, styles[`${position}`])} onClick={whenClose}>
				<div className={styles.root} onClick={rootClickHandler}>
					{children}
				</div>
			</div>
		</CSSTransition>
	)
}
