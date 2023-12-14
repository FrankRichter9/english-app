import { Link } from 'react-router-dom'
import styles from './nav-menu-item.module.css'
import clsx from 'clsx'

interface Props {
	title: string
	link: string
	active: boolean
}

export const NavMenuItem = (props: Props) => {
	const { title, link, active } = props

	return (
		<Link
			className={clsx(styles.root, active && styles.active)}
			to={link}
		>
			<div className={styles.title}>{title}</div>
			{/* {active && <div className={styles.activeChevron} />} */}
		</Link>
	)
}
