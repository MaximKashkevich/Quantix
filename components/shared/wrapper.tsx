import { FC, PropsWithChildren } from 'react'

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return <div className='h-full w-full rounded-2xl bg-gray-50'>{children}</div>
}
