import { PopupContent, Props as PopupContentProps } from '@/shared/popup-content'
import styles from './popup.module.css'
import { PopupBase, Props as PopupBaseProps } from '@/shared/popup-base'
import { useEffect } from 'react'

type SharedProps = PopupBaseProps & PopupContentProps

interface Props extends SharedProps {
}

export const Popup = ({ show, position, title, children, whenClose }: Props) => {
	useEffect(() => {
		document.body.dataset.isOpenModal = show.toString()
	}, [show])

	return (
		<PopupBase
			show={show}
			position={position}
			whenClose={whenClose}
		>
			<PopupContent
				title={title}
				whenClose={whenClose}
			>
				{children}
			</PopupContent>
		</PopupBase>
	)
}
