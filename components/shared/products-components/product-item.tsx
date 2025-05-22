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
		console.log(items)
	}, [])
	return (
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
						<Image src={item.image} alt={item.name} width={40} height={40} />
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
						{/* <span>
									 {
										item.PricePerPack
									} 
								</span> */}
					</div>
					<div>
						<span>{item.description}</span>
					</div>
				</div>
			))}
		</section>
	)
}
