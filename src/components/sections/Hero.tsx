import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

export function Hero() {
	return (
		<section>
			<Container>
				<div className="grid items-center gap-8 pb-0 pt-12 md:grid-cols-2 md:gap-12 md:pt-20">
					{/* Text */}
					<FadeIn direction="left">
						<h1 className="text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
							<span className="font-display italic">Where Children</span>
							<br />
							<span className="font-heading text-5xl font-bold uppercase tracking-wide md:text-6xl lg:text-7xl">
								Discover
							</span>
							<br />
							<span className="font-display italic">the Joy of Learning</span>
						</h1>
					</FadeIn>

					{/* Image */}
					<FadeIn direction="right" delay={0.2}>
						<div className="relative aspect-[4/3] overflow-hidden rounded-sm">
							<Image
								src="/images/hero/hero-grid.avif"
								alt="Children learning in Montessori classroom at Octoddler School"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
								priority
							/>
						</div>
					</FadeIn>
				</div>
			</Container>

			{/* Green Bar */}
			<div className="mt-12 bg-primary py-14 md:mt-16">
				<Container>
					<FadeIn>
						<div className="text-center text-foreground">
							<p className="font-heading text-sm font-light uppercase tracking-[0.166em]">
								with
							</p>
							<h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-wide md:text-4xl">
								Octoddler School
							</h2>
							<p className="mt-3 text-base md:text-lg">
								Montessori Education for Ages 12mo – 6yr
							</p>
						</div>
					</FadeIn>
				</Container>
			</div>
		</section>
	)
}
