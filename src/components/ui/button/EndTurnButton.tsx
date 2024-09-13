import { useGameStore } from '../../../store/game.store'
import { Butoon } from './Button'

export function EndTurnBotton() {
const {endTurn} = useGameStore()

	return ( <Butoon className='absolute top-[49%] right-2 z-10' variant='primary' isCircle onClick={endTurn}>End Turn</Butoon>)
}
