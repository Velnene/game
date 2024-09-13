import { create } from 'zustand'
import { IHero, type IGameStore } from '../types/game.store.types'
import { createDeck } from './createDeck'
import { endTurnAction } from './actions/endTurn'
import { playCardAction } from './actions/playCard'
import { attackCardAction } from './actions/attackCard'
import { attackHeroAction } from './actions/attackHero'
import { INITIAL_HP, INITIAL_MANA } from '../constans/game/core.constants'
import { returnCardAction } from './actions/return-card'

const initialPlayerData: IHero = {
	deck: createDeck(),
	health: INITIAL_HP,
	mana: INITIAL_MANA,
}

const initialGameData: Pick<
	IGameStore,
	'player' | 'opponent' | 'currentTurn' | 'isGameOver' | 'isGameStarted'
> = {
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
