import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { FeaturedIn } from '@/components/sections/FeaturedIn'
import { Welcome } from '@/components/sections/Welcome'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { ProgramsShowcase } from '@/components/sections/ProgramsShowcase'
import { FeaturedQuote } from '@/components/sections/FeaturedQuote'
import { Benefits } from '@/components/sections/Benefits'
import { Testimonials } from '@/components/sections/Testimonials'
import { Stats } from '@/components/sections/Stats'
import { Newsletter } from '@/components/sections/Newsletter'
import { EnrollmentCTA } from '@/components/sections/EnrollmentCTA'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
	title: 'Montessori Education in Irvine & Ladera Ranch',
	description:
		'Nurturing independence, confidence, and natural curiosity in children 12 months to 6 years through authentic Montessori education in Irvine and Ladera Ranch, CA.',
	path: '/',
})

export default function Home() {
	return (
		<main id="main-content">
			<Hero />
			<FeaturedIn />
			<Welcome />
			<AboutPreview />
			<ProgramsShowcase />
			<FeaturedQuote />
			<Benefits />
			<Testimonials />
			<Stats />
			<Newsletter />
			<EnrollmentCTA />
		</main>
	)
}
