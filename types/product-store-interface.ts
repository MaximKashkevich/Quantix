export interface IProductStoreItems {
	id: number
	name: string
	image: string
	description?: string
	price: number
	unitType: string
	packType: string
	inStock: number
	unitPerPack: number
	pricePerPack: number
	category: string
}
