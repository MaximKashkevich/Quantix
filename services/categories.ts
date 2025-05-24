import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'

export const getAllCategories = async () => {
	return await (
		await axiosInstance.get(ApiRoutes.CATEGORIES)
	).data
}
