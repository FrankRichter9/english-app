import { MenuItem, NavMenu } from '@/entities'
import { Button, Input, Logo } from '@/shared'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './add-word-form.module.css'
import { WordsAPI } from '@/api/services/words-controller'
import { useDispatch } from 'react-redux'
import { updateWords } from '@/store/actions/words'
import { useSearchParams } from 'react-router-dom'

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
	const { handleSubmit, control } = useForm<AddWordForm>({
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
							whenChange={field.onChange}
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
							rightContent={(
								<div className={styles.autoTranslateButton}>auto translate</div>
							)}
						/>
					)}
				/>
				<Button>
					Add word
				</Button>
			</form>
		</article >
	)
}
