import { cn } from '@/lib/utils'

const variants = {
	primary: 'bg-primary/20 text-foreground',
	secondary: 'bg-secondary/20 text-foreground',
	accent: 'bg-accent/20 text-foreground',
}

interface BadgeProps {
	children: React.ReactNode
	variant?: keyof typeof variants
	className?: string
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-full px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider',
				variants[variant],
				className,
			)}
		>
			{children}
		</span>
	)
}
