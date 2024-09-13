import {create} from 'zustand'

interface IUseSelectAttacer {
  cardAttackerId: number | null
  setCardAttacerrId: (card: number | null) => void
}

export const useSelectAttacer = create<IUseSelectAttacer>((set) => ({
cardAttackerId: null,
setCardAttacerrId: cardId => set({cardAttackerId: cardId}),
}))