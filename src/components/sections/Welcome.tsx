import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

export function Welcome() {
	return (
		<section className="py-section">
			<Container>
				<div className="grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
					{/* Left column — Welcome text */}
					<FadeIn direction="left">
						<div>
							<h2 className="font-heading text-3xl font-bold uppercase tracking-wide md:text-4xl">
								Welcome to Our School
							</h2>
							<div className="mt-8 space-y-5 text-foreground/80">
								<p>
									At Octoddler School, we believe that every child is born with
									an innate desire to learn. Rooted in the Montessori philosophy,
									our approach honors the unique pace and potential of each child,
									allowing them to discover the world through hands-on exploration
									and self-directed activity.
								</p>
								<p>
									Our carefully prepared environment invites curiosity at every
									turn. From thoughtfully arranged materials to open, sunlit
									classrooms, each space is designed to spark wonder and foster
									independence. Children move freely, choose their work, and
									engage deeply — building concentration, confidence, and a
									genuine love of learning.
								</p>
								<p>
									We see education not as something done to children, but as a
									journey they lead. Our teachers serve as gentle guides,
									observing each child closely and offering support precisely
									when it is needed. The result is a warm, respectful community
									where children thrive — socially, emotionally, and
									intellectually.
								</p>
							</div>
						</div>
					</FadeIn>

					{/* Right column — Decorative blockquote */}
					<FadeIn direction="right" delay={0.2}>
						<blockquote className="relative px-2 md:px-4">
							{/* Opening quote mark */}
							<span
								className="block font-display leading-none text-primary"
								style={{ fontSize: '4.75rem' }}
								aria-hidden="true"
							>
								&ldquo;
							</span>

							{/* Quote text */}
							<p className="mt-2 font-display text-xl italic leading-relaxed text-primary/80 md:text-2xl lg:text-[1.625rem]">
								Every child deserves an environment that nurtures their natural
								desire to learn, explore, and grow into confident, capable
								individuals.
							</p>

							{/* Attribution */}
							<footer className="mt-6 font-heading text-sm uppercase tracking-wider text-foreground/60">
								— Alla Akselrod, Founder
							</footer>

							{/* Closing quote mark */}
							<span
								className="mt-2 block text-right font-display leading-none text-primary"
								style={{ fontSize: '4.75rem' }}
								aria-hidden="true"
							>
								&rdquo;
							</span>
						</blockquote>
					</FadeIn>
				</div>
			</Container>
		</section>
	)
}
