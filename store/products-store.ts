import { ProductItem } from '@prisma/client' // Добавим правильный импорт
import { Api } from 'services/api-client'
import { create } from 'zustand'

interface IProductStore {
	loading: boolean
	error: boolean
	items: ProductItem[]

	fetchProducts: () => Promise<void>
}

export const useProductStore = create<IProductStore>(set => ({
	items: [],
	loading: false,
	error: false,

	fetchProducts: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.products.search('')
			set({ items: data, loading: false })
		} catch (e) {
			set({ error: true, loading: false })
		}
	},
}))
