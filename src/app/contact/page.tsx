import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ContactForm } from '@/components/sections/ContactForm'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = createMetadata({
	title: 'Contact Us',
	description:
		'Get in touch with Octoddler School. Schedule a tour, ask questions, or learn more about our Montessori programs for children 12 months to 6 years.',
	path: '/contact',
})

const breadcrumbItems = [{ label: 'Contact', href: '/contact' }]

export default function ContactPage() {
	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'Contact', href: '/contact' },
	])

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<Container>
				<Breadcrumbs items={breadcrumbItems} />

				<div className="py-section">
					<FadeIn>
						<SectionHeading
							title="Get in Touch"
							subtitle="Have questions about our programs? We'd love to hear from you. Reach out to schedule a tour or learn more about enrollment."
							align="center"
							className="mb-16"
							as="h1"
						/>
					</FadeIn>

					<div className="grid gap-16 lg:grid-cols-2">
						{/* Contact Form */}
						<FadeIn>
							<div className="rounded-sm border-[5px] border-border bg-card p-10 md:p-14">
								<h2 className="mb-8 font-heading text-2xl font-medium md:text-3xl">
									Send Us a Message
								</h2>
								<ContactForm />
							</div>
						</FadeIn>

						{/* Contact Information */}
						<div>
							<FadeIn delay={0.05}>
								<h2 className="mb-10 font-heading text-2xl font-medium md:text-3xl">
									Contact Information
								</h2>
							</FadeIn>

							<Stagger className="space-y-6" amount={0.05}>
								<StaggerItem>
									<div className="rounded-sm border-[5px] border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg">
										<div className="flex items-start gap-5">
											<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
												<Phone className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h3 className="mb-2 font-heading text-lg font-medium">
													Phone
												</h3>
												<a
													href={SITE.phoneHref}
													className="link-underline text-muted transition-colors hover:text-foreground"
												>
													{SITE.phone}
												</a>
											</div>
										</div>
									</div>
								</StaggerItem>

								<StaggerItem>
									<div className="rounded-sm border-[5px] border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg">
										<div className="flex items-start gap-5">
											<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
												<Mail className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h3 className="mb-2 font-heading text-lg font-medium">
													Email
												</h3>
												<a
													href={`mailto:${SITE.email}`}
													className="link-underline text-muted transition-colors hover:text-foreground"
												>
													{SITE.email}
												</a>
											</div>
										</div>
									</div>
								</StaggerItem>

								<StaggerItem>
									<div className="rounded-sm border-[5px] border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg">
										<div className="flex items-start gap-5">
											<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
												<MapPin className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h3 className="mb-2 font-heading text-lg font-medium">
													Locations
												</h3>
												<p className="text-muted">
													We have four convenient locations in Irvine and Ladera
													Ranch, CA
												</p>
												<Button
													href="/locations"
													variant="link"
													className="mt-3 px-0"
												>
													View All Locations →
												</Button>
											</div>
										</div>
									</div>
								</StaggerItem>

								<StaggerItem>
									<div className="rounded-sm border-[5px] border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg">
										<div className="flex items-start gap-5">
											<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
												<Clock className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h3 className="mb-2 font-heading text-lg font-medium">
													Hours
												</h3>
												<p className="text-muted">
													Monday – Friday: 7:00 AM – 6:00 PM
												</p>
												<p className="mt-1 text-sm text-muted-light">
													Closed on major holidays
												</p>
											</div>
										</div>
									</div>
								</StaggerItem>

								<StaggerItem>
									<div className="rounded-sm border-[5px] border-border bg-card p-8">
										<h3 className="mb-4 font-heading text-lg font-medium">
											Follow Us
										</h3>
										<div className="flex gap-4">
											<a
												href={SITE.socials.facebook}
												target="_blank"
												rel="noopener noreferrer"
												className="flex h-12 w-12 items-center justify-center rounded-sm border-[3px] border-border transition-all duration-200 hover:border-primary hover:text-primary"
												aria-label="Follow us on Facebook"
											>
												<Facebook className="h-5 w-5" />
											</a>
											<a
												href={SITE.socials.instagram}
												target="_blank"
												rel="noopener noreferrer"
												className="flex h-12 w-12 items-center justify-center rounded-sm border-[3px] border-border transition-all duration-200 hover:border-primary hover:text-primary"
												aria-label="Follow us on Instagram"
											>
												<Instagram className="h-5 w-5" />
											</a>
										</div>
									</div>
								</StaggerItem>
							</Stagger>
						</div>
					</div>

					{/* Map Section */}
					<FadeIn delay={0.1}>
						<div className="mt-20">
							<h2 className="mb-8 font-heading text-2xl font-medium md:text-3xl">
								Visit Our Locations
							</h2>
							<div className="flex aspect-video items-center justify-center rounded-sm border-[5px] border-border bg-card">
								<p className="font-heading text-lg text-muted">Map coming soon</p>
							</div>
						</div>
					</FadeIn>
				</div>
			</Container>
		</main>
	)
}
