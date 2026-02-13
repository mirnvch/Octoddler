import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

export function AboutPreview() {
	return (
		<section className="py-section">
			<Container>
				<div className="grid items-center md:grid-cols-[1fr_auto]">
					{/* Peach box with text content */}
					<FadeIn direction="left">
						<div className="bg-secondary px-8 py-8 md:px-[52px] md:py-[50px]">
							<h2 className="font-heading text-3xl font-bold uppercase tracking-wide md:text-4xl">
								Octoddler School
							</h2>
							<p className="mt-2 font-heading text-sm uppercase tracking-wider text-foreground/60">
								Montessori education, est. 2013
							</p>

							<hr className="my-6 border-foreground/20" />

							<div className="space-y-5 text-foreground/80">
								<p>
									Founded in 2013 by Alla Akselrod, Octoddler School began with a
									simple but powerful vision: to create a place where young children
									could learn at their own pace in a nurturing, Montessori-inspired
									environment. What started as a small classroom has grown into a
									trusted community institution, guided by the same principles of
									respect, independence, and joy that shaped it from the very first
									day.
								</p>
								<p>
									Our educators hold AMI and AMS certifications, bringing deep
									expertise in child development and the Montessori method to
									every interaction. We blend time-tested Montessori materials
									with thoughtful, modern practices — creating a program that
									honors tradition while meeting the needs of today&apos;s
									families. Every decision we make is rooted in one question:
									what is best for the child?
								</p>
							</div>

							<Link
								href="/about"
								className="link-underline mt-8 inline-block font-heading text-sm font-bold uppercase tracking-wider text-foreground"
							>
								Learn More
							</Link>
						</div>
					</FadeIn>

					{/* Overlapping image */}
					<FadeIn direction="right" delay={0.2}>
						<div className="-mt-15 md:mt-0 md:-ml-[100px]">
							<div className="relative aspect-[3/4] w-full md:w-[380px] lg:w-[440px]">
								<Image
									src="/images/hero/hero-teacher.avif"
									alt="Montessori teacher guiding a child through a hands-on learning activity at Octoddler School"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 440px"
								/>
							</div>
						</div>
					</FadeIn>
				</div>
			</Container>
		</section>
	)
}
