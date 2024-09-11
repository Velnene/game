import cn from 'clsx'

interface Props {
	value: number
	maxValue: number
	color: 'blue' | 'red'
}

export function Badge({ value, maxValue, color }: Props) {
	return (
		<div
			className={cn(`bg-gradient-to-t py-1 px-5 rounded-2xl shadow-lg w-max`, {
				'from-sky-700 to-sky-300': color === 'blue',
				'from-red-600 to-red-400': color === 'red',
			})}
		>
			{value}/{maxValue}
		</div>
	)
}
