import { Badge } from '../../components/ui/Badge'
import {
	INITIAL_HP,
	INITIAL_MANA,
	MAX_HP,
	MAX_MANA,
} from '../../constans/game/core.constants'
import { IHero, TPlayer } from '../../types/game.store.types'
import cn from 'clsx'
import { useEnemyTarget } from './board-card/useEnemyTarget'

interface Props {
	player: Omit<IHero, 'deck'>
	typePlayer: TPlayer
}
export function PlayerInfo({ player, typePlayer }: Props) {
	const { handleSelectTarget } = useEnemyTarget()
	const isPalyer = typePlayer === 'player'
	return (
		<button
			disabled={isPalyer}
			onClick={
				isPalyer
					? () => null
					: () => {
							handleSelectTarget(undefined, true)
						}
			}
			className={cn('absolute left-3', {
				'bottom-10': isPalyer,
				'top-10': !isPalyer,
			})}
		>
			<h2>{isPalyer ? 'Player' : 'Opponent'}</h2>
			<Badge value={player.health} maxValue={MAX_HP} color='red' />
		</button>
	)
}
