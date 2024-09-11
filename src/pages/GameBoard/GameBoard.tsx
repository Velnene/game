import { useGameStore } from '../../store/game.store'
import { PlayerInfo } from './PlayerInfo'
import { HandCard } from './HandCard'
import { BoardCard } from './board-card/BoardCard'
import {
	INITIAL_MANA,
	MAX_HAND_CARDS,
	MAX_MANA,
} from '../../constans/game/core.constants'
import { PlayerMana } from './player-info/mana/PlayerMana'

export function GameBoard() {
	const { player, opponent, playCard } = useGameStore()

	return (
		<>
			<div
				className='relative h-screen w-full grid grid-rows-2'
				style={{ gridTemplateRows: '1fr 1fr' }}
			>
				<section>
					<PlayerInfo player={opponent} typePlayer='opponent' />
					<div className='flex justify-center'>
						{opponent.deck
							.filter((card) => !card.isOnBoard)
							.slice(0, MAX_HAND_CARDS)
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
					<BoardCard deck={opponent.deck} isPlayer={false} />
				</section>
				<section>
					<BoardCard deck={player.deck} isPlayer={true} />
					<PlayerInfo player={player} typePlayer='player' />
					<PlayerMana mana={INITIAL_MANA} maxMana={MAX_MANA} />
					<div className='bottom-0 absolute w-full'>
						<div className='flex relative justify-center mx-auto'>
							{player.deck
								.filter((card) => !card.isOnBoard)
								.slice(0, MAX_HAND_CARDS)
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
