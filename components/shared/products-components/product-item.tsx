import { Checkbox } from '@components/ui/checkbox'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@components/ui/hover-card'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useProductStore } from 'store/products-store'

interface ProductItemProps {
	className?: string
}

export const ProductItem: FC<ProductItemProps> = () => {
	const { fetchProducts, items } = useProductStore()

	useEffect(() => {
		fetchProducts()
	}, [fetchProducts])

	return (
		<div className='w-full overflow-x-auto'>
			<div className='min-w-[900px]'>
				{items.map(item => (
					<div
						key={item.id}
						className='grid grid-cols-8 items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 text-sm'
					>
						{/* Checkbox + SKU */}
						<div className='flex items-center gap-2'>
							<Checkbox className='h-4 w-4' />
							<HoverCard>
								<HoverCardTrigger className='whitespace-nowrap'>
									{/* {item.sku || 'N/A'} */}N/A
								</HoverCardTrigger>
								<HoverCardContent className='max-w-[300px] text-sm p-2'>
									{item.description || 'No description available'}
								</HoverCardContent>
							</HoverCard>
						</div>

						{/* Product Image + Name */}
						<div className='flex items-center gap-2'>
							<Image
								src={item.image}
								alt={item.name}
								width={32}
								height={32}
								className='rounded-md object-cover flex-shrink-0'
							/>
							<span className='line-clamp-1'>{item.name}</span>
						</div>

						{/* In Stock */}
						<div className='whitespace-nowrap text-left'>{item.inStock}</div>

						{/* Unit Type */}
						<div className='whitespace-nowrap text-left'>{item.UnitType}</div>

						{/* Pack Type */}
						<div className='whitespace-nowrap text-left'>{item.PackType}</div>

						{/* Unit Per Pack */}
						<div className='text-left'>{item.UnitPerPack}</div>

						{/* Price Per Pack */}
						<div className='font-medium whitespace-nowrap text-left'>
							{/* ${item.PricePerPack?.toFixed(2)} */}12
						</div>

						{/* Description */}
						<div className='text-gray-500 line-clamp-1 '>
							{item.description || '—'}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
