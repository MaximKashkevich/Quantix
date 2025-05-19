'use client'

import { Avatar, AvatarImage } from 'components/ui/avatar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface SidebarProps {
	className?: string
	id: number
	iconsUrl: string
	alt: string
	pathName: string
}

const SIDEBAR_ITEMS: SidebarProps[] = [
	{
		id: 1,
		iconsUrl: '/sidebar/home.svg',
		alt: 'home',
		pathName: '/',
	},
	{
		id: 2,
		iconsUrl: '/sidebar/orders.svg',
		alt: 'orders',
		pathName: '/orders',
	},
	{
		id: 3,
		iconsUrl: '/sidebar/products.svg',
		alt: 'products',
		pathName: '/products',
	},
	{
		id: 4,
		iconsUrl: '/sidebar/clients.svg',
		alt: 'clients',
		pathName: '/clients',
	},
	{
		id: 5,
		iconsUrl: '/sidebar/analitik.svg',
		alt: 'analitik',
		pathName: '/analitik',
	},
	{
		id: 6,
		iconsUrl: '/sidebar/settings.svg',
		alt: 'settings',
		pathName: '/settings',
	},
]

export const Sidebar: FC = () => {
	const pathName = usePathname()
	return (
		<aside className=' flex flex-col gap-6'>
			<Link href='/profile'>
				<Avatar>
					<AvatarImage src='/sidebar/avatar.svg' alt='home' />
				</Avatar>
			</Link>
			{SIDEBAR_ITEMS.map(item => {
				const isActive = pathName === item.pathName
				return (
					<Link href={item.pathName} key={item.id}>
						<Image
							width={35}
							height={35}
							src={item.iconsUrl}
							alt={item.alt}
							className={` ${
								isActive ? '' : ''
							} hover:scale-110 transition-transform`}
						/>
					</Link>
				)
			})}
		</aside>
	)
}
