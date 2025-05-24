import { Button } from '@components/ui/button'
import { Checkbox } from '@components/ui/checkbox'
import { Switch } from '@components/ui/switch'
import { FC, useEffect } from 'react'
import { useCategoryStore } from 'store/categories-store'
import { Title } from '../title'

export const FilterMenu: FC = () => {
	const { fetchCategories, items } = useCategoryStore()

	useEffect(() => {
		fetchCategories()
	}, [])

	return (
		<div className='min-h-[520px] w-[310px] bg-white shadow-sm rounded-2xl p-4 flex flex-col'>
			<header className='flex items-center justify-between mb-6'>
				<Title className='font-medium text-base' text={'Out of stock'} />
				<Switch />
			</header>

			<main className='flex-1'>
				<div className='space-y-4'>
					<Title className='font-medium text-base mb-2' text={'Category'} />

					<input
						type='text'
						placeholder='Enter category'
						className='w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400'
					/>

					<div className='space-y-2 max-h-[300px] overflow-y-auto'>
						{items.map(item => (
							<div
								className='flex items-center gap-3 py-2 px-1 hover:bg-gray-50 rounded'
								key={item.id}
							>
								<Checkbox />
								<span className='text-sm'>{item.name}</span>
							</div>
						))}
					</div>
				</div>
			</main>

			<footer className='flex justify-between mt-6 pt-4 border-t'>
				<Button className='bg-black text-white'>Reset</Button>
				<Button className='shadow-sm'>Save</Button>
			</footer>
		</div>
	)
}
