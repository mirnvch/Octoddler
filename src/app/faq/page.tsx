import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { FAQ_ITEMS } from '@/data/faq'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = createMetadata({
	title: 'Frequently Asked Questions',
	description:
		'Find answers to common questions about Octoddler School, our Montessori programs, enrollment process, tuition, and more.',
	path: '/faq',
})

const breadcrumbItems = [{ label: 'FAQ', href: '/faq' }]

export default function FAQPage() {
	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'FAQ', href: '/faq' },
	])

	const faqSchema = generateFAQSchema(
		FAQ_ITEMS.map((item) => ({
			question: item.question,
			answer: item.answer,
		})),
	)

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>

			<Container>
				<Breadcrumbs items={breadcrumbItems} />

				<div className="py-section">
					<FadeIn>
						<SectionHeading
							title="Frequently Asked Questions"
							subtitle="We've compiled answers to the most common questions about our Montessori programs, enrollment, and school policies. If you don't find what you're looking for, feel free to reach out."
							align="center"
							className="mb-20"
							as="h1"
						/>
					</FadeIn>

					<FadeIn delay={0.1}>
						<div className="mx-auto max-w-3xl rounded-sm border-[5px] border-border bg-card p-8 md:p-12">
							<Accordion items={FAQ_ITEMS} idPrefix="faq" />
						</div>
					</FadeIn>

					{/* CTA Section */}
					<FadeIn delay={0.15}>
						<div className="mt-20 rounded-sm border-[5px] border-border bg-card p-10 text-center md:p-14">
							<h2 className="mb-4 font-heading text-3xl font-medium md:text-4xl">
								Still Have Questions?
							</h2>
							<p className="mx-auto mb-10 max-w-2xl text-lg text-muted leading-relaxed">
								We're here to help! Contact us to speak with our admissions team
								or schedule a personalized tour of our facilities.
							</p>
							<div className="flex flex-wrap items-center justify-center gap-4">
								<Button href="/contact" size="lg">
									Contact Us
								</Button>
								<Button href="/admissions" variant="outline" size="lg">
									Learn About Admissions
								</Button>
							</div>
						</div>
					</FadeIn>
				</div>
			</Container>
		</main>
	)
}
