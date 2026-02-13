import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export function EnrollmentCTA() {
	return (
		<section className="py-section">
			<Container className="max-w-3xl">
				<FadeIn>
					<div className="border-[5px] border-border bg-background p-12 text-center md:p-16">
						<h2 className="font-heading text-3xl font-bold uppercase">
							Enrollment Open
						</h2>
						<p className="mt-4 font-display text-xl italic">
							Schedule a Tour — See Montessori in Action
						</p>

						<hr className="mx-auto my-6 w-24 border-border" />

						<p className="mx-auto max-w-lg text-muted">
							Visit our classrooms, meet our dedicated educators, and
							see firsthand how Montessori nurtures curiosity,
							independence, and a lifelong love of learning in every
							child.
						</p>

						<div className="mt-8">
							<Button href="/contact" size="lg">
								Schedule a Tour &rarr;
							</Button>
						</div>
					</div>
				</FadeIn>
			</Container>
		</section>
	)
}
