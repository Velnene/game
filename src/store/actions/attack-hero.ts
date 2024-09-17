import { EnumTypeCard } from '../../types/cards'
import { IGameCard, IGameStore, TPlayer } from '../../types/game.store.types'
import { useNotificationStore } from '../notification/notification.store'
import { getCardById } from './attack-card'

export const attackHeroAction = (
	state: IGameStore,
	attackerId: number
): Partial<IGameStore> => {
	const isAttackerPlayer = state.isPlayerTurn

	const attacker = getCardById(
		attackerId,
		!isAttackerPlayer ? state.opponent.deck : state.player.deck
	)

	const opponent = state[isAttackerPlayer ? 'opponent' : 'player']
	const opponentTount = opponent.deck.find(
		(card) => card.type === EnumTypeCard.taunt && card.isOnBoard
	)

	if (attacker && attacker.isCanAttack && !opponentTount) {
		opponent.health -= attacker.attack
		attacker.isCanAttack = false
		console.log(opponent.health)
		if (opponent.health <= 0) {
			state.isGameOver = true
			state.isGameStarted = false
			useNotificationStore.getState().show(isAttackerPlayer ? 'You win' : 'you lose', isAttackerPlayer ? 'win' : "lose")
		}
	}
	return {
		player: state.player,
		opponent: state.opponent,
		isGameOver: state.isGameOver,
		isGameStarted: state.isGameStarted,
	}
}
