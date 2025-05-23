'use client'

import { cn } from '@/lib/utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

function Switch({
	className,
	...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	return (
		<SwitchPrimitive.Root
			className={cn(
				'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
				'disabled:cursor-not-allowed disabled:opacity-50',
				'data-[state=checked]:bg-orange-400 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-300',
				className
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				className={cn(
					'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform',
					'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
					'dark:white'
				)}
			/>
		</SwitchPrimitive.Root>
	)
}

export { Switch }
