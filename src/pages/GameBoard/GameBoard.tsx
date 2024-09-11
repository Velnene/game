import { useGameStore } from '../../store/game.store'
import { PlayerInfo } from './PlayerInfo'
import { HandCard } from './HandCard'
import { getSstyleRotation } from './hand-card/get-style-rotation'
import { BoardCard } from './board-card/BoardCard'

export function GameBoard() {
	const { player, opponent, playCard } = useGameStore()

	return (
		<>
			<div
				className='relative h-screen w-full grid grid-rows-3'
				style={{ gridTemplateRows: '1fr 1fr 1fr' }}
			>
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
				<section className='flex flex-col gap-y-10 justify-center items-center'>
					<BoardCard deck={opponent.deck} isDraggable={false} />
					<BoardCard deck={player.deck} isDraggable={true} />
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
