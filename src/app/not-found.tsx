import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export default function NotFound() {
	return (
		<main
			id="main-content"
			className="flex min-h-screen items-center justify-center"
		>
			<Container className="text-center">
				<FadeIn direction="none" duration={0.6}>
					<span className="font-display text-9xl text-primary" aria-hidden="true">404</span>
				</FadeIn>
				<FadeIn direction="up" delay={0.15}>
					<h1 className="mt-4 font-heading text-3xl font-medium">
						Page Not Found
					</h1>
				</FadeIn>
				<FadeIn direction="up" delay={0.25}>
					<p className="mt-4 text-lg text-muted">
						The page you&apos;re looking for doesn&apos;t exist or has been moved.
					</p>
				</FadeIn>
				<FadeIn direction="up" delay={0.35}>
					<Button href="/" className="mt-8">
						Back to Home
					</Button>
				</FadeIn>
			</Container>
		</main>
	)
}
