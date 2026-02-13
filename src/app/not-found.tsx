import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
	return (
		<main
			id="main-content"
			className="flex min-h-screen items-center justify-center"
		>
			<Container className="text-center">
				<span className="font-display text-8xl text-primary">404</span>
				<h1 className="mt-4 font-heading text-3xl font-medium">
					Page Not Found
				</h1>
				<p className="mt-4 text-lg text-muted">
					The page you&apos;re looking for doesn&apos;t exist or has been moved.
				</p>
				<Button href="/" className="mt-8">
					Back to Home
				</Button>
			</Container>
		</main>
	)
}
