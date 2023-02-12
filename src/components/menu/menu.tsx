import React from 'react'
import styles from './menu.module.css'

interface Props {
	status: string
}

export class Menu extends React.Component<Props> {
	render() {
		return (
			<div className="App">
				{this.props.status}
				<h1 className={styles.test}>menu</h1>
				<h3>dsds</h3>
			</div>
		)
	}
}
