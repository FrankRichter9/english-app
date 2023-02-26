import { MenuItem, NavMenuItem } from '../nav-menu-item'
import styles from './nav-menu.module.css'

type Props = {
	items: MenuItem[]
	className?: string
}

export const NavMenu = ({ items, className }: Props) => {
	return (
		<nav className={[styles.root, className].join(' ')}>
			{items.map(({ title, link, active }) => (
				<NavMenuItem
					key={title}
					title={title}
					link={link}
					active={active}
				/>
			))}
		</nav>
	)
}
