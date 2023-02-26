import { Link } from 'react-router-dom'
import styles from './nav-menu-item.module.css'

interface Props {
	title: string
	link: string
	active: boolean
}

export const NavMenuItem = (props: Props) => {
	const { title, link, active } = props

	return (
		<Link
			className={[styles.root, active && styles.active].join(' ')}
			to={link}
		>
			<div className={styles.title}>{title}</div>
			{active && <div className={styles.activeChevron} />}
		</Link>
	)
}
