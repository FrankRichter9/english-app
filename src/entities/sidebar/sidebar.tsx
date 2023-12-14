import { SidebarContent, Props as SidebarContentProps } from '@/shared/sidebar-content'
import styles from './sidebar.module.css'
import { SidebarBase, Props as SidebarBaseProps } from '@/shared/sidebar-base'
import { useEffect } from 'react'

type SharedProps = SidebarBaseProps & SidebarContentProps

interface Props extends SharedProps {
}

export const Sidebar = ({ show, title, children, whenClose }: Props) => {
	useEffect(() => {
		document.body.dataset.isOpenModal = show.toString()
	}, [show])

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
