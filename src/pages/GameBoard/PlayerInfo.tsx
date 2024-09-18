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
import { useSelectAttacer } from '../../store/select-attacer'
import { EnumTypeCard } from '../../types/cards'
import { useGameStore } from '../../store/game.store'

interface Props {
	player: Omit<IHero, 'deck'>
	typePlayer: TPlayer
}
export function PlayerInfo({ player, typePlayer }: Props) {
	const { cardAttackerId } = useSelectAttacer()
	const { handleSelectTarget } = useEnemyTarget()
	const { opponent } = useGameStore()
	const isPlayer = typePlayer === 'player'

	const opponentTaunt = opponent.deck.find(
		(card) => card.type === EnumTypeCard.taunt && card.isOnBoard
	)

	return (
		<button
			disabled={isPlayer}
			onClick={
				isPlayer
					? () => null
					: () => {
							handleSelectTarget(undefined, true)
						}
			}
			className={cn(
				'absolute left-3 border-2 border-transparent transition-colors',
				{
					'bottom-10': isPlayer,
					'top-10': !isPlayer,
					'!border-red-500': !isPlayer && cardAttackerId && !opponentTaunt,
				}
			)}
		>
			<h2>{isPlayer ? 'Player' : 'Opponent'}</h2>
			<Badge value={player.health} maxValue={MAX_HP} color='red' />
		</button>
	)
}
