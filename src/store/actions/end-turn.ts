import { MAX_MANA } from '../../constans/game/core.constants'
import { IGameCard, IGameStore, TPlayer } from '../../types/game.store.types'
import { useNotificationStore } from '../notification/notification.store'
import { drawCardAction } from './draw-card'

const getNewMana = (newTurn: TPlayer, currentTurn: number) => {
	return newTurn === 'player' ? Math.min(currentTurn, MAX_MANA) : currentTurn
}

const updateAttack = (deck: IGameCard[]) =>
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
	if (newTurn === 'player') {
		useNotificationStore.getState().show('Yoyr Turn')
	}

	return {
		currentTurn: newTurn,
		player: {
			...state.player,
			mana: newPlayerMana,
			deck: updateAttack(
				newTurn === 'player'
					? drawCardAction(state).updateDeck
					: state.player.deck
			),
		},
		opponent: {
			...state.opponent,
			mana: newOpponentMana,
			deck: updateAttack(
				newTurn === 'opponent'
					? drawCardAction(state).updateDeck
					: state.opponent.deck
			),
		},
		turn: state.turn + 1,
	}
}
