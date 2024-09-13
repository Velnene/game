import { ICard } from './cards'

export type TPlayer = 'player' | 'opponent'

export interface IGameCard extends ICard {
	id: number
	isOnBoard: boolean
	isCanAttack: boolean
}

export interface IHero {
	deck: IGameCard[]
	health: number
	mana: number
}

export interface IGameFunctionStore {
	startGame: () => void
	endTurn: () => void
	playCard: (cardId: number) => void
	returnCard: (cardId: number) => void
	attackCard: (attackerId: number, targetId: number) => void
	attackHero: (attackerId: number) => void
	resetGame: () => void
}

export interface IGameStore extends IGameFunctionStore {
	isGameStarted: boolean
	isGameOver: boolean
	player: IHero
	opponent: IHero
	currentTurn: TPlayer
	turn: number
}
