import { Badge } from '../../components/ui/Badge'
import { INITIAL_HP, INITIAL_MANA, MAX_HP, MAX_MANA } from '../../constans/game/core.constants'
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
			<Badge value={INITIAL_HP} maxValue={MAX_HP} color='red' />
			<Badge value={INITIAL_MANA} maxValue={MAX_MANA} color='blue' />
		</div>
	)
}
