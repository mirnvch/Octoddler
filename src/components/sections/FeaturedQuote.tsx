import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

export function FeaturedQuote() {
	return (
		<section className="py-section">
			<Container>
				<FadeIn>
					<blockquote className="relative mx-auto max-w-3xl px-8 md:px-24">
						{/* Opening quote */}
						<span
							className="absolute left-24 top-0 font-display text-[4.75rem] leading-none text-primary opacity-30 select-none"
							aria-hidden="true"
						>
							&ldquo;
						</span>

						<p className="text-center font-heading text-xl font-semibold md:text-2xl">
							We&rsquo;ve seen such wonderful growth in our daughter since
							she started at Octoddler School. The Montessori philosophy
							has truly nurtured her independence, confidence, and natural
							curiosity.
						</p>

						{/* Closing quote */}
						<span
							className="absolute bottom-0 right-24 font-display text-[4.75rem] leading-none text-primary opacity-30 select-none"
							aria-hidden="true"
						>
							&rdquo;
						</span>

						<footer className="mt-6 text-center text-muted">
							&mdash; Sarah M., Parent
						</footer>
					</blockquote>
				</FadeIn>
			</Container>
		</section>
	)
}
