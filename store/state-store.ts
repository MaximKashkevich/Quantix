import { create } from 'zustand'

interface IStateStore {
	filterMenu: boolean
	setFilterMenu: () => void
}

export const useStateStore = create<IStateStore>(set => ({
	filterMenu: false,
	setFilterMenu: () => set(state => ({ filterMenu: !state.filterMenu })),
}))
