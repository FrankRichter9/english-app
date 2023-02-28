import { MenuItem, NavMenu } from '@/entities'
import { Logo } from '@/shared'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './main-menu.module.css'

type Props = {
	className?: string
}

export const MainMenu = ({ className }: Props) => {
	const location = useLocation()

	const [menuItemsArr] = useState<MenuItem[]>([
		{
			title: 'Main',
			link: '/',
			active: location.pathname === '/',
		},
		{
			title: 'Dictionary',
			link: '/dictionary',
			active: location.pathname === '/dictionary',
		},
		{
			title: 'Words',
			link: '/words',
			active: location.pathname === '/words',
		},
	])

	const [subMenumenuItemsArr] = useState<MenuItem[]>([
		{
			title: 'Translator',
			link: '/translator',
			active: location.pathname === '/translator',
		},
	])

	return (
		<article className={styles.root}>
			<Logo />
			<NavMenu className={styles.menu} items={menuItemsArr} />
			<NavMenu className={styles.subMenu} items={subMenumenuItemsArr} />
		</article>
	)
}
