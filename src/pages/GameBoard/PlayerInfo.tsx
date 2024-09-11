import { Badge } from '../../components/ui/Badge'
import { IHero, TPlayer } from '../../types/game.store.types'
import cn from 'clsx'

interface Props {
	player: Omit<IHero, 'deck'>
	typePlayer: TPlayer
}
export function PlayerInfo({ player, typePlayer }: Props) {
	const isPalyer = typePlayer === 'player'
	return (
		<div
			className={cn('absolute left-3', {
				'bottom-10': isPalyer,
				'top-10': !isPalyer,
			})}
		>
			<h2>{isPalyer ? 'Player' : 'Opponent'}</h2>
			<Badge value={25} maxValue={26} color='red' />
			<Badge value={1} maxValue={6} color='blue' />
		</div>
	)
}
