import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FadeIn } from '@/components/ui/FadeIn'
import { PROGRAMS } from '@/lib/constants'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
	title: 'Our Programs',
	description:
		'Explore our Montessori programs for children ages 12 months to 6 years. Toddler, Preschool, and Pre-K programs designed to nurture independence and curiosity.',
	path: '/programs',
})

const programDetails = [
	{
		image: '/images/programs/program-1.avif',
		alt: 'Toddler exploring Montessori materials at Octoddler School',
	},
	{
		image: '/images/programs/program-2.avif',
		alt: 'Preschool children engaged in Montessori learning at Octoddler School',
	},
	{
		image: '/images/classroom/primary-2.png',
		alt: 'Pre-K students working together in Montessori classroom at Octoddler School',
	},
] as const

const whyMontessori = [
	{
		title: 'Child-Centered Learning',
		description:
			'The Montessori method follows the child\'s natural development, allowing them to learn at their own pace through hands-on exploration. Our prepared environments encourage independence and self-discovery, building confidence that lasts a lifetime.',
	},
	{
		title: 'Individualized Education',
		description:
			'Each child receives personalized attention from our certified Montessori teachers who observe and guide their unique learning journey. Mixed-age classrooms allow younger children to learn from older peers while older children reinforce their knowledge through teaching.',
	},
	{
		title: 'Hands-On Materials',
		description:
			'Our classrooms are filled with beautiful, purposeful Montessori materials that isolate concepts and engage multiple senses. These materials transform abstract ideas into concrete experiences, making learning natural and joyful.',
	},
] as const

export default function ProgramsPage() {
	const breadcrumbItems = [{ label: 'Programs', href: '/programs' }]

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'Programs', href: '/programs' },
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
						title="Our Programs"
						subtitle="Montessori education tailored to each developmental stage, from toddlers taking their first independent steps to kindergarten-ready scholars."
						as="h1"
					/>
				</FadeIn>

				{/* Programs — alternating image/text layout */}
				<div className="mb-24 flex flex-col gap-[60px]">
					{PROGRAMS.map((program, index) => {
						const isReversed = index % 2 !== 0
						const number = String(index + 1).padStart(2, '0')
						const detail = programDetails[index]

						return (
							<FadeIn key={program.slug} delay={index * 0.1}>
								<div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
									{/* Image */}
									<div
										className={`relative aspect-[4/3] overflow-hidden rounded-sm border-b-[5px] border-border ${
											isReversed ? 'md:order-2' : ''
										}`}
									>
										{detail && (
											<Image
												src={detail.image}
												alt={detail.alt}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										)}
									</div>

									{/* Text */}
									<div
										className={`relative ${
											isReversed ? 'md:order-1' : ''
										}`}
									>
										<span className="font-abril absolute right-0 top-0 text-[88px] leading-none text-primary">
											{number}
										</span>

										<div className="pt-4">
											<p className="font-heading text-sm font-light uppercase tracking-wide text-muted">
												{program.age}
											</p>
											<h2 className="mt-2 font-heading text-2xl font-bold">
												{program.title}
											</h2>
											<p className="mt-1 font-heading text-base font-medium text-muted">
												Starting at {program.price}
											</p>
											<p className="mt-4 text-muted">
												{program.description}
											</p>
											<Button
												href={`/programs/${program.slug}`}
												size="sm"
												className="mt-6"
											>
												Learn More &rarr;
											</Button>
										</div>
									</div>
								</div>
							</FadeIn>
						)
					})}
				</div>

				{/* Why Montessori Section */}
				<section className="mb-24">
					<FadeIn>
						<SectionHeading
							title="Why Montessori?"
							subtitle="A proven educational approach that fosters independence, creativity, and a lifelong love of learning."
						/>
					</FadeIn>

					<div className="grid gap-8 md:grid-cols-3">
						{whyMontessori.map((item, index) => (
							<FadeIn key={item.title} delay={index * 0.1}>
								<Card className="h-full">
									<span className="font-abril block text-[56px] leading-none text-primary">
										{String(index + 1).padStart(2, '0')}
									</span>
									<h3 className="mt-4 font-heading text-xl font-medium">
										{item.title}
									</h3>
									<p className="mt-3 text-muted">
										{item.description}
									</p>
								</Card>
							</FadeIn>
						))}
					</div>
				</section>

				{/* CTA Section */}
				<FadeIn>
					<section className="mb-24 border-[5px] border-border bg-background p-12 text-center md:p-16">
						<h2 className="font-heading text-3xl font-medium md:text-4xl">
							Find the Right Program for Your Child
						</h2>
						<p className="mx-auto mt-4 mb-8 max-w-2xl text-lg text-muted">
							Schedule a tour to visit our classrooms, meet our teachers, and see
							the Montessori difference in action.
						</p>
						<Button href="/contact" size="lg">
							Schedule a Tour
						</Button>
					</section>
				</FadeIn>
			</Container>
		</main>
	)
}
