import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface HeroProps {
	title: string
	subtitle: string
	ctaPrimary: {
		label: string
		href: string
	}
	ctaSecondary: {
		label: string
		href: string
	}
	imageSrc?: string
	imageAlt?: string
}

export function Hero({
	title,
	subtitle,
	ctaPrimary,
	ctaSecondary,
	imageSrc,
	imageAlt,
}: HeroProps) {
	return (
		<section className='bg-cream pt-24 pb-0'>
			<Container>
				{/* Hero Content */}
				<div className='text-center mb-12 md:mb-16'>
					{/* Heading */}
					<h1 className='font-heading text-5xl md:text-6xl lg:text-7xl font-medium mb-6 text-foreground'>
						{title}
					</h1>

					{/* Subtitle */}
					<p className='text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8'>
						{subtitle}
					</p>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<Button
							href={ctaPrimary.href}
							variant='primary'
							size='lg'
						>
							{ctaPrimary.label}
						</Button>
						<Button
							href={ctaSecondary.href}
							variant='outline'
							size='lg'
						>
							{ctaSecondary.label}
						</Button>
					</div>
				</div>

				{/* Image Placeholder */}
				<div className='aspect-video bg-border rounded-sm mb-0'>
					{imageSrc && (
						<img
							src={imageSrc}
							alt={imageAlt || title}
							className='w-full h-full object-cover rounded-sm'
						/>
					)}
				</div>
			</Container>

			{/* Green Footer Bar */}
			<div className='bg-primary py-8 mt-12 md:mt-16'>
				<Container>
					<div className='text-center text-foreground'>
						<h2 className='font-heading text-2xl md:text-3xl font-medium mb-4'>
							Welcome to Octoddler School
						</h2>
						<p className='text-base md:text-lg max-w-3xl mx-auto'>
							We believe in nurturing curiosity, creativity, and independence in every child.
							Our Montessori-inspired approach creates a warm, engaging environment where
							children learn at their own pace and develop a lifelong love of learning.
						</p>
					</div>
				</Container>
			</div>
		</section>
	)
}
