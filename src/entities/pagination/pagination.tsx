import { Link } from 'react-router-dom'
import { ProfilePhoto } from '../../shared/profile-photo'
import styles from './pagination.module.css'
import clsx from 'clsx'

type Props = {
	page: number
	countPages: number
	className?: string
	whenChangePage: (page: number) => void
}

export const Pagination = ({ page: propPage, countPages, className, whenChangePage }: Props) => {
	return (
		<div className={clsx(styles.root, className)}>
			{
				(Array.from({ length: countPages })).map((_, index) => {
					const page = index + 1
					const active = page === propPage

					return (
						<div
							key={page}
							className={clsx(styles.pageBlock, active && styles.active)}
							onClick={!active ? () => whenChangePage(page) : undefined}
						>
							{page}
						</div>
					)
				})
			}
		</div>
	)
}
