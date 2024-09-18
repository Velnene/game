import { CARDS } from '../constans/game/cards'
import { IGameCard } from '../types/game.store.types'

export function createDeck(): IGameCard[] {
	return CARDS.map((card, index) => ({
		...card,
		isOnHand: false,
		isTaken: false,
		id: index + 1,
		isOnBoard: false,
		isCanAttack: false,
		isPlayedThisTurn: false,
	}))
}
