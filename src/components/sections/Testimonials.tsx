'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const testimonials = [
	{
		quote:
			'Octoddler has been transformative for our daughter. She loves going to school every day and comes home excited to share what she learned. The Montessori approach has helped her become more independent and confident.',
		author: 'Sarah M., Parent',
	},
	{
		quote:
			'The teachers truly understand each child\'s needs and interests. They create a nurturing environment where my son can explore and learn at his own pace. We see remarkable growth in his curiosity and problem-solving skills.',
		author: 'Michael R., Parent',
	},
	{
		quote:
			'We couldn\'t be happier with the Montessori approach at Octoddler. The focus on practical life skills and hands-on learning has made such a difference. Our daughter is thriving both academically and socially.',
		author: 'Jennifer L., Parent',
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

	return (
		<section className="bg-primary/5 py-section-sm">
			<Container>
				<SectionHeading title="What Parents Say" />
				<div className="relative mx-auto max-w-3xl">
					<div className="overflow-hidden">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className={`transition-opacity duration-500 ${
									index === activeIndex
										? 'opacity-100'
										: 'absolute inset-0 opacity-0'
								}`}
							>
								<div className="text-center">
									<div className="mb-4 font-display text-6xl leading-none text-primary opacity-30">
										&ldquo;
									</div>
									<blockquote className="font-display text-xl italic md:text-2xl">
										{testimonial.quote}
									</blockquote>
									<p className="mt-4 font-heading font-medium">
										&mdash; {testimonial.author}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="mt-8 flex items-center justify-center gap-4">
						<Button
							variant="ghost"
							size="sm"
							onClick={handlePrev}
							className="!p-2"
							aria-label="Previous testimonial"
						>
							<ChevronLeft className="h-6 w-6" />
						</Button>
						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveIndex(index)}
									className={`h-2 w-2 rounded-full transition-colors ${
										index === activeIndex ? 'bg-primary' : 'bg-muted/30'
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>
						<Button
							variant="ghost"
							size="sm"
							onClick={handleNext}
							className="!p-2"
							aria-label="Next testimonial"
						>
							<ChevronRight className="h-6 w-6" />
						</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}
