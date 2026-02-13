import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'

const programs = [
	{
		number: '01',
		age: 'Ages 12–24 Months',
		title: 'Toddler Program',
		price: 'Starting at $1,310/mo',
		description:
			'A nurturing environment designed for your youngest learners. Our toddler program fosters independence, language development, and sensory exploration through carefully prepared Montessori activities.',
		image: '/images/programs/program-1.avif',
		alt: 'Toddler exploring Montessori materials at Octoddler School',
		href: '/programs/toddler',
	},
	{
		number: '02',
		age: 'Ages 24–36 Months',
		title: 'Preschool Program',
		price: 'Starting at $1,240/mo',
		description:
			'Building on natural curiosity, our preschool program encourages practical life skills, early literacy, and social-emotional growth in a warm, community-centered classroom.',
		image: '/images/programs/program-2.avif',
		alt: 'Preschool children engaged in Montessori learning at Octoddler School',
		href: '/programs/preschool',
	},
	{
		number: '03',
		age: 'Ages 3–6 Years',
		title: 'Pre-K Program',
		price: 'Starting at $1,120/mo',
		description:
			'Our Pre-K program prepares children for academic success through advanced Montessori materials, collaborative projects, and a focus on critical thinking and creative expression.',
		image: '/images/classroom/primary-2.png',
		alt: 'Pre-K students working together in Montessori classroom at Octoddler School',
		href: '/programs/pre-k',
	},
] as const

export function ProgramsShowcase() {
	return (
		<section className="py-section">
			<Container>
				<FadeIn>
					<SectionHeading title="Our Programs" />
				</FadeIn>

				<div className="flex flex-col gap-[60px]">
					{programs.map((program, index) => {
						const isReversed = index % 2 !== 0

						return (
							<FadeIn key={program.number} delay={index * 0.1}>
								<div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
									{/* Image */}
									<div
										className={`relative aspect-[4/3] overflow-hidden rounded-sm border-b-[5px] border-border ${
											isReversed ? 'md:order-2' : ''
										}`}
									>
										<Image
											src={program.image}
											alt={program.alt}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									</div>

									{/* Text */}
									<div
										className={`relative ${
											isReversed ? 'md:order-1' : ''
										}`}
									>
										<span className="font-abril absolute right-0 top-0 text-[88px] leading-none text-primary">
											{program.number}
										</span>

										<div className="pt-4">
											<p className="font-heading text-sm font-light uppercase tracking-wide text-muted">
												{program.age}
											</p>
											<h3 className="mt-2 font-heading text-2xl font-bold">
												{program.title}
											</h3>
											<p className="mt-1 font-heading text-base font-medium text-muted">
												{program.price}
											</p>
											<p className="mt-4 text-muted">
												{program.description}
											</p>
											<Button
												href={program.href}
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
			</Container>
		</section>
	)
}
