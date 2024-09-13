import { EnumTypeCard } from '../../types/cards'
import { IGameCard, IGameStore, TPlayer } from '../../types/game.store.types'
import { getCardById } from './attack-card'

export const attackHeroAction = (
	state: IGameStore,
	attackerId: number
): Partial<IGameStore> => {
	const isAttackerPlayer = state.currentTurn === 'player'

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

		if (opponent.health <= 0) {
			state.isGameOver = true
		}
	}
	return {
		player: state.player,
		opponent: state.opponent,
		isGameOver: state.isGameOver,
		isGameStarted: false,
	}
}
