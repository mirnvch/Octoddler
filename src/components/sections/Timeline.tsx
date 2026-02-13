import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/ui/FadeIn'
import { TIMELINE_MILESTONES } from '@/data/timeline'
import { cn } from '@/lib/utils'

export function Timeline() {
	return (
		<section className="py-16 md:py-24">
			<Container>
				<FadeIn>
					<SectionHeading
						title="Our Journey"
						subtitle="From a small classroom to a thriving community of learners across Orange County"
					/>
				</FadeIn>

				<div className="relative">
					{/* Vertical line */}
					<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

					{/* Timeline items */}
					<div className="space-y-12 md:space-y-16">
						{TIMELINE_MILESTONES.map((milestone, index) => (
							<FadeIn
								key={milestone.year}
								direction={index % 2 === 0 ? 'left' : 'right'}
								delay={index * 0.05}
							>
								<div
									className={cn(
										'relative pl-12 md:pl-0',
										index % 2 === 0
											? 'md:pr-[calc(50%+3rem)] md:text-right'
											: 'md:pl-[calc(50%+3rem)]',
									)}
								>
									{/* Dot on timeline */}
									<div
										className={cn(
											'absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background',
											'left-[0.4375rem] md:left-1/2 md:-translate-x-1/2',
										)}
									/>

									{/* Content */}
									<div className="space-y-2">
										<div className="font-display text-3xl md:text-4xl font-bold text-primary">
											{milestone.year}
										</div>
										<h3 className="font-heading text-xl md:text-2xl font-medium">
											{milestone.title}
										</h3>
										<p className="text-muted leading-relaxed max-w-md md:max-w-sm">
											{milestone.description}
										</p>
									</div>
								</div>
							</FadeIn>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
