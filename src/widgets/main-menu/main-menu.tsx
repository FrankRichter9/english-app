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

	const [subMenuItemsArr] = useState<MenuItem[]>([
		{
			title: 'Translator',
			link: '/translator',
			active: location.pathname === '/translator',
		},
	])

	const [settingsMenuItemsArr] = useState<MenuItem[]>([
		{
			title: 'Settings',
			link: '/settings',
			active: location.pathname === '/settings',
		},
	])

	const [loginMenuItemsArr] = useState<MenuItem[]>([
		{
			title: 'Log in',
			link: '/login',
			active: location.pathname === '/login',
		},
	])

	return (
		<article className={styles.root}>
			<Logo />
			<NavMenu className={styles.menu} items={menuItemsArr} />
			<NavMenu className={styles.subMenu} items={subMenuItemsArr} />
			<NavMenu className={styles.subMenu} items={settingsMenuItemsArr} />
			<NavMenu
				className={styles.loginMenu}
				items={loginMenuItemsArr}
			/>
		</article>
	)
}
