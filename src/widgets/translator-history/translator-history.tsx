import { MenuItem, NavMenu } from '@/entities'
import { HistoryTable } from '@/entities/history-table'
import { Button } from '@/shared'
import { Word } from '@/types'

type Props = {
	className?: string
}

export const TranslatorHistory = ({ className }: Props) => {

	return (
		<section>
			<HistoryTable
				words={new Array(8).fill({
					text: 'test',
					translate: 'тест',
					date: '12.08.2000',
				})}
			/>
			<Button
				whenClick={() => null}
			>
				Clear history
			</Button>
		</section>
	)
}
