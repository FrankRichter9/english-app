import { useState, useRef, ChangeEvent, useEffect } from 'react'

import styles from './input.module.css'

type Props = {
	value: string
	placeholder?: string
	type?: string
	className?: string
	banUserInput?: boolean
	whenChange: (value: string) => void
}

export const Input = ({
	value,
	placeholder,
	type,
	banUserInput = false,
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
			className={[
				styles.root,
				className,
				isFocused && styles.focused,
				banUserInput && styles.banUserInput,
			].join(' ')}
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
			{value && <svg onClick={() => whenChange('')} className={styles.clearIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="14px" height="14px"><g stroke-width="3" stroke-linecap="butt" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path transform="scale(5.12,5.12)" d="M25,22.15625l15.84375,-15.84375l2.84375,2.84375l-15.84375,15.84375l15.9375,15.9375l-2.84375,2.84375l-15.9375,-15.9375l-15.96875,15.9375l-2.8125,-2.8125l15.9375,-15.96875l-15.84375,-15.84375l2.84375,-2.84375z" id="strokeMainSVG"></path></g><g stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path></g></g></svg>}
		</div>
	)
}
