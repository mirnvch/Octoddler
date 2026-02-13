import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import { FadeIn } from '@/components/ui/FadeIn'
import { ENROLLMENT_STEPS, TUITION_INFO, ADMISSIONS_FAQ } from '@/data/admissions'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
	title: 'Admissions',
	description:
		'Begin your child\'s Montessori journey at Octoddler School. Learn about our enrollment process, tuition, and program options for ages 12 months to 6 years.',
	path: '/admissions',
})

const breadcrumbItems = [{ label: 'Admissions', href: '/admissions' }]

export default function AdmissionsPage() {
	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'Admissions', href: '/admissions' },
	])

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<Container>
				<Breadcrumbs items={breadcrumbItems} />

				<FadeIn>
					<SectionHeading
						title="Begin Your Child's Journey"
						subtitle="Join our community of families who value authentic Montessori education and child-centered learning."
						align="center"
						as="h1"
					/>
				</FadeIn>

				{/* Enrollment Steps — editorial numbered layout */}
				<section className="mb-24">
					<FadeIn>
						<h2 className="text-center font-heading text-2xl font-medium md:text-3xl">
							Enrollment Process
						</h2>
					</FadeIn>

					<div className="mt-12 flex flex-col gap-[48px]">
						{ENROLLMENT_STEPS.map((item, index) => {
							const isReversed = index % 2 !== 0
							const number = String(item.step).padStart(2, '0')

							return (
								<FadeIn key={item.step} delay={index * 0.1}>
									<div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[120px_1fr] md:gap-12">
										{/* Number */}
										<div
											className={`flex items-center justify-center ${
												isReversed ? 'md:order-2' : ''
											}`}
										>
											<span className="font-abril text-[88px] leading-none text-primary">
												{number}
											</span>
										</div>

										{/* Content */}
										<div
											className={`border-b-[5px] border-border pb-8 ${
												isReversed ? 'md:order-1 md:text-right' : ''
											}`}
										>
											<h3 className="font-heading text-xl font-bold">
												{item.title}
											</h3>
											<p className="mt-2 max-w-lg text-muted">
												{item.description}
											</p>
										</div>
									</div>
								</FadeIn>
							)
						})}
					</div>
				</section>

				{/* Tuition & Pricing */}
				<section className="mb-24">
					<FadeIn>
						<SectionHeading
							title="Tuition & Pricing"
							subtitle="Transparent pricing for full-day and half-day programs."
							align="center"
						/>
					</FadeIn>

					<div className="grid gap-8 md:grid-cols-3">
						{TUITION_INFO.map((program, index) => (
							<FadeIn key={program.program} delay={index * 0.1}>
								<Card className="flex h-full flex-col">
									<div className="text-center">
										<h3 className="font-heading text-xl font-medium">
											{program.program}
										</h3>
										<p className="mt-1 text-sm text-muted">
											{program.age} &middot; {program.ratio} ratio
										</p>

										<div className="mt-6">
											<p className="font-abril text-5xl text-foreground">
												{program.fullDay}
											</p>
											<p className="mt-1 text-sm text-muted">Full-day</p>
										</div>
										<div className="mt-3">
											<p className="font-abril text-3xl text-muted">
												{program.halfDay}
											</p>
											<p className="mt-1 text-sm text-muted">Half-day</p>
										</div>
									</div>

									<ul className="mt-8 flex-grow space-y-3">
										{program.features.map((feature) => (
											<li key={feature} className="flex items-start gap-3">
												<Check className="h-5 w-5 flex-shrink-0 text-primary" />
												<span className="text-sm text-muted">{feature}</span>
											</li>
										))}
									</ul>
								</Card>
							</FadeIn>
						))}
					</div>
				</section>

				{/* FAQ */}
				<section className="mb-24">
					<FadeIn>
						<SectionHeading
							title="Admissions FAQ"
							subtitle="Common questions about enrollment and tuition."
							align="center"
						/>
					</FadeIn>
					<FadeIn delay={0.05}>
						<Accordion items={ADMISSIONS_FAQ} idPrefix="admissions-faq" />
					</FadeIn>
				</section>

				{/* CTA — editorial border style */}
				<FadeIn>
					<section className="mb-24 border-[5px] border-border bg-background p-8 text-center md:p-16">
						<h2 className="font-heading text-2xl font-medium md:text-3xl">
							Ready to Enroll?
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-muted">
							Take the first step by scheduling a tour of our campus. See our
							Montessori classrooms in action and meet our educators.
						</p>
						<div className="mt-8">
							<Button href="/contact" size="lg">
								Schedule a Tour
							</Button>
						</div>
					</section>
				</FadeIn>
			</Container>
		</main>
	)
}
