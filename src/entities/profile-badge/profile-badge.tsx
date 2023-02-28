import { Link } from 'react-router-dom'
import { ProfilePhoto } from '../../shared/profile-photo'
import styles from './profile-badge.module.css'

type Props = {
	title: string
	email: string
}

export const ProfileBadge = ({ title, email }: Props) => {
	return (
		<div className={styles.root}>
			<ProfilePhoto />
			<div>
				<div className={styles.title}>{title}</div>
				<div className={styles.email}>{email}</div>
			</div>
			<div className={styles.icons}>
				<div>P</div>
				<div>S</div>
				<Link to="/login">O</Link>
			</div>
		</div>
	)
}
