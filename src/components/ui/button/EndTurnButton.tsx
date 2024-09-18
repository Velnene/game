import { useGameStore } from '../../../store/game.store'
import { Butoon } from './Button'

export function EndTurnBotton() {
	const { endTurn, currentTurn } = useGameStore()
	const isOpponentTurn = currentTurn === 'opponent'
	return (
		<Butoon
			className='absolute top-[49%] right-2 z-10'
			variant={isOpponentTurn ? 'disabled' : 'primary'}
			isCircle
			// onClick={isOpponentTurn ? () => null : endTurn}
			onClick={endTurn}
			// disabled={isOpponentTurn}
		>
			End Turn
		</Butoon>
	)
}
