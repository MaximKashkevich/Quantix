'use client'

import { Checkbox } from '@components/ui/checkbox'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@components/ui/hover-card'
import { Title } from 'components/shared'
import { Button } from 'components/ui/button'
import { Download, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useProductStore } from 'store/products-store'

export default function Products() {
	const { fetchProducts, items } = useProductStore()

	interface IOptionsProduct {
		id: number
		name: string
	}

	const OPTIONS_PRODUCT: IOptionsProduct[] = [
		{
			id: 1,
			name: 'Product name',
		},
		{
			id: 2,
			name: 'In stock',
		},
		{
			id: 3,
			name: 'Unit type',
		},
		{
			id: 4,
			name: 'Pack type',
		},
		{
			id: 5,
			name: 'Unit per pack',
		},
		{
			id: 6,
			name: 'Price per pack $',
		},
		{
			id: 7,
			name: 'Description',
		},
	]

	useEffect(() => {
		fetchProducts()
		console.log(items)
	}, [])
	return (
		<div className='h-full w-full fone rounded-2xl'>
			<header className='flex items-center justify-between p-4'>
				<div className='flex items-center gap-4'>
					<Title className='font-medium' size='md' text={'Products'}></Title>
					<div className='relative right-0 top-0 flex items-center gap-2 rounded-md bg-white p-2 shadow-sm'>
						<Image
							width={17}
							height={17}
							src='/productsPage/search.svg'
							alt='search'
						></Image>
						<input className='outline-none' type='text' placeholder='Search' />
					</div>

					<Button className='shadow-sm bg-white'>
						<SlidersHorizontal />
						Filters
					</Button>
				</div>
				{/*  */}
				<div className='flex items-center gap-4'>
					<div>
						<Button className='shadow-sm bg-black text-white'>
							<Download />
							Import product list
						</Button>
					</div>
					<Button className='shadow-sm bg-white'>Add new product</Button>
				</div>
			</header>
			<main className='bg-white w-full h-full m-4 rounded-[10px]'>
				<section className='flex items-center justify-between p-4'>
					<div className='flex items-center gap-2'>
						<Checkbox />
						<span className='font-medium'>SKU</span>
					</div>
					{OPTIONS_PRODUCT.map(item => (
						<div key={item.id}>
							<span className='font-medium'>{item.name}</span>
						</div>
					))}
				</section>
				<div className='w-full border-b-2 border-b-gray-400'></div>

				<section>
					{items.map(item => (
						<div key={item.id}>
							<div>
								<Checkbox />

								<HoverCard>
									<HoverCardTrigger>12345</HoverCardTrigger>
									<HoverCardContent>
										The React Framework – created and maintained by @vercel.
									</HoverCardContent>
								</HoverCard>
							</div>
							<div>
								<Image
									src={item.image}
									alt={item.name}
									width={40}
									height={40}
								/>
								<span>{item.name}</span>
							</div>
							<div>
								<span>{item.inStock}</span>
							</div>
							<div>
								<span>{item.UnitType}</span>
							</div>
							<div>
								<span>{item.PackType}</span>
							</div>
							<div>
								<span>{item.UnitPerPack}</span>
							</div>
							<div>
								<span>
									{/* {
										item.PricePerPack
									} */}
								</span>
							</div>
							<div>
								<span>{item.description}</span>
							</div>
						</div>
					))}
				</section>
			</main>
		</div>
	)
}
