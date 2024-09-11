import { ICard } from '../../../types/cards'
import { IGameCard } from '../../../types/game.store.types'

interface Props {
	// card: ICard
	deck: IGameCard[]
	isDraggable: boolean
}

export function BoardCard({ deck, isDraggable }: Props) {
	return (
		<>
			{deck
				.filter((card) => card.isOnBoard)
				.map((card) => (
					<button
						className='h-20 w-20 bg-yellow-300 inline-block shadow mx-1 rounded-lg'
						key={card.id}
					>
						<img
							alt={card.name}
							src={require('../../../../public/assets/cards/exemple.jpg')}
							draggable={isDraggable}
						/>
					</button>
				))}
		</>
	)
}
