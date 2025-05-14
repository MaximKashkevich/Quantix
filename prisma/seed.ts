import { PackType, PrismaClient, UnitType } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { categories, products } from './constants'

const prisma = new PrismaClient()

async function main() {
	try {
		await seedUsers()
		await seedCategories()
		await seedProducts()
	} catch (e) {
		console.error(e)
	} finally {
		await prisma.$disconnect()
	}
}

async function seedUsers() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				email: 'user@test.ru',
				password: hashSync('11111', 10),
				role: 'USER',
				avatarUrl: '/avatars/user-test.png',
				companyName: 'Test Company',
			},
			{
				fullName: 'Admin Admin',
				email: 'admin@test.ru',
				password: hashSync('111111', 10),
				role: 'ADMIN',
				avatarUrl: '/avatars/admin-admin.png',
				companyName: 'Admin Corp',
			},
			{
				fullName: 'John Doe',
				email: 'john.doe@example.com',
				password: hashSync('password123', 10),
				role: 'USER',
				avatarUrl: '/avatars/john-doe.png',
				companyName: 'Doe Logistics',
			},
			{
				fullName: 'Jane Smith',
				email: 'jane.smith@example.com',
				password: hashSync('securepassword', 10),
				role: 'USER',
				avatarUrl: '/avatars/jane-smith.png',
				companyName: 'Smith Foods',
			},
			{
				fullName: 'Alice Johnson',
				email: 'alice.johnson@example.com',
				password: hashSync('alicepassword', 10),
				role: 'USER',
				avatarUrl: '/avatars/alice-johnson.png',
				companyName: 'Johnson & Co.',
			},
			{
				fullName: 'Admin User',
				email: 'admin.user@example.com',
				password: hashSync('adminpass', 10),
				role: 'ADMIN',
				avatarUrl: '/avatars/admin-user.png',
				companyName: 'Global Admins',
			},
		],
	})
}

async function seedCategories() {
	await prisma.category.createMany({
		data: categories,
	})
}

async function seedProducts() {
	const categoryRecords = await prisma.category.findMany()
	const categoryMap = Object.fromEntries(
		categoryRecords.map(c => [c.name, c.id])
	)

	for (const product of products) {
		const baseProduct = await prisma.product.create({
			data: {
				description: product.description,
				price: product.pricePerPack,
				categoryId: categoryMap[product.category],
			},
		})

		await prisma.productItem.create({
			data: {
				productId: baseProduct.id,
				name: product.name,
				image: product.imageUrl,
				inStock: product.inStock,
				price: product.pricePerPack,
				UnitType: UnitType[product.unitType as keyof typeof UnitType],
				PackType: PackType[product.packType as keyof typeof PackType],
				UnitPerPack: product.unitPerPack,
				PricePerPack: product.pricePerPack,
				categoryId: categoryMap[product.category],
				description: product.description,
			},
		})
	}
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
