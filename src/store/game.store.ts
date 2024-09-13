import { create } from 'zustand'
import { IHero, type IGameStore } from '../types/game.store.types'
import { createDeck } from './createDeck'
import { endTurnAction } from './actions/endTurn'
import { playCardAction } from './actions/playCard'
import { attackCardAction } from './actions/attackCard'
import { attackHeroAction } from './actions/attackHero'
import { returnCardAction } from './actions/return-card'
import { initialGameData } from './initial-data'
import { startGameAction } from './actions/start-game'

const useGameStore = create<IGameStore>((set, get) => ({
	...initialGameData,
	isGameStarted: false,
	startGame: () => set(startGameAction),
	endTurn: () => set(endTurnAction(get)),
	playCard: (cardId: number) => {
		set((state) => playCardAction(state, cardId))
	},
	returnCard: (cardId: number) => {
		set((state) => returnCardAction(state, cardId))
	},
	attackCard: (attackerId: number, targetId: number) => {
		set((state) => attackCardAction(state, attackerId, targetId))
	},
	attackHero: (attackerId: number) => {
		set((state) => attackHeroAction(state, attackerId))
	},
	resetGame: () => set({ isGameOver: false }),
}))

export { useGameStore }
