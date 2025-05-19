import { Title } from 'components/shared'
import { Button } from 'components/ui/button'
import { Download, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'

export default function Products() {
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
			<main></main>
		</div>
	)
}
