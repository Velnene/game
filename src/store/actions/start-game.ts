import { MAX_HAND_CARDS } from '../../constans/game/core.constants'
import { IGameCard, IGameStore } from '../../types/game.store.types'
import { createDeck } from '../createDeck'
import { initialGameData } from '../initial-data'
import shuffle from 'lodash/shuffle'

const getFirstCards = (deck: IGameCard[]): IGameCard[] =>
	deck.map((card, index) => ({
		...card,
		isOnHand: index < MAX_HAND_CARDS,
		isTaken: index < MAX_HAND_CARDS,
	}))

export const startGameAction = (): Partial<IGameStore> => {
	const deck = createDeck()

	const playerInitialDeck = shuffle(deck)
	const opponentInitialDeck = shuffle(deck)

	return {
		...initialGameData,
		player: {
			...initialGameData.player,
			deck: getFirstCards(playerInitialDeck),
		},
		opponent: {
			...initialGameData.player,
			deck: getFirstCards(opponentInitialDeck)
		},
	}
}
