import { MenuItem, NavMenu } from '@/entities'
import { Button, Input, Logo } from '@/shared'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './add-word-form.module.css'
import { WordsAPI } from '@/api/services/words-controller'
import { useDispatch } from 'react-redux'
import { updateWords } from '@/store/actions/words'
import { useSearchParams } from 'react-router-dom'
import { TranslateAPI } from '@/api/services/translate-controller'

type Props = {
	className?: string
	whenAddWord?: () => void
}

type AddWordForm = {
	word: string
	translate: string
}

export const AddWordForm = ({ className, whenAddWord }: Props) => {
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams();
	const { handleSubmit, control, setValue } = useForm<AddWordForm>({
		defaultValues: {
			word: '',
			translate: '',
		}
	});

	const onSubmit = async (data) => {
		await WordsAPI.setWord(data)
		const page = searchParams.get('page') || 1
		WordsAPI.getWords(15, +page).then((data) => {
			dispatch(updateWords(data.data.words))
		})
		whenAddWord?.()
	};

	const [timeoutID, setTimeoutID] = useState(null)
	const [autoTranslate, setAutoTranslate] = useState<string[]>([])
	const changeInput = (value: string) => {
		timeoutID && clearTimeout(timeoutID)
		setTimeoutID(null)
		const t = value.trim()
			? setTimeout(() => {
				TranslateAPI.translate(value, 'en')
					.then(function (response) {
						const text = response.data.translate
						const translate = response.data.synonyms.ru.flat()
						translate.unshift(text)

						translate.slice(0, 5)

						setAutoTranslate(translate)
					})
					.catch(function (error) {
						console.log(error)
					})
					.finally(function () {
						setTimeoutID(null)
					})
			}, 500)
			: null
		setTimeoutID(t)

		// if (!value.trim()) {
		// 	setSecondInputValue('')
		// }

		// setFirstInputValue(value)
	}

	return (
		<article className={styles.root}>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Controller
					name="word"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<Input
							value={field.value}
							whenChange={(v) => {
								changeInput(v)
								field.onChange(v)
							}}
							placeholder='Word'
						/>
					)}
				/>
				<Controller
					name="translate"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<Input
							value={field.value}
							whenChange={field.onChange}
							placeholder='Translate'
						// rightContent={(
						// 	<div className={styles.autoTranslateButton}>auto translate</div>
						// )}
						/>
					)}
				/>
				<div className={styles.autoTranslateBlock}>
					<span>Auto translate:</span>
					{
						autoTranslate.map((word, i) => (
							<span onClick={() => setValue('translate', word)}>{i === (autoTranslate.length - 1) ? word : `${word},`}</span>
						))
					}
				</div>
				<Button>
					Add word
				</Button>
			</form>
		</article >
	)
}
