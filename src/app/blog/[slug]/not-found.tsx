import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function BlogPostNotFound() {
	return (
		<Container className="py-20 text-center">
			<h1 className="mb-4 font-heading text-4xl font-bold">
				Post Not Found
			</h1>
			<p className="mb-8 text-lg text-muted">
				Sorry, we couldn't find the blog post you're looking for.
			</p>
			<div className="flex flex-wrap justify-center gap-4">
				<Button href="/blog" variant="primary">
					Back to Blog
				</Button>
				<Button href="/" variant="outline">
					Go Home
				</Button>
			</div>
		</Container>
	)
}
