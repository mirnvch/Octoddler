import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
	BookOpen,
	Users,
	Clock,
	Heart,
	Sparkles,
	Palette,
	CheckCircle,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { PROGRAMS_DETAIL } from '@/data/programs-detail'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	return PROGRAMS_DETAIL.map((program) => ({
		slug: program.slug,
	}))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params
	const program = PROGRAMS_DETAIL.find((p) => p.slug === params.slug)

	if (!program) {
		return {}
	}

	return createMetadata({
		title: program.title,
		description: program.heroDescription,
		path: `/programs/${program.slug}`,
	})
}

const CURRICULUM_ICONS = {
	'Practical Life': Heart,
	Sensorial: Sparkles,
	Language: BookOpen,
	'Language Arts': BookOpen,
	Mathematics: Clock,
	'Cultural Studies': Users,
	'Creative Arts': Palette,
	'Creative Expression': Palette,
	Movement: Users,
	'Social & Emotional': Heart,
}

export default async function ProgramPage(props: Props) {
	const params = await props.params
	const program = PROGRAMS_DETAIL.find((p) => p.slug === params.slug)

	if (!program) {
		notFound()
	}

	const breadcrumbItems = [
		{ label: 'Programs', href: '/programs' },
		{ label: program.title, href: `/programs/${program.slug}` },
	]

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'Programs', href: '/programs' },
		{ name: program.title, href: `/programs/${program.slug}` },
	])

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<Container>
				<Breadcrumbs items={breadcrumbItems} />

				{/* Hero Section */}
				<section className="mb-20">
					<FadeIn>
						<div className="mb-6 flex flex-wrap items-center gap-4">
							<span className="rounded-sm bg-primary px-4 py-2 font-heading font-medium">
								Ages {program.age}
							</span>
							<span className="text-muted">Ratio: {program.ratio}</span>
						</div>
						<h1 className="mb-6 font-heading text-4xl font-medium md:text-5xl lg:text-6xl">
							{program.title}
						</h1>
						<p className="max-w-3xl text-xl text-muted">
							{program.heroDescription}
						</p>
					</FadeIn>
				</section>

				{/* Curriculum Section */}
				<section className="mb-20">
					<FadeIn>
						<SectionHeading
							title="Curriculum Areas"
							subtitle="A comprehensive Montessori curriculum that develops the whole child across key learning domains."
							align="left"
						/>
					</FadeIn>
					<Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
						{program.curriculum.map((item) => {
							const Icon =
								CURRICULUM_ICONS[
									item.area as keyof typeof CURRICULUM_ICONS
								] || BookOpen
							return (
								<StaggerItem key={item.area}>
									<Card bordered={false} className="bg-card">
										<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
											<Icon className="h-6 w-6 text-primary" />
										</div>
										<h3 className="mb-3 font-heading text-xl font-medium">
											{item.area}
										</h3>
										<p className="text-sm text-muted">{item.description}</p>
									</Card>
								</StaggerItem>
							)
						})}
					</Stagger>
				</section>

				{/* Daily Schedule Section */}
				<section className="mb-20">
					<FadeIn>
						<SectionHeading
							title="Daily Schedule"
							subtitle="A thoughtfully designed rhythm that balances focused learning, outdoor play, rest, and creative exploration."
							align="left"
						/>
					</FadeIn>
					<FadeIn delay={0.1}>
						<Card>
							<div className="space-y-4">
								{program.schedule.map((item, index) => (
									<div
										key={`${item.time}-${index}`}
										className="flex flex-col gap-3 border-b border-border pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
									>
										<span className="font-heading text-lg font-medium text-accent">
											{item.time}
										</span>
										<span className="text-muted sm:text-right">
											{item.activity}
										</span>
									</div>
								))}
							</div>
						</Card>
					</FadeIn>
				</section>

				{/* Pricing Section */}
				<section className="mb-20">
					<FadeIn>
						<SectionHeading
							title="Tuition & What's Included"
							subtitle="Transparent pricing with everything your child needs for a nurturing Montessori experience."
							align="left"
						/>
					</FadeIn>
					<FadeIn delay={0.1}>
						<div className="grid gap-8 lg:grid-cols-2">
							<Card className="flex flex-col justify-between bg-secondary/5">
								<div>
									<div className="mb-6">
										<p className="mb-2 text-sm text-muted">Monthly Tuition</p>
										<p className="font-heading text-5xl font-bold text-accent">
											{program.price}
										</p>
									</div>
									<div className="mb-6">
										<p className="mb-4 font-heading text-lg font-medium">
											Program Features
										</p>
										<ul className="space-y-3">
											{program.features.map((feature, index) => (
												<li
													key={`${feature}-${index}`}
													className="flex items-start gap-3"
												>
													<CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
													<span className="text-sm text-muted">{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								<Button href="/admissions" variant="primary" size="lg">
									Apply Now
								</Button>
							</Card>

							<div className="space-y-6">
								<div>
									<h3 className="mb-3 font-heading text-xl font-medium">
										Schedule Options
									</h3>
									<p className="mb-4 text-muted">
										Full-day program available Monday through Friday, 7:00 AM to
										6:00 PM. Flexible scheduling available to meet your family's
										needs.
									</p>
								</div>
								<div>
									<h3 className="mb-3 font-heading text-xl font-medium">
										Registration Process
									</h3>
									<p className="mb-4 text-muted">
										Begin with a tour to experience our classrooms and meet our
										teachers. After your visit, complete the application and submit
										required documents. We'll guide you through each step.
									</p>
								</div>
								<div>
									<h3 className="mb-3 font-heading text-xl font-medium">
										Questions?
									</h3>
									<p className="mb-4 text-muted">
										Our admissions team is here to help. Contact us to discuss
										tuition, payment plans, sibling discounts, and enrollment
										details.
									</p>
									<Button href="/contact" variant="link" className="p-0">
										Contact Admissions →
									</Button>
								</div>
							</div>
						</div>
					</FadeIn>
				</section>

				{/* CTA Section */}
				<FadeIn>
					<section className="mb-24 rounded-sm bg-primary p-12 text-center md:p-16">
						<h2 className="mb-4 font-heading text-3xl font-medium md:text-4xl">
							Ready to Get Started?
						</h2>
						<p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/80">
							Schedule a personalized tour to see our {program.title} classroom in
							action and meet the dedicated teachers who will guide your child's
							learning journey.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button href="/contact" variant="outline" size="lg">
								Schedule a Tour
							</Button>
							<Button href="/admissions" variant="secondary" size="lg">
								View Admissions
							</Button>
						</div>
					</section>
				</FadeIn>
			</Container>
		</main>
	)
}
