import { ProfileBadge } from '@/entities'
import { useSelector } from 'react-redux'

type Props = {
	className?: string
}

export const UserBadge = ({ className }: Props) => {
	//@ts-ignore
	const user = useSelector(state => state.user.user || null)

	return (
		<ProfileBadge
			title={user?.username}
			email={user?.email}
		/>
	)
}
