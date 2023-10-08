import React, { MouseEvent, ReactNode, useRef } from 'react'
import clsx from 'clsx'

import styles from './delete-icon.module.css'

type Props = {
	className?: string,
	onClick?: () => void
}

export const DeleteIcon = ({ className, onClick }: Props) => {
	return (
		<svg
			className={clsx(styles.root, className)}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			onClick={onClick}
		>
			<path d="M17.3333 7.1C17.5101 7.1 17.6797 7.17375 17.8047 7.30503C17.9298 7.4363 18 7.61435 18 7.8C18 7.98565 17.9298 8.1637 17.8047 8.29497C17.6797 8.42625 17.5101 8.5 17.3333 8.5H16.6667L16.6647 8.5497L16.0427 17.6994C16.0187 18.0526 15.8682 18.3832 15.6214 18.6245C15.3746 18.8658 15.0499 19 14.7127 19H9.28667C8.94943 19 8.62471 18.8658 8.37792 18.6245C8.13114 18.3832 7.98061 18.0526 7.95667 17.6994L7.33467 8.5504C7.33366 8.53362 7.33321 8.51681 7.33333 8.5H6.66667C6.48986 8.5 6.32029 8.42625 6.19526 8.29497C6.07024 8.1637 6 7.98565 6 7.8C6 7.61435 6.07024 7.4363 6.19526 7.30503C6.32029 7.17375 6.48986 7.1 6.66667 7.1H17.3333ZM15.3313 8.5H8.66867L9.28733 17.6H14.7127L15.3313 8.5ZM13.3333 5C13.5101 5 13.6797 5.07375 13.8047 5.20503C13.9298 5.3363 14 5.51435 14 5.7C14 5.88565 13.9298 6.0637 13.8047 6.19497C13.6797 6.32625 13.5101 6.4 13.3333 6.4H10.6667C10.4899 6.4 10.3203 6.32625 10.1953 6.19497C10.0702 6.0637 10 5.88565 10 5.7C10 5.51435 10.0702 5.3363 10.1953 5.20503C10.3203 5.07375 10.4899 5 10.6667 5H13.3333Z" />
		</svg>
	)
}