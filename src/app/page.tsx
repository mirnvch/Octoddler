import { Hero } from '@/components/sections/Hero'
import { Benefits } from '@/components/sections/Benefits'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'
import { FAQ } from '@/components/sections/FAQ'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PROGRAMS, STATS } from '@/lib/constants'

export default function Home() {
	return (
		<main id="main-content">
			{/* Hero */}
			<Hero
				title="Where Children Discover the Joy of Learning"
				subtitle="Nurturing independence, confidence, and natural curiosity through Montessori education for children 12 months to 6 years."
				ctaPrimary={{ label: 'Enroll Now', href: '/admissions' }}
				ctaSecondary={{ label: 'Schedule a Tour', href: '/contact' }}
			/>

			{/* Programs */}
			<section className="py-section-sm">
				<Container>
					<SectionHeading
						title="Our Programs"
						subtitle="Three age-specific programs designed to meet your child where they are in their developmental journey."
					/>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{PROGRAMS.map((program, index) => (
							<Card key={program.slug}>
								<span className="font-display text-6xl text-primary">
									#{index + 1}
								</span>
								<h3 className="mt-4 font-heading text-2xl font-medium">
									{program.title}
								</h3>
								<p className="mt-1 text-sm font-medium text-accent">
									Ages {program.age}
								</p>
								<p className="mt-4 text-muted">{program.description}</p>
								<p className="mt-4 font-heading text-lg font-bold">
									{program.price}
								</p>
								<Button
									href={`/programs/${program.slug}`}
									variant="primary"
									size="sm"
									className="mt-6"
								>
									Learn More
								</Button>
							</Card>
						))}
					</div>
				</Container>
			</section>

			{/* Benefits */}
			<Benefits />

			{/* Testimonials */}
			<Testimonials />

			{/* Stats */}
			<section className="py-section-sm">
				<Container>
					<SectionHeading title="Octoddler by the Numbers" />
					<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
						{STATS.map((stat) => (
							<div
								key={stat.label}
								className="flex aspect-square flex-col items-center justify-center rounded-full border-[5px] border-primary p-4 text-center"
							>
								<span className="font-display text-3xl text-primary md:text-4xl">
									{stat.number}
								</span>
								<span className="mt-1 text-xs font-medium text-muted">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* FAQ */}
			<FAQ />

			{/* Newsletter */}
			<Newsletter />

			{/* CTA */}
			<section className="bg-primary py-section-sm">
				<Container className="text-center">
					<h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
						Ready to Start Your Child&apos;s Journey?
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-lg text-foreground/80">
						Schedule a tour to see our Montessori classrooms and meet our
						certified educators.
					</p>
					<Button href="/contact" size="lg" variant="outline" className="mt-8">
						Schedule a Tour
					</Button>
				</Container>
			</section>
		</main>
	)
}
