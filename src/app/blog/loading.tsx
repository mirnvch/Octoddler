import { Container } from '@/components/ui/Container'

export default function BlogLoading() {
	return (
		<main id="main-content">
			<Container className="py-12">
				{/* Breadcrumb skeleton */}
				<div className="mb-8 h-4 w-24 animate-pulse rounded-sm bg-border" />

				{/* Heading skeleton */}
				<div className="mx-auto mb-12 max-w-2xl text-center">
					<div className="mx-auto mb-4 h-12 w-64 animate-pulse rounded-sm bg-border" />
					<div className="mx-auto h-5 w-96 animate-pulse rounded-sm bg-border" />
				</div>

				{/* Category filter skeleton */}
				<div className="mb-12 flex flex-wrap items-center justify-center gap-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="h-10 w-28 animate-pulse rounded-full bg-border" />
					))}
				</div>

				{/* Posts grid skeleton */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="space-y-4">
							<div className="aspect-video animate-pulse rounded-sm bg-border" />
							<div className="flex gap-2">
								<div className="h-5 w-20 animate-pulse rounded-full bg-border" />
								<div className="h-5 w-16 animate-pulse rounded-sm bg-border" />
							</div>
							<div className="h-6 w-3/4 animate-pulse rounded-sm bg-border" />
							<div className="space-y-2">
								<div className="h-4 w-full animate-pulse rounded-sm bg-border" />
								<div className="h-4 w-2/3 animate-pulse rounded-sm bg-border" />
							</div>
						</div>
					))}
				</div>
			</Container>
		</main>
	)
}
