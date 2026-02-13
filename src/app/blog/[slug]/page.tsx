import { notFound } from 'next/navigation'
import { Clock, Calendar } from 'lucide-react'
import {
	getAllSlugs,
	getPostBySlug,
	formatDate,
	getPostsByCategory,
} from '@/lib/blog'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateArticleSchema } from '@/lib/schema'
import { markdownToHtml } from '@/lib/markdown'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { PostCard } from '@/components/blog/PostCard'
import { Newsletter } from '@/components/sections/Newsletter'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

interface PageProps {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	const slugs = getAllSlugs()
	return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params
	const post = getPostBySlug(slug)

	if (!post) {
		return createMetadata({
			title: 'Post Not Found',
			description: 'The requested blog post could not be found.',
			path: `/blog/${slug}`,
		})
	}

	return createMetadata({
		title: post.title,
		description: post.excerpt,
		path: `/blog/${post.slug}`,
		image: post.image || '/og/blog.jpg',
	})
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params
	const post = getPostBySlug(slug)

	if (!post) {
		notFound()
	}

	// Get related posts from same category
	const relatedPosts = getPostsByCategory(post.category)
		.filter((p) => p.slug !== post.slug)
		.slice(0, 3)

	const breadcrumbItems = [
		{ label: 'Blog', href: '/blog' },
		{ label: post.title, href: `/blog/${post.slug}` },
	]

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'Blog', href: '/blog' },
		{ name: post.title, href: `/blog/${post.slug}` },
	])

	const articleSchema = generateArticleSchema(post)

	const contentHtml = markdownToHtml(post.content)

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>

			<article>
				<Container className="py-12">
					<Breadcrumbs items={breadcrumbItems} />

					{/* Article header */}
					<FadeIn>
						<header className="mb-8 max-w-3xl">
							<Badge variant="primary" className="mb-4">
								{post.category}
							</Badge>

							<h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl">
								{post.title}
							</h1>

							<div className="flex flex-wrap items-center gap-4 text-sm text-muted">
								<div className="flex items-center gap-1.5">
									<Calendar className="h-4 w-4" aria-hidden="true" />
									<time dateTime={post.date}>{formatDate(post.date)}</time>
								</div>
								<div className="flex items-center gap-1.5">
									<Clock className="h-4 w-4" aria-hidden="true" />
									<span>{post.readingTime}</span>
								</div>
								<div>By {post.author}</div>
							</div>
						</header>
					</FadeIn>

					{/* Featured image */}
					<FadeIn delay={0.1}>
						{post.image ? (
							<div className="mb-12 aspect-video w-full overflow-hidden rounded-sm border-[5px] border-border bg-border" />
						) : (
							<div className="mb-12 aspect-video w-full bg-border" />
						)}
					</FadeIn>

					{/* Article content */}
					<FadeIn delay={0.15}>
						<div className="mx-auto max-w-3xl">
							<div
								className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-3xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-2xl prose-p:mb-6 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-strong:text-foreground prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted prose-ul:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2"
								dangerouslySetInnerHTML={{ __html: contentHtml }}
							/>
						</div>
					</FadeIn>

					{/* Author block */}
					<div className="mx-auto mt-16 max-w-3xl">
						<Card>
							<h3 className="mb-2 font-heading text-xl font-bold">
								About the Author
							</h3>
							<p className="mb-1 font-semibold">{post.author}</p>
							<p className="text-sm text-muted">Montessori Educator</p>
						</Card>
					</div>

					{/* Related posts */}
					{relatedPosts.length > 0 && (
						<div className="mt-20">
							<FadeIn>
								<h2 className="mb-8 text-center font-heading text-3xl font-bold">
									Related Articles
								</h2>
							</FadeIn>
							<Stagger>
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{relatedPosts.map((relatedPost) => (
										<StaggerItem key={relatedPost.slug}>
											<PostCard post={relatedPost} />
										</StaggerItem>
									))}
								</div>
							</Stagger>
						</div>
					)}
				</Container>

				<Newsletter />

				{/* CTA section */}
				<section className="bg-primary/10 py-16">
					<Container>
						<FadeIn>
							<div className="mx-auto max-w-2xl text-center">
								<h2 className="mb-4 font-heading text-3xl font-bold">
									Ready to Learn More?
								</h2>
								<p className="mb-8 text-lg text-muted">
									Discover how our Montessori approach nurtures your child's
									natural curiosity and love of learning.
								</p>
								<div className="flex flex-wrap justify-center gap-4">
									<Button href="/locations" variant="primary" size="lg">
										Find a Location
									</Button>
									<Button href="/programs" variant="outline" size="lg">
										Our Programs
									</Button>
								</div>
							</div>
						</FadeIn>
					</Container>
				</section>
			</article>
		</main>
	)
}
