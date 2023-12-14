import React, { MouseEvent, ReactNode, useRef } from 'react'

import { Props as PopupBaseProps } from '@/shared/popup-base'

import styles from './popup-content.module.css'
import { CloseIcon } from '../close-icon'

export interface Props extends Pick<PopupBaseProps, 'whenClose'> {
	title: string
	children?: ReactNode
}

export const PopupContent = ({ title, children, whenClose }: Props) => {

	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
				<CloseIcon onClick={whenClose} />
			</header>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	)
}
