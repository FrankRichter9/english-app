import { SidebarContent, Props as SidebarContentProps } from '@/shared/sidebar-content'
import styles from './sidebar.module.css'
import { SidebarBase, Props as SidebarBaseProps } from '@/shared/sidebar-base'

type SharedProps = SidebarBaseProps & SidebarContentProps

interface Props extends SharedProps {
}

export const Sidebar = ({ show, title, children, whenClose }: Props) => {

	return (
		<SidebarBase
			show={show}
			whenClose={whenClose}
		>
			<SidebarContent
				title={title}
				whenClose={whenClose}
			>
				{children}
			</SidebarContent>
		</SidebarBase>
	)
}
