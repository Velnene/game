import { useGameStore } from '../../../store/game.store'
import { useSelectAttacer } from '../../../store/select-attacer'

export function useEnemyTarget() {
	const { attackHero, attackCard, isPlayerTurn } = useGameStore()
	const { cardAttackerId, setCardAttacerrId } = useSelectAttacer()

	const handleSelectTarget = (targetId?: number, isHero = false) => {
		if (!cardAttackerId) return
		if (!isPlayerTurn) return

		if (isHero) {
			attackHero(cardAttackerId)
		} else if (targetId) {
			attackCard(cardAttackerId, targetId)
		}

		setCardAttacerrId(null)
	}
	return { handleSelectTarget }
}
