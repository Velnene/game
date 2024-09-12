import { motion } from 'framer-motion'
import { IGameCard } from '../../../types/game.store.types'

interface Props {
	deck: IGameCard[]
  isPlayer: boolean
}

export function BoardCard({ deck, isPlayer }: Props) {
  const showCard = isPlayer ? 200 : -200
	return (
		<div className='flex justify-center'>
			{deck
				.filter((card) => card.isOnBoard)
				.map((card) => (
					<motion.button
						className='w-32 bg-yellow-300 shadow mx-1 flex justify-center items-center cursor-default'
						key={card.id}
						initial={{ scale: 0.5, rotate: -15, y: showCard, opacity: 0, x: -10 }}
						animate={{ scale: 1, rotate: 0, y: 0, opacity: 1, x: 0 }}
						transition={{ type: 'just', stiffness: 300, damping: 30, mass: 1 }}
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
