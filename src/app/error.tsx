'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function Error({
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<main
			id="main-content"
			className="flex min-h-[60vh] items-center justify-center"
		>
			<Container className="text-center">
				<span className="font-display text-6xl text-secondary" aria-hidden="true">
					Oops
				</span>
				<h1 className="mt-4 font-heading text-3xl font-medium">
					Something went wrong
				</h1>
				<p className="mt-4 text-lg text-muted">
					We encountered an unexpected error. Please try again.
				</p>
				<div className="mt-8 flex items-center justify-center gap-4">
					<Button onClick={reset}>
						Try Again
					</Button>
					<Button href="/" variant="outline">
						Back to Home
					</Button>
				</div>
			</Container>
		</main>
	)
}
