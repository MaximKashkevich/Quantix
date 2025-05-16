import { Title } from '@/components/shared/index'
import Image from 'next/image'
import { FC } from 'react'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = () => {
	return (
		<header className=''>
			<div className='flex items-center gap-2'>
				<Image
					src='/header/headerIcon.svg'
					alt='headerLogo'
					width={33}
					height={33}
				/>
				<Title className='font-medium text-white' text={'EXCELLENT'} />
			</div>
		</header>
	)
}
