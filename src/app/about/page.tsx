import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, BookOpen, Sparkles } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Timeline } from '@/components/sections/Timeline'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { LottieAnimation } from '@/components/illustrations/LottieAnimation'

export const metadata: Metadata = createMetadata({
	title: 'Our Story',
	description:
		"Learn about Octoddler School's journey nurturing children through Montessori education in Irvine and Ladera Ranch, California.",
	path: '/about',
})

const VALUES = [
	{
		icon: Heart,
		number: '01',
		title: 'Love & Respect',
		description:
			'Every child is cherished as a unique individual with their own pace of development and learning style.',
	},
	{
		icon: BookOpen,
		number: '02',
		title: 'Prepared Environment',
		description:
			'Thoughtfully designed classrooms that encourage exploration, independence, and hands-on learning.',
	},
	{
		icon: Sparkles,
		number: '03',
		title: 'Joy of Discovery',
		description:
			'We nurture natural curiosity and foster a lifelong love of learning through authentic Montessori materials.',
	},
]

const breadcrumbItems = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Our Story',
		href: '/about',
	},
]

export default function AboutPage() {
	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
				}}
			/>

			{/* Breadcrumbs */}
			<Container>
				<Breadcrumbs
					items={[
						{
							label: 'Our Story',
							href: '/about',
						},
					]}
				/>
			</Container>

			{/* Hero Section — Overlapping image + peach box pattern */}
			<section className="py-[60px] md:py-[80px]">
				<Container>
					<div className="grid items-center md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_440px]">
						{/* Peach box with school history text */}
						<FadeIn direction="left">
							<div className="relative z-10 bg-secondary px-8 py-8 md:px-[52px] md:py-[50px]">
								<p className="font-heading text-sm uppercase tracking-wider text-foreground/60">
									Montessori education, est. 2013
								</p>

								<h1 className="mt-3 font-heading text-4xl font-bold uppercase tracking-wide md:text-5xl lg:text-6xl">
									Our Story
								</h1>

								<hr className="my-6 border-foreground/20" />

								<div className="space-y-5 text-foreground/80">
									<p>
										For over a decade, Octoddler School has been a beacon of
										authentic Montessori education in Orange County. We believe
										every child deserves a nurturing environment where they can
										grow at their own pace, discover their passions, and develop
										into confident, capable individuals.
									</p>
									<p>
										Our educators hold AMI and AMS certifications, bringing deep
										expertise in child development and the Montessori method to
										every interaction. We blend time-tested Montessori materials
										with thoughtful, modern practices — creating a program that
										honors tradition while meeting the needs of today&apos;s
										families.
									</p>
								</div>
							</div>
						</FadeIn>

						{/* Overlapping image */}
						<FadeIn direction="right" delay={0.2}>
							<div className="-mt-15 md:mt-0 md:-ml-[100px]">
								<div className="relative aspect-[3/4] w-full md:w-[380px] lg:w-[440px]">
									<Image
										src="/images/hero/hero-teacher.avif"
										alt="Montessori teacher guiding a child through a hands-on learning activity at Octoddler School"
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 440px"
										priority
									/>
								</div>
							</div>
						</FadeIn>
					</div>
				</Container>
			</section>

			{/* Where It All Began — animated illustration */}
			<section className="py-[60px] md:py-[80px]">
				<Container>
					<FadeIn>
						<div className="grid items-center gap-16 md:grid-cols-2">
							<div className="space-y-6">
								<p className="font-heading text-sm uppercase tracking-wider text-muted">
									Our Beginning
								</p>
								<h2 className="font-heading text-3xl font-bold uppercase tracking-wide md:text-4xl">
									Where It All Began
								</h2>

								<hr className="w-16 border-border" />

								<div className="space-y-5 text-muted leading-relaxed">
									<p>
										Founded in 2013, Octoddler School started with a simple yet
										powerful vision: to bring Dr. Maria Montessori&apos;s
										revolutionary educational philosophy to families in Orange
										County. What began as a single classroom in Irvine has
										blossomed into a network of four thriving campuses.
									</p>
									<p>
										Our founders, passionate educators and parents themselves,
										witnessed firsthand the transformative power of Montessori
										education. They saw children who were once hesitant become
										confident explorers, quiet observers become enthusiastic
										learners, and dependent toddlers become remarkably
										independent individuals.
									</p>
									<p>
										Today, we serve over 100 families across Irvine and Ladera
										Ranch, maintaining our commitment to small class sizes,
										AMI/AMS-certified educators, and an unwavering dedication to
										the authentic Montessori method.
									</p>
								</div>
							</div>

							<div className="overflow-hidden rounded-sm border-[5px] border-border bg-primary/5">
								<div className="aspect-[4/3]">
									<LottieAnimation
										src="/animations/growing-plant.json"
										className="p-6"
									/>
								</div>
							</div>
						</div>
					</FadeIn>
				</Container>
			</section>

			{/* Timeline Section */}
			<Timeline />

			{/* Mission & Values Section */}
			<section className="py-[60px] md:py-[80px]">
				<Container>
					<FadeIn>
						<div className="mb-16 text-center">
							<p className="font-heading text-sm uppercase tracking-wider text-muted">
								What Guides Us
							</p>
							<h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl">
								Our Values
							</h2>
							<p className="mx-auto mt-4 max-w-xl text-lg text-muted">
								The principles that guide everything we do
							</p>
						</div>
					</FadeIn>

					<Stagger className="grid gap-8 md:grid-cols-3" amount={0.05}>
						{VALUES.map((value) => {
							const Icon = value.icon
							return (
								<StaggerItem key={value.title}>
									<div className="hover-lift border-[5px] border-border bg-background p-8 text-center">
										<span className="font-abril text-5xl text-primary/30">
											{value.number}
										</span>
										<div className="mt-4 flex justify-center">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
												<Icon
													className="h-8 w-8 text-primary"
													strokeWidth={1.5}
												/>
											</div>
										</div>
										<h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-wide md:text-2xl">
											{value.title}
										</h3>
										<hr className="mx-auto my-4 w-12 border-border" />
										<p className="text-muted leading-relaxed">
											{value.description}
										</p>
									</div>
								</StaggerItem>
							)
						})}
					</Stagger>
				</Container>
			</section>

			{/* Testimonials Section */}
			<Testimonials />

			{/* Newsletter Section */}
			<Newsletter />

			{/* CTA Section — EnrollmentCTA style */}
			<section className="py-[60px] md:py-[80px]">
				<Container className="max-w-3xl">
					<FadeIn>
						<div className="border-[5px] border-border bg-background p-12 text-center md:p-16">
							<h2 className="font-heading text-3xl font-bold uppercase tracking-wide">
								Visit Us Today
							</h2>
							<p className="mt-4 font-display text-xl italic">
								Schedule a Tour — See Montessori in Action
							</p>

							<hr className="mx-auto my-6 w-24 border-border" />

							<p className="mx-auto max-w-lg text-muted">
								Experience the Octoddler difference firsthand. Visit our
								classrooms, meet our dedicated educators, and see how
								Montessori education can transform your child&apos;s learning
								journey.
							</p>

							<div className="mt-8">
								<Button href="/contact" size="lg">
									Schedule a Tour &rarr;
								</Button>
							</div>
						</div>
					</FadeIn>
				</Container>
			</section>
		</main>
	)
}
