import Link from 'next/link'
import { cn } from '@/lib/utils'

const variants = {
	primary:
		'bg-primary text-foreground hover:bg-primary-dark focus-visible:ring-primary',
	secondary:
		'bg-secondary text-foreground hover:bg-secondary-dark focus-visible:ring-secondary',
	outline:
		'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
	ghost: 'text-foreground hover:bg-foreground/5',
	link: 'text-primary underline-offset-4 hover:underline p-0',
} as const

const sizes = {
	sm: 'px-4 py-2 text-sm',
	md: 'px-6 py-3 text-base',
	lg: 'px-8 py-4 text-lg',
} as const

interface ButtonBaseProps {
	variant?: keyof typeof variants
	size?: keyof typeof sizes
	className?: string
	children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps {
	href?: undefined
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	disabled?: boolean
}

interface ButtonAsLink extends ButtonBaseProps {
	href: string
	external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
	const {
		variant = 'primary',
		size = 'md',
		className,
		children,
		...rest
	} = props

	const classes = cn(
		'inline-flex items-center justify-center gap-2 rounded-sm font-heading font-bold uppercase tracking-wide transition-colors duration-200',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
		variants[variant],
		variant !== 'link' && sizes[size],
		'disabled:pointer-events-none disabled:opacity-50',
		className,
	)

	if ('href' in rest && rest.href) {
		const { href, external, ...linkRest } = rest as ButtonAsLink
		if (external) {
			return (
				<a
					href={href}
					className={classes}
					target="_blank"
					rel="noopener noreferrer"
					{...linkRest}
				>
					{children}
				</a>
			)
		}
		return (
			<Link href={href} className={classes} {...linkRest}>
				{children}
			</Link>
		)
	}

	const { type = 'button', ...buttonRest } = rest as ButtonAsButton
	return (
		<button type={type} className={classes} {...buttonRest}>
			{children}
		</button>
	)
}
