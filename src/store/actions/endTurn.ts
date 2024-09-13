import { MAX_MANA } from '../../constans/game/core.constants'
import { IGameCard, IGameStore, TPlayer } from '../../types/game.store.types'

const getNewMana = (newTurn: TPlayer, currentTurn: number) => {
	return newTurn === 'player' ? Math.min(currentTurn, MAX_MANA) : currentTurn
}

const resetAttack = (deck: IGameCard[]) =>
	deck.map((card) => ({
		...card,
		isCanAttack: card.isOnBoard,
	}))

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
	const state = get()
	const newTurn: TPlayer =
		state.currentTurn === 'player' ? 'opponent' : 'player'
	const newPlayerMana = getNewMana('player', state.turn)
	const newOpponentMana = getNewMana('opponent', state.turn)
	return {
		currentTurn: newTurn,
		player: {
			...state.player,
			mana: newPlayerMana,
			deck: resetAttack(state.player.deck),
		},
		opponent: {
			...state.opponent,
			mana: newOpponentMana,
			deck: resetAttack(state.opponent.deck),
		},
		turn: state.turn +1
	}
}
