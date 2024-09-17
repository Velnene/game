import { motion } from 'framer-motion'
import { IGameCard } from '../../../types/game.store.types'
import cn from 'clsx'
import { useGameStore } from '../../../store/game.store'
import { useEnemyTarget } from './useEnemyTarget'
import { useSelectAttacer } from '../../../store/select-attacer'

interface Props {
	deck: IGameCard[]
	isPlayer: boolean
}

export function BoardCard({ deck, isPlayer }: Props) {
	const { returnCard, player, isPlayerTurn } = useGameStore()
	const { handleSelectTarget } = useEnemyTarget()
	const { setCardAttacerrId, cardAttackerId } = useSelectAttacer()
	const showCard = isPlayer ? 200 : -200

	const handleClick = (card: IGameCard) => {
		if (!isPlayerTurn) return
		if (isPlayer) {
			if (card.isCanAttack && player) {
				setCardAttacerrId(card.id)
			} else if (card.isPlayedThisTurn) {
				returnCard(card.id)
			}
		} else {
			handleSelectTarget(card.id)
		}
	}
	return (
		<div className='flex justify-center'>
			{deck
				.filter((card) => card.isOnBoard)
				.map((card) => (
					<motion.button
						className={cn(
							'w-32 bg-yellow-300 shadow mx-1 flex justify-center items-center cursor-default ',
							isPlayerTurn && {
								'border-4 transition-colors': isPlayer,
								'border-transparent': !card.isCanAttack,
								'border-green-500':
									card.isCanAttack &&
									!(isPlayer && cardAttackerId === card.id) &&
									isPlayer,
								'border-l-blue-700': isPlayer && cardAttackerId === card.id,
							}
						)}
						key={card.id}
						initial={{
							scale: 0.5,
							rotate: -15,
							y: showCard,
							opacity: 0,
							x: -10,
						}}
						animate={{ scale: 1, rotate: 0, y: 0, opacity: 1, x: 0 }}
						transition={{ type: 'just', stiffness: 300, damping: 30, mass: 1 }}
						onClick={() => handleClick(card)}
					>
						<img
							alt={card.name}
							src={require('../../../../public/assets/cards/exemple.jpg')}
							draggable={isPlayer}
						/>
					</motion.button>
				))}
		</div>
	)
}
