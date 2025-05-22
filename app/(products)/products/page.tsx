'use client'

import { ProductItem } from '@components/shared/products-components/product-item'
import { Checkbox } from '@components/ui/checkbox'
import { Title } from 'components/shared'
import { Button } from 'components/ui/button'
import { Download, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'

export default function Products() {
	interface IOptionsProduct {
		id: number
		name: string
	}

	const OPTIONS_PRODUCT: IOptionsProduct[] = [
		{ id: 1, name: 'Product name' },
		{ id: 2, name: 'In stock' },
		{ id: 3, name: 'Unit type' },
		{ id: 4, name: 'Pack type' },
		{ id: 5, name: 'Unit per pack' },
		{ id: 6, name: 'Price per pack $' },
		{ id: 7, name: 'Description' },
	]

	return (
		<div className='h-full w-full rounded-2xl bg-gray-50'>
			<header className='flex flex-wrap items-center justify-between gap-4 p-4'>
				<div className='flex flex-wrap items-center gap-4'>
					<Title className='font-medium' size='md' text='Products' />

					<div className='relative flex items-center gap-2 rounded-md bg-white p-2 shadow-sm'>
						<Image
							width={17}
							height={17}
							src='/productsPage/search.svg'
							alt='Search'
						/>
						<input
							className='w-40 outline-none px-2'
							type='text'
							placeholder='Search'
						/>
					</div>

					<Button className='shadow-sm bg-white'>
						<SlidersHorizontal className='mr-2' size={16} />
						Filters
					</Button>
				</div>

				<div className='flex flex-wrap items-center gap-4'>
					<Button className='shadow-sm bg-black text-white'>
						<Download className='mr-2' size={16} />
						Import product list
					</Button>
					<Button className='shadow-sm bg-white'>Add new product</Button>
				</div>
			</header>

			<main className='bg-white w-[calc(100%-32px)] h-[calc(100%-32px)] mx-4 mb-4 rounded-xl shadow-sm overflow-hidden'>
				{/* Header таблицы */}
				<div className='w-full overflow-x-auto'>
					<div className='min-w-[900px] grid grid-cols-8 items-center gap-4 p-4 border-b border-gray-200'>
						<div className='flex items-center gap-2'>
							<Checkbox id='select-all' />
							<label
								htmlFor='select-all'
								className='font-medium text-sm whitespace-nowrap'
							>
								SKU
							</label>
						</div>

						{OPTIONS_PRODUCT.map(item => (
							<div
								key={item.id}
								className='font-medium text-sm whitespace-nowrap'
							>
								{item.name}
							</div>
						))}
					</div>
				</div>

				{/* Тело таблицы */}
				<section className='divide-y divide-gray-100'>
					<ProductItem />
				</section>
			</main>
		</div>
	)
}
