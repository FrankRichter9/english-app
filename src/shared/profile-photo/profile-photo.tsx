import styles from './profile-photo.module.css'

export const ProfilePhoto = () => {
	return (
		<div className={styles.root}>
			<img
				src={require('../../static/profile_photo.png')}
				alt="profile photo"
				width="38"
				height="38"
			/>
		</div>
	)
}
