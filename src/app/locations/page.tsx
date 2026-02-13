import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { LOCATIONS_DETAIL } from '@/data/locations'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

export const metadata: Metadata = createMetadata({
	title: 'Our Locations',
	description:
		'Visit any of our four Montessori school campuses across Orange County. Serving families in Irvine and Ladera Ranch, California.',
	path: '/locations',
})

const breadcrumbItems = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Our Locations',
		href: '/locations',
	},
]

export default function LocationsPage() {
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
							label: 'Our Locations',
							href: '/locations',
						},
					]}
				/>
			</Container>

			{/* Header Section */}
			<section className="pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
				<Container>
					<FadeIn>
						<div className="max-w-3xl mx-auto text-center">
							<p className="font-heading text-sm uppercase tracking-[0.2em] text-muted mb-6">
								Orange County Montessori
							</p>
							<SectionHeading
								title="Our Locations"
								subtitle="Four beautiful Montessori campuses across Orange County, each thoughtfully designed to nurture your child's natural love of learning."
								as="h1"
							/>
						</div>
					</FadeIn>
				</Container>
			</section>

			{/* Locations Grid */}
			<section className="pb-20 md:pb-28 lg:pb-36">
				<Container>
					<Stagger className="grid gap-10 md:grid-cols-2 lg:gap-12" amount={0.05}>
						{LOCATIONS_DETAIL.map((location) => (
							<StaggerItem key={location.slug}>
								<div className="hover-lift rounded-sm border-[5px] border-border bg-card p-8 md:p-10 flex flex-col h-full">
									{/* Location Name */}
									<h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">
										{location.name}
									</h2>

									{/* Description */}
									<p className="text-muted leading-relaxed mb-6">
										{location.description}
									</p>

									{/* Address & Phone */}
									<div className="space-y-3 mb-8">
										<p className="text-foreground/80 flex items-start gap-3">
											<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
											<span>{location.address}</span>
										</p>
										<p className="text-foreground/80 flex items-center gap-3">
											<Phone className="w-5 h-5 flex-shrink-0 text-primary" />
											<a
												href={`tel:+1${location.phone.replace(/[^0-9]/g, '')}`}
												className="link-underline"
											>
												{location.phone}
											</a>
										</p>
									</div>

									{/* Programs */}
									<div className="mb-8">
										<p className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-3">
											Programs Offered
										</p>
										<div className="flex flex-wrap gap-2">
											{location.programs.map((program) => (
												<Badge key={program} variant="primary">
													{program}
												</Badge>
											))}
										</div>
									</div>

									{/* CTA Link */}
									<div className="mt-auto pt-6 border-t border-border">
										<Link
											href={`/locations/${location.slug}`}
											className="link-underline inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-foreground"
										>
											View Details
											<ArrowRight className="w-4 h-4" />
										</Link>
									</div>
								</div>
							</StaggerItem>
						))}
					</Stagger>
				</Container>
			</section>

			{/* CTA Section */}
			<section className="py-20 md:py-28 lg:py-36 bg-primary/10">
				<Container>
					<FadeIn>
						<div className="max-w-3xl mx-auto text-center">
							<p className="font-heading text-sm uppercase tracking-[0.2em] text-muted mb-6">
								Come Visit Us
							</p>
							<h2 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
								Schedule a Tour at Any Location
							</h2>
							<p className="text-lg md:text-xl leading-relaxed mb-10 text-muted max-w-2xl mx-auto">
								Experience our Montessori classrooms firsthand. Visit the campus
								that is most convenient for your family and see the difference our
								approach makes.
							</p>
							<Button href="/contact" variant="primary" size="lg">
								Contact Us
							</Button>
						</div>
					</FadeIn>
				</Container>
			</section>
		</main>
	)
}
