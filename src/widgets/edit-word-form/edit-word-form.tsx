import { MenuItem, NavMenu } from '@/entities'
import { Button, Input, Logo } from '@/shared'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './edit-word-form.module.css'
import { WordsAPI } from '@/api/services/words-controller'
import { useDispatch } from 'react-redux'
import { updateWords } from '@/store/actions/words'
import { Word } from '@/types'
import { useSearchParams } from 'react-router-dom'

type Props = {
	data: Word | null
	className?: string
	whenEditWord?: () => void
}

type EditWordFormType = {
	word: string
	translate: string
}

export const EditWordForm = ({ data, className, whenEditWord }: Props) => {
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams();
	const { handleSubmit, control } = useForm<EditWordFormType>({
		defaultValues: {
			word: data?.word || '',
			translate: data?.translate || '',
		}
	});

	const onSubmit = async (newData) => {
		await WordsAPI.patchWord({
			...data,
			...newData
		})
		const page = searchParams.get('page') || 1
		WordsAPI.getWords(15, +page).then((data) => {
			dispatch(updateWords(data.data.words))
		})
		whenEditWord?.()
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
						/>
					)}
				/>
				<Button>
					Edit word
				</Button>
			</form>
		</article >
	)
}
