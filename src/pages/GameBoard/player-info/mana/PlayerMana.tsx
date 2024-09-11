import { Badge } from '../../../../components/ui/Badge'

interface Props {
	mana: number
	maxMana: number
}

export function PlayerMana({ mana, maxMana }: Props) {
	return (
		<>
			<Badge value={mana} maxValue={maxMana} color='blue' />
			<div>
				{new Array(maxMana).fill(0).map((_, index) => (
					<div
						key={index}
						className={'w-6 h-6 rounded-full mx-1 from-sky-300'}
					></div>
				))}
			</div>
		</>
	)
}
