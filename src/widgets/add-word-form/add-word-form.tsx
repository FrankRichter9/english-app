import { MenuItem, NavMenu } from '@/entities'
import { Button, Input, Logo } from '@/shared'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './add-word-form.module.css'
import { WordsAPI } from '@/api/services/words-controller'

type Props = {
	className?: string
	whenAddWord?: () => void
}

type AddWordForm = {
	word: string
	translate: string
}

export const AddWordForm = ({ className, whenAddWord }: Props) => {
	const { handleSubmit, control } = useForm<AddWordForm>({
		defaultValues: {
			word: '',
			translate: '',
		}
	});

	const onSubmit = data => {
		WordsAPI.setWord(data)
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
