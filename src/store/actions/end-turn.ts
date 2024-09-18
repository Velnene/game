import { MAX_MANA } from '../../constans/game/core.constants'
import { IGameCard, IGameStore, TPlayer } from '../../types/game.store.types'
import { useNotificationStore } from '../notification/notification.store'
import { drawCardAction } from './draw-card'

const getNewMana = (currentTurn: number) => {
	return Math.min(currentTurn, MAX_MANA)
}

const updateAttack = (deck: IGameCard[]) =>
	deck.map((card) => ({
		...card,
		isCanAttack: card.isOnBoard,
		isPlayedThisTurn: false,
	}))

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
	const state = get()
	const newTurn: TPlayer =
		state.currentTurn === 'player' ? 'opponent' : 'player'

	const isNewTurnPlayer = newTurn === 'player'
	const newTurnNumber = isNewTurnPlayer ? state.turn + 1 : state.turn
	let newPlayerMana = state.player.mana
	let newOpponentMana = state.opponent.mana
	if (isNewTurnPlayer) {
		newPlayerMana = getNewMana(newTurnNumber)
		useNotificationStore.getState().show('Yoyr Turn')
	} else {
		newOpponentMana = getNewMana(newTurnNumber)
	}

	return {
		currentTurn: newTurn,
		player: {
			...state.player,
			mana: newPlayerMana,
			deck: updateAttack(
				isNewTurnPlayer ? drawCardAction(state).updateDeck : state.player.deck
			),
		},
		opponent: {
			...state.opponent,
			mana: newOpponentMana,
			deck: updateAttack(
				!isNewTurnPlayer
					? drawCardAction(state).updateDeck
					: state.opponent.deck
			),
		},
		turn: newTurnNumber,
	}
}
