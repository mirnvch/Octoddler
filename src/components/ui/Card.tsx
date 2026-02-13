import { cn } from '@/lib/utils'

interface CardProps {
	children: React.ReactNode
	className?: string
	bordered?: boolean
}

export function Card({ children, className, bordered = true }: CardProps) {
	return (
		<div
			className={cn(
				'rounded-sm bg-card p-8',
				bordered && 'border-[5px] border-border',
				className,
			)}
		>
			{children}
		</div>
	)
}
