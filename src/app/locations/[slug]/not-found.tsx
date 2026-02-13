import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
	return (
		<section className="py-20 md:py-32">
			<Container>
				<div className="max-w-2xl mx-auto text-center">
					<h1 className="font-heading font-medium text-4xl md:text-5xl mb-6">
						Location Not Found
					</h1>
					<p className="text-lg md:text-xl text-muted mb-8">
						We couldn't find the location you're looking for. Please check the URL
						or visit our locations page to see all available campuses.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/locations" variant="primary">
							View All Locations
						</Button>
						<Button href="/" variant="outline">
							Go Home
						</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}
