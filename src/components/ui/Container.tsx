import { cn } from '@/lib/utils'

interface ContainerProps {
	children: React.ReactNode
	className?: string
	as?: React.ElementType
}

export function Container({
	children,
	className,
	as: Component = 'div',
}: ContainerProps) {
	return (
		<Component
			className={cn('mx-auto w-full max-w-[1240px] px-5 md:px-8 xl:px-10', className)}
		>
			{children}
		</Component>
	)
}
