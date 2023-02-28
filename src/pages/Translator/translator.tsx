import React, { useState } from 'react'
import styles from './translator.module.css'
import { MainLayout } from '~/layouts/main-layout'
import { Input, Tab, Tabs } from '@/shared'
import { Lang } from '@/types'

export const Translator = () => {
	const [firstInputValue, setFirstInputValue] = useState('')
	const [secondInputValue, setSecondInputValue] = useState('')

	const [firstInputLang, setFirstInputLang] = useState<Lang>('ru')
	const [secondInputLang, setSecondInputLang] = useState<Lang>('ru')

	const reverseMap: Record<Lang, Lang> = {
		en: 'ru',
		ru: 'en',
	}

	const tabClickHandler = (
		text: string,
		setState: React.Dispatch<React.SetStateAction<Lang>>
	) => {
		const lang = text.toLocaleLowerCase() as Lang
		setState(lang)
		if (setState === setFirstInputLang) {
			setSecondInputLang(reverseMap[lang])
		} else {
			setFirstInputLang(reverseMap[lang])
		}
	}

	return (
		<MainLayout>
			<main className={styles.page}>
				<h2>Translator</h2>

				<article className={styles.inputsBlock}>
					<div>
						<Tabs>
							<Tab
								text="Ru"
								active={firstInputLang === 'ru'}
								whenChange={(value) =>
									tabClickHandler(value, setFirstInputLang)
								}
							/>
							<Tab
								text="En"
								active={firstInputLang === 'en'}
								whenChange={(value) =>
									tabClickHandler(value, setFirstInputLang)
								}
							/>
						</Tabs>
						<Input
							className={styles.rootInput}
							placeholder="Введите слово или фразу..."
							value={firstInputValue}
							whenChange={setFirstInputValue}
						/>
					</div>
					<div>
						<Tabs>
							<Tab
								text="Ru"
								active={secondInputLang === 'ru'}
								whenChange={(value) =>
									tabClickHandler(value, setSecondInputLang)
								}
							/>
							<Tab
								text="En"
								active={secondInputLang === 'en'}
								whenChange={(value) =>
									tabClickHandler(value, setSecondInputLang)
								}
							/>
						</Tabs>
						<Input
							className={styles.rootInput}
							placeholder="Получите перевод"
							value={secondInputValue}
							whenChange={setSecondInputValue}
							banUserInput
						/>
					</div>
				</article>
				<article className={styles.info}>
					<h4>More information</h4>
					<div>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Sunt quod corporis nihil magnam labore magni
							eum error molestias. Omnis facilis laudantium dolore
							voluptates odio ad, veritatis autem illo iure saepe?
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Ex rerum laboriosam obcaecati nihil optio quo,
							enim minus nisi quisquam veniam repudiandae dolor,
							doloremque molestias necessitatibus voluptatum quasi
							saepe temporibus ullam!
						</div>
						<h4>Synonyms</h4>
						<ul>
							<li>ipsum</li>
							<li>laboriosam</li>
							<li>odio</li>
							<li>voluptatum</li>
							<li>necessitatibus</li>
						</ul>
					</div>
				</article>
			</main>
		</MainLayout>
	)
}
