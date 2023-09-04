import React, { MouseEvent, ReactNode, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';

import styles from './sidebar.module.css'

type Props = {
	show: boolean
	children?: ReactNode
	whenClose: () => void
}

const animationStyles = () => ({
    'fade-enter':{
        opacity: 0,
    },
    'fade-enter-active':{
        opacity: 1,
        transition: "opacity 300ms"
    },
    'fade-exit':{
        opacity: 1,
    },
    'fade-exit-active':{
        opacity: 0,
        transition: "opacity 300ms"
    },
})

export const Sidebar = ({ show, whenClose, children }: Props) => {
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
			<div ref={nodeRef} className={styles.backdrop} onClick={whenClose}>
				<div className={styles.root} onClick={rootClickHandler}>
					<h1>test</h1>
				</div>
			</div>
		</CSSTransition>
	)
}