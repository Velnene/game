import { create } from 'zustand'
import { IHero, type IGameStore } from '../types/game.store.types'
import { createDeck } from './createDeck'
import { endTurnAction } from './actions/endTurn'
import { playCardAction } from './actions/playCard'
import { attackCardAction } from './actions/attackCard'
import { attackHeroAction } from './actions/attackHero'

const initialPlayerData: IHero = {
	deck: createDeck(),
	health: 20,
	mana: 1,
}

const initialGameData: Pick<IGameStore, 'player' | 'opponent' | 'currentTurn' | 'isGameOver' | 'isGameStarted'> = {
	player: initialPlayerData,
	opponent: initialPlayerData,
	currentTurn: 'player',
	isGameOver: false,
	isGameStarted: true,
}

const useGameStore = create<IGameStore>((set, get) => ({
	...initialGameData,
	isGameStarted: false,
	startGame: () => set(initialGameData),
	endTurn: () => set(endTurnAction(get)),
	playCard: (cardId: number) => {
		set((state) => playCardAction(state, cardId))
	},
	attackCard: (attackerId: number, targetId: number) => {
		set((state) =>
			attackCardAction(state, attackerId, targetId,)
		)
	},
	attackHero: (attackerId: number) => {
		set((state) => attackHeroAction(state, attackerId))
	},
}))
 
export { useGameStore }
