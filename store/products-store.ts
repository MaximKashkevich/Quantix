import { create } from 'zustand'

interface IProductStore {
	loading: boolean
	error: boolean
	items: IProductStoreItems[]

	fetchProducts: () => Promise<void>
}

export const useProductStore = create<IProductStore>((
	items: [],
	loading: false,
	error: false,

	fetchProducts: async() => {
		
	}
})
