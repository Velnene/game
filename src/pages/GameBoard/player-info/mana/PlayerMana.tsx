import { Badge } from '../../../../components/ui/Badge'
import cn from 'clsx'

interface Props {
	mana: number
	maxMana: number
}

export function PlayerMana({ mana, maxMana }: Props) {
	return (
		<div className='flex absolute right-2 bottom-7'>
			<Badge value={mana} maxValue={maxMana} color='blue' />
			<div className='flex'>
				{new Array(maxMana).fill(0).map((_, index) => (
					<div
						key={index}
						className={cn(
							'w-6 h-6 bg-gradient-to-t rounded-full mx-1 from-sky-700',
							index < mana ? 'to-sky-400' : 'to-sky-950'
						)}
					></div>
				))}
			</div>
		</div>
	)
}
