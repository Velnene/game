import { useGameStore } from '../../store/game.store'
import { PlayerInfo } from './PlayerInfo'
import { HandCard } from './HandCard'
import { BoardCard } from './board-card/BoardCard'
import { Notification } from '../../components/ui/notification/Notification'
import { MAX_HAND_CARDS, MAX_MANA } from '../../constans/game/core.constants'
import { PlayerMana } from './player-info/mana/PlayerMana'
import { EndTurnBotton } from '../../components/ui/button/EndTurnButton'
import { useEffect, useState } from 'react'
import { useSelectAttacer } from '../../store/select-attacer'
import { useEnemyTarget } from './board-card/useEnemyTarget'
import { useNotificationStore } from '../../store/notification/notification.store'

export function GameBoard() {
	const { player, opponent, playCard, isGameOver, resetGame } = useGameStore()
const {messege} = useNotificationStore()

	return (
		<>
			<Notification/>
			<div
				className='relative h-screen w-full grid grid-rows-2'
				style={{ gridTemplateRows: '1fr 1fr' }}
			>
				<section>
					<PlayerInfo player={opponent} typePlayer='opponent' />
					<div className='flex justify-center'>
						{opponent.deck
							.filter((card) => card.isOnHand)
							.map((card, index, arr) => (
								<HandCard
									card={card}
									arrayLength={arr.length}
									index={index}
									key={card.id}
									isHided
								/>
							))}
					</div>
					<BoardCard deck={opponent.deck} isPlayer={false} />
				</section>
				<EndTurnBotton />
				<section>
					<BoardCard deck={player.deck} isPlayer={true} />
					<PlayerInfo player={player} typePlayer='player' />
					<PlayerMana mana={player.mana} maxMana={MAX_MANA} />
					<div className='bottom-0 absolute w-full'>
						<div className='flex relative justify-center mx-auto'>
							{player.deck
								.filter((card) => card.isOnHand)
								.map((card, index, arr) => (
									<HandCard
										card={card}
										arrayLength={arr.length}
										index={index}
										key={card.id}
										isDisabled={card.mana > player.mana}
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
