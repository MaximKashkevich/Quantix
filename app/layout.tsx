import { Header, Sidebar } from 'components/shared/index'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const roboto = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-roboto',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={roboto.variable}>
			<body className='min-h-screen antialiased'>
				<div className='container mx-auto p-4'>
					<Header />
					<main className='flex gap-4 mt-4'>
						<Sidebar />
						{children}
					</main>
				</div>
			</body>
		</html>
	)
}
