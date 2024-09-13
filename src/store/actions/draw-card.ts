import { MAX_HAND_CARDS } from '../../constans/game/core.constants'
import { IGameCard, IGameStore } from '../../types/game.store.types'

export const drawCardAction = (state: IGameStore) => {
	const currentPlayer =
		state.currentTurn === 'player' ? state.player : state.opponent
	const cardOnHand = currentPlayer.deck.filter((card) => card.isOnHand).length
	const cardsNeeded = MAX_HAND_CARDS - cardOnHand
	let drawCards = 0

	const updateDeck = currentPlayer.deck.map((card: IGameCard) => {
		if (!card.isTaken && !card.isOnBoard && drawCards < cardsNeeded) {
			drawCards++
			return { ...card, isTaken: true, isOnHand: true }
		}
		return card
	})
	currentPlayer.deck = updateDeck
	return { updateDeck }
}
