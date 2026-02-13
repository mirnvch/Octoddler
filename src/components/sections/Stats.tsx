import { Container } from '@/components/ui/Container'
import { Stagger, StaggerItem } from '@/components/ui/FadeIn'

const stats = [
	{ value: '100+', label: 'Happy Families' },
	{ value: '10+', label: 'Years Experience' },
	{ value: '4', label: 'Locations' },
	{ value: '1:6', label: 'Teacher Ratio' },
]

export function Stats() {
	return (
		<section className="py-section">
			<Container>
				{/* Top decorative line */}
				<div className="border-t border-border" />

				{/* Heading */}
				<div className="py-12 text-center">
					<h2 className="font-heading text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl">
						Octoddler in Numbers
					</h2>
				</div>

				{/* Bottom decorative line */}
				<div className="border-t border-border" />

				{/* Stats Grid */}
				<Stagger
					className="mt-12 grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4"
					staggerDelay={0.12}
				>
					{stats.map((stat, index) => (
						<StaggerItem key={index} className="flex justify-center">
							<div className="flex aspect-square w-full max-w-[200px] flex-col items-center justify-center rounded-full border-[5px] border-primary px-4 py-6">
								<span className="font-abril text-4xl leading-none text-foreground md:text-[54px]">
									{stat.value}
								</span>
								<span className="mt-2 text-center font-heading text-[10px] uppercase leading-tight tracking-wide text-muted md:text-xs">
									{stat.label}
								</span>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</Container>
		</section>
	)
}
