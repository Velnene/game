import { INITIAL_HP, INITIAL_MANA } from '../constans/game/core.constants'
import {
	IGameFunctionStore,
	IGameStore,
	IHero,
} from '../types/game.store.types'

export const initialPlayerData: IHero = {
	deck: [],
	health: INITIAL_HP,
	mana: INITIAL_MANA,
}

export const initialGameData: Omit<IGameStore, keyof IGameFunctionStore> = {
	player: initialPlayerData,
	opponent: initialPlayerData,
	currentTurn: 'player',
	isGameOver: false,
	isGameStarted: true,
	turn: 1,
}
