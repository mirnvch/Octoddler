import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Newsletter } from '@/components/sections/Newsletter'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { TEAM_MEMBERS } from '@/data/team'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
	title: 'Meet Our Team',
	description:
		'Meet our certified Montessori educators at Octoddler School. AMI and AMS certified teachers dedicated to nurturing your child\'s development.',
	path: '/team',
})

const breadcrumbItems = [{ label: 'Team', href: '/team' }]

export default function TeamPage() {
	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'Team', href: '/team' },
	])

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<Container>
				<Breadcrumbs items={breadcrumbItems} />
			</Container>

			{/* Hero heading */}
			<section className="py-[60px] md:py-[80px]">
				<Container>
					<FadeIn>
						<div className="text-center">
							<p className="font-heading text-sm uppercase tracking-wider text-muted">
								Our Educators
							</p>
							<h1 className="mt-3 font-heading text-4xl font-bold uppercase tracking-wide md:text-5xl lg:text-6xl">
								Meet Our Team
							</h1>
							<p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
								Our certified Montessori educators are passionate about
								nurturing each child&apos;s natural curiosity and love of
								learning
							</p>
						</div>
					</FadeIn>

					{/* Team grid */}
					<Stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
						{TEAM_MEMBERS.map((member, index) => (
							<StaggerItem key={member.slug}>
								<div className="hover-lift border-[5px] border-border bg-background">
									{/* Portrait photo */}
									<div className="relative aspect-[3/4] overflow-hidden">
										<Image
											src={member.image}
											alt={`${member.name} — ${member.role} at Octoddler School`}
											fill
											className="object-cover"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
									</div>

									{/* Info */}
									<div className="p-6 md:p-8">
										<span className="font-abril text-4xl text-primary/20">
											{String(index + 1).padStart(2, '0')}
										</span>
										<h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-wide">
											{member.name}
										</h3>
										<p className="mt-1 font-heading text-sm uppercase tracking-wider text-secondary">
											{member.role}
										</p>
										<hr className="my-4 border-border" />
										<p className="text-muted leading-relaxed">
											{member.bio}
										</p>
									</div>
								</div>
							</StaggerItem>
						))}
					</Stagger>
				</Container>
			</section>

			{/* Join Our Team */}
			<section className="py-[60px] md:py-[80px]">
				<Container className="max-w-3xl">
					<FadeIn>
						<div className="border-[5px] border-border bg-background p-12 text-center md:p-16">
							<h2 className="font-heading text-3xl font-bold uppercase tracking-wide">
								Join Our Team
							</h2>
							<p className="mt-4 font-display text-xl italic">
								Passionate About Montessori? We&apos;d Love to Hear From You
							</p>

							<hr className="mx-auto my-6 w-24 border-border" />

							<p className="mx-auto max-w-lg text-muted">
								We are always looking for passionate, certified Montessori
								educators who share our commitment to authentic learning. If
								you love working with children and want to make a difference,
								reach out today.
							</p>

							<div className="mt-8">
								<Button href="/contact" size="lg">
									Get in Touch &rarr;
								</Button>
							</div>
						</div>
					</FadeIn>
				</Container>
			</section>

			<Newsletter />
		</main>
	)
}
