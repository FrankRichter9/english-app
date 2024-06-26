import { useState, useRef, ChangeEvent, useEffect } from 'react'
import clsx from 'clsx'

import styles from './input.module.css'
import { CloseIcon } from '../close-icon'

type Props = {
	value: string
	placeholder?: string
	type?: string
	className?: string
	banUserInput?: boolean
	rightContent?: React.ReactElement
	whenChange: (value: string) => void
}

export const Input = ({
	value,
	placeholder,
	type,
	banUserInput = false,
	rightContent,
	className,
	whenChange,
}: Props) => {
	const input = useRef(null)
	const [isFocused, setFocused] = useState(false)

	useEffect(() => {
		input.current.value = value
	}, [value])

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		whenChange(e.target.value)
	}

	const inputClickHandler = () => {
		if (banUserInput) {
			return
		}
		input.current.focus()
	}

	return (
		<div
			className={clsx(
				styles.root,
				className,
				isFocused && styles.focused,
				banUserInput && styles.banUserInput,
			)}
			onClick={inputClickHandler}
		>
			<input
				className={styles.baseInput}
				ref={input}
				type={type || 'text'}
				value={value}
				placeholder={placeholder}
				disabled={banUserInput}
				onChange={(e) => !banUserInput && inputChangeHandler(e)}
				onFocus={() => !banUserInput && setFocused(true)}
				onBlur={() => !banUserInput && setFocused(false)}
			/>
			{rightContent && (
				<div className={clsx(styles.rightContent, value && styles.hasCloseIcon)}>
					{rightContent}
				</div>
			)}
			{value && <CloseIcon onClick={() => whenChange('')} />}
		</div>
	)
}
