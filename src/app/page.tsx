import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PROGRAMS, STATS } from '@/lib/constants'

export default function Home() {
	return (
		<>
			{/* Hero */}
			<section className="bg-primary/10 py-section">
				<Container className="text-center">
					<SectionHeading
						title="Where Children Discover the Joy of Learning"
						subtitle="Nurturing independence, confidence, and natural curiosity through Montessori education for children 12 months to 6 years."
						as="h1"
					/>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Button href="/admissions" size="lg">
							Enroll Now
						</Button>
						<Button href="/contact" variant="outline" size="lg">
							Schedule a Tour
						</Button>
					</div>
				</Container>
			</section>

			{/* Main Content */}
			<main id="main-content">
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

				{/* Stats */}
				<section className="bg-primary/5 py-section-sm">
					<Container>
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

				{/* CTA */}
				<section className="py-section-sm">
					<Container className="text-center">
						<SectionHeading
							title="Ready to Start Your Child's Journey?"
							subtitle="Schedule a tour to see our Montessori classrooms and meet our certified educators."
						/>
						<Button href="/contact" size="lg">
							Schedule a Tour
						</Button>
					</Container>
				</section>
			</main>
		</>
	)
}
