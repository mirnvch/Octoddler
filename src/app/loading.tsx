import { Container } from '@/components/ui/Container'

export default function Loading() {
	return (
		<main id="main-content" className="py-12 md:py-16">
			<Container>
				{/* Heading skeleton */}
				<div className="mx-auto mb-12 max-w-2xl text-center">
					<div className="mx-auto mb-4 h-10 w-3/4 animate-pulse rounded-sm bg-border" />
					<div className="mx-auto h-5 w-1/2 animate-pulse rounded-sm bg-border" />
				</div>

				{/* Content skeleton */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="space-y-4 rounded-sm border border-border bg-card p-6">
							<div className="aspect-video animate-pulse rounded-sm bg-border" />
							<div className="h-5 w-3/4 animate-pulse rounded-sm bg-border" />
							<div className="h-4 w-full animate-pulse rounded-sm bg-border" />
							<div className="h-4 w-2/3 animate-pulse rounded-sm bg-border" />
						</div>
					))}
				</div>
			</Container>
		</main>
	)
}
