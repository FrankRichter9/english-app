import { MenuItem, NavMenu } from '@/entities'
import { Logo } from '@/shared'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './main-menu.module.css'
import { AuthAPI } from '@/api/services/auth-controller'
import { useDispatch } from 'react-redux'
import { updateUser } from '@/store/actions/users'
import clsx from 'clsx'
import { UserBadge } from '../user-badge'

type Props = {
	className?: string
}

export const MainMenu = ({ className }: Props) => {
	const location = useLocation()
	const dispatch = useDispatch()

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
			title: 'Log out',
			link: '/login',
			active: location.pathname === '/login',
		},
	])

	const logoutHandler = async () => {
		const { data } = await AuthAPI.logout()

		if (data) {
			dispatch(updateUser(null))
		}
	}

	return (
		<>
			<article className={clsx(styles.root, className)}>
				<Logo />
				<NavMenu className={styles.menu} items={menuItemsArr} />
				<NavMenu className={styles.subMenu} items={subMenuItemsArr} />
				<NavMenu className={styles.subMenu} items={settingsMenuItemsArr} />
				<div className={styles.loginMenu} onClick={logoutHandler}>
					{
						location.pathname !== '/' && <UserBadge />
					}
					<NavMenu
						items={loginMenuItemsArr}
					/>
				</div>
			</article>
			<div className={styles.fix} />
		</>
	)
}
