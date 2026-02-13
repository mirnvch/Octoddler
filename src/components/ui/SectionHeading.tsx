import { cn } from '@/lib/utils'

interface SectionHeadingProps {
	title: string
	subtitle?: string
	className?: string
	align?: 'left' | 'center'
	as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
	title,
	subtitle,
	className,
	align = 'center',
	as: Tag = 'h2',
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				'mb-12',
				align === 'center' && 'text-center',
				className,
			)}
		>
			<Tag
				className={cn(
					'font-heading font-medium',
					Tag === 'h1' && 'text-4xl md:text-5xl lg:text-6xl',
					Tag === 'h2' && 'text-3xl md:text-4xl lg:text-5xl',
					Tag === 'h3' && 'text-2xl md:text-3xl',
				)}
			>
				{title}
			</Tag>
			{subtitle && (
				<p
					className={cn(
						'mt-4 text-lg text-muted',
						align === 'center' && 'mx-auto max-w-[60%]',
					)}
				>
					{subtitle}
				</p>
			)}
		</div>
	)
}
