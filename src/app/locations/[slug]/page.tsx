import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/schema'
import { LOCATIONS_DETAIL } from '@/data/locations'
import { FadeIn } from '@/components/ui/FadeIn'

type LocationPageProps = {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	return LOCATIONS_DETAIL.map((location) => ({
		slug: location.slug,
	}))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
	const { slug } = await params
	const location = LOCATIONS_DETAIL.find((loc) => loc.slug === slug)

	if (!location) {
		return {}
	}

	return createMetadata({
		title: location.name,
		description: `Visit our ${location.name} Montessori school campus. ${location.description}`,
		path: `/locations/${location.slug}`,
	})
}

export default async function LocationPage({ params }: LocationPageProps) {
	const { slug } = await params
	const location = LOCATIONS_DETAIL.find((loc) => loc.slug === slug)

	if (!location) {
		notFound()
	}

	const breadcrumbItems = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Our Locations',
			href: '/locations',
		},
		{
			name: location.name,
			href: `/locations/${location.slug}`,
		},
	]

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						generateLocalBusinessSchema({
							name: location.name,
							slug: location.slug,
							address: location.address,
						}),
					),
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
						{
							label: location.name,
							href: `/locations/${location.slug}`,
						},
					]}
				/>
			</Container>

			{/* Hero Section */}
			<section className="py-12 md:py-16 lg:py-20">
				<Container>
					<FadeIn>
						<div className="max-w-4xl">
							<h1 className="font-heading font-medium text-4xl md:text-5xl lg:text-6xl mb-4">
								{location.name}
							</h1>
							<p className="text-lg md:text-xl text-muted flex items-start gap-2">
								<MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
								<span>{location.address}</span>
							</p>
						</div>
					</FadeIn>
				</Container>
			</section>

			{/* Main Content */}
			<section className="py-12 md:py-16">
				<Container>
					<FadeIn delay={0.1}>
						<div className="grid lg:grid-cols-2 gap-12">
							{/* Left Column - Info */}
							<div className="space-y-8">
							{/* Description */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">
									About This Location
								</h2>
								<p className="text-muted leading-relaxed">{location.description}</p>
							</div>

							{/* Contact Info */}
							<Card bordered={false} className="bg-card space-y-4">
								<h3 className="font-heading text-xl font-medium mb-4">
									Contact Information
								</h3>

								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
										<div>
											<p className="font-medium mb-1">Hours</p>
											<p className="text-muted">{location.hours}</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
										<div>
											<p className="font-medium mb-1">Phone</p>
											<a
												href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
												className="text-muted hover:text-foreground transition-colors"
											>
												{location.phone}
											</a>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
										<div>
											<p className="font-medium mb-1">Email</p>
											<a
												href={`mailto:${location.email}`}
												className="text-muted hover:text-foreground transition-colors"
											>
												{location.email}
											</a>
										</div>
									</div>
								</div>
							</Card>

							{/* Programs */}
							<div>
								<h3 className="font-heading text-xl font-medium mb-4">
									Programs Available
								</h3>
								<div className="flex flex-wrap gap-2">
									{location.programs.map((program) => (
										<Badge key={program} variant="primary">
											{program}
										</Badge>
									))}
								</div>
							</div>
						</div>

						{/* Right Column - Map & Features */}
						<div className="space-y-8">
							{/* Map Placeholder */}
							<div className="aspect-video bg-border rounded-sm overflow-hidden">
								<div className="w-full h-full flex flex-col items-center justify-center text-muted p-8 text-center">
									<MapPin className="w-12 h-12 mb-3" />
									<p className="text-sm">Interactive Map Placeholder</p>
									<p className="text-xs mt-2">{location.address}</p>
								</div>
							</div>

							{/* Features */}
							<Card bordered={false} className="bg-card">
								<h3 className="font-heading text-xl font-medium mb-6">
									Location Features
								</h3>
								<ul className="space-y-3">
									{location.features.map((feature) => (
										<li key={feature} className="flex items-start gap-3">
											<Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
											<span className="text-muted">{feature}</span>
										</li>
									))}
								</ul>
							</Card>
						</div>
						</div>
					</FadeIn>
				</Container>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-20 bg-secondary">
				<Container>
					<FadeIn>
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
								Visit {location.name}
							</h2>
							<p className="text-lg md:text-xl mb-8 text-foreground/90">
								Schedule a personalized tour of our campus and meet our certified
								Montessori educators. We'd love to show you around!
							</p>
							<Button href="/contact" variant="primary" size="lg">
								Schedule a Tour
							</Button>
						</div>
					</FadeIn>
				</Container>
			</section>
		</main>
	)
}
