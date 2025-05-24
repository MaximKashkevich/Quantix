import { Category } from '@prisma/client'
import { Api } from 'services/api-client'
import { create } from 'zustand'

interface ICategory {
	items: Category[]
	loading: boolean
	error: boolean

	fetchCategories: () => void
}

export const useCategoryStore = create<ICategory>(set => ({
	items: [],
	loading: false,
	error: false,

	fetchCategories: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.categories.getAllCategories()
			set({ items: data, loading: false })
		} catch (e) {
			console.log(`ERROR CATEGORIES ${e}`)
			set({ loading: false, error: true })
		} finally {
			set({ loading: false })
		}
	},
}))
