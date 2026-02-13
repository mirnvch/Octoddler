'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

const testimonials = [
	{
		quote:
			'Octoddler has been transformative for our daughter. She loves going to school every day and comes home excited to share what she learned. The Montessori approach has helped her become more independent and confident.',
		author: 'Sarah M.',
		role: 'Parent',
	},
	{
		quote:
			"The teachers truly understand each child's needs and interests. They create a nurturing environment where my son can explore and learn at his own pace. We see remarkable growth in his curiosity and problem-solving skills.",
		author: 'Michael R.',
		role: 'Parent',
	},
	{
		quote:
			"We couldn't be happier with the Montessori approach at Octoddler. The focus on practical life skills and hands-on learning has made such a difference. Our daughter is thriving both academically and socially.",
		author: 'Jennifer L.',
		role: 'Parent',
	},
]

export function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowLeft') {
			e.preventDefault()
			handlePrev()
		} else if (e.key === 'ArrowRight') {
			e.preventDefault()
			handleNext()
		}
	}

	return (
		<section className="py-section-sm">
			<Container>
				<FadeIn>
					<h2 className="mb-12 text-center font-heading text-xs font-bold uppercase tracking-[0.166em] text-muted">
						Kind Words From Families
					</h2>
				</FadeIn>

				<FadeIn delay={0.1}>
					<div className="relative mx-auto max-w-3xl">
						<div
							className="overflow-hidden pb-14"
							role="region"
							aria-roledescription="carousel"
							aria-label="Parent testimonials"
							aria-live="polite"
							aria-atomic="true"
							onKeyDown={handleKeyDown}
							tabIndex={0}
						>
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className={`transition-opacity duration-500 ${
										index === activeIndex
											? 'opacity-100'
											: 'absolute inset-0 opacity-0 pointer-events-none'
									}`}
									role="group"
									aria-roledescription="slide"
									aria-label={`Slide ${index + 1} of ${testimonials.length}`}
									aria-hidden={index !== activeIndex}
								>
									<div className="text-center">
										<blockquote className="font-display text-xl italic leading-relaxed md:text-2xl">
											&ldquo;{testimonial.quote}&rdquo;
										</blockquote>
										<p className="mt-6 font-heading text-sm font-medium uppercase tracking-wide text-muted">
											&mdash; {testimonial.author}, {testimonial.role}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Controls */}
						<div className="flex items-center justify-center gap-6">
							<button
								type="button"
								onClick={handlePrev}
								className="p-2 text-foreground transition-colors hover:text-primary"
								aria-label="Previous testimonial"
							>
								<ChevronLeft className="h-5 w-5" />
							</button>

							<div className="flex gap-2">
								{testimonials.map((_, index) => (
									<button
										key={index}
										type="button"
										onClick={() => setActiveIndex(index)}
										className={`h-2 w-2 rounded-full transition-colors ${
											index === activeIndex ? 'bg-primary' : 'bg-border'
										}`}
										aria-label={`Go to testimonial ${index + 1}`}
									/>
								))}
							</div>

							<button
								type="button"
								onClick={handleNext}
								className="p-2 text-foreground transition-colors hover:text-primary"
								aria-label="Next testimonial"
							>
								<ChevronRight className="h-5 w-5" />
							</button>
						</div>
					</div>
				</FadeIn>
			</Container>
		</section>
	)
}
