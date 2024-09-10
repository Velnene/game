import { useGameStore } from '../../store/game.store'
import { PlayerInfo } from './PlayerInfo'
import { HandCard } from './HandCard'
import { getSstyleRotation } from './hand-card/get-style-rotation'

export function GameBoard() {
	const { player, opponent, playCard } = useGameStore()

	return (
		<>
			<div className='relative h-screen w-full grid grid-rows-3'>
				<section>
					<PlayerInfo player={opponent} typePlayer='opponent' />
					<div className='flex justify-center'>
						{opponent.deck
							.filter((card) => !card.isOnBoard)
							.slice(0, 5)
							.map((card, index, arr) => (
								<HandCard
									card={card}
									arrayLength={arr.length}
									index={index}
									key={card.id}
									onClick={() => {
										console.log(card)
										playCard(card.id)
									}}
									isHided
								/>
							))}
					</div>
				</section>

				<section className='flex flex-col gap-y-10'>
					{opponent.deck
						.filter((card) => card.isOnBoard)
						.map((card) => (
							<button
								className='h-20 w-20 bg-yellow-300 inline-block shadow mx-1 rounded-lg'
								key={card.id}
							>
								<img
									alt={card.name}
									src={require('../../../public/assets/cards/exemple.jpg')}
									draggable='false'
								/>
							</button>
						))}
					{player.deck
						.filter((card) => card.isOnBoard)
						.map((card) => (
							<button
								className='h-20 w-20 bg-yellow-300 inline-block shadow mx-1 rounded-lg'
								key={card.id}
							>
								<img alt={card.name} src={card.imageUrl}></img>
							</button>
						))}
				</section>
				<section>
					<PlayerInfo player={player} typePlayer='player' />
					<div className='bottom-10 absolute w-full'>
						<div className='flex relative justify-center mx-auto'>
							{player.deck
								.filter((card) => !card.isOnBoard)
								.slice(0, 5)
								.map((card, index, arr) => (
									<HandCard
										card={card}
										arrayLength={arr.length}
										index={index}
										key={card.id}
										onClick={() => {
											playCard(card.id)
										}}
									/>
								))}
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
