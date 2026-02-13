import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getAllPosts, getPostsByCategory, formatDate, BLOG_CATEGORIES } from '@/lib/blog'
import type { BlogCategory } from '@/lib/blog'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import { Newsletter } from '@/components/sections/Newsletter'
import { cn } from '@/lib/utils'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

export const metadata = createMetadata({
	title: 'Montessori Blog',
	description:
		'Explore our collection of articles on Montessori education, child development, parenting tips, and learning activities.',
	path: '/blog',
})

type BlogPageProps = {
	searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
	const { category } = await searchParams
	const isValidCategory =
		category && (BLOG_CATEGORIES as readonly string[]).includes(category)
	const posts = isValidCategory
		? getPostsByCategory(category as BlogCategory)
		: getAllPosts()

	const breadcrumbItems = [{ label: 'Blog', href: '/blog' }]

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', href: '/' },
		{ name: 'Blog', href: '/blog' },
	])

	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>

			<Container>
				<Breadcrumbs items={breadcrumbItems} />

				<div className="py-section">
					<FadeIn>
						<SectionHeading
							title="Montessori Blog"
							subtitle="Insights, tips, and stories from our Montessori community"
							align="center"
							className="mb-16"
							as="h1"
						/>
					</FadeIn>

					{/* Category filter */}
					<FadeIn delay={0.05}>
						<nav
							className="mb-16 flex flex-wrap items-center justify-center gap-3"
							aria-label="Blog categories"
						>
							<Link
								href="/blog"
								className={cn(
									'rounded-full border-[3px] px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide transition-all duration-200',
									!isValidCategory
										? 'border-primary bg-primary/10 text-foreground'
										: 'border-border bg-background hover:border-primary hover:bg-primary/5',
								)}
							>
								All Posts
							</Link>
							{BLOG_CATEGORIES.map((cat) => (
								<Link
									key={cat}
									href={`/blog?category=${encodeURIComponent(cat)}`}
									className={cn(
										'rounded-full border-[3px] px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide transition-all duration-200',
										category === cat
											? 'border-primary bg-primary/10 text-foreground'
											: 'border-border bg-background hover:border-primary hover:bg-primary/5',
									)}
								>
									{cat}
								</Link>
							))}
						</nav>
					</FadeIn>

					{/* Posts grid */}
					{posts.length > 0 ? (
						<Stagger className="grid gap-10 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
							{posts.map((post) => (
								<StaggerItem key={post.slug}>
									<article className="hover-lift group flex h-full flex-col overflow-hidden rounded-sm border-[5px] border-border bg-card transition-shadow duration-300">
										{post.image ? (
										<div className="relative aspect-video w-full overflow-hidden">
											<Image
												src={post.image}
												alt={post.title}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
											/>
										</div>
									) : (
										<div className="aspect-video w-full bg-border" />
									)}

										<div className="flex flex-1 flex-col p-8">
											{/* Category badge */}
											<Badge variant="primary" className="mb-4 w-fit">
												{post.category}
											</Badge>

											{/* Title */}
											<h2 className="mb-3 font-heading text-xl font-bold leading-tight md:text-2xl">
												<Link
													href={`/blog/${post.slug}`}
													className="transition-colors hover:text-primary"
												>
													{post.title}
												</Link>
											</h2>

											{/* Excerpt */}
											<p className="mb-6 line-clamp-3 text-muted leading-relaxed">
												{post.excerpt}
											</p>

											{/* Meta */}
											<div className="mb-6 mt-auto flex items-center gap-5 text-sm text-muted">
												<div className="flex items-center gap-1.5">
													<Calendar
														className="h-4 w-4"
														aria-hidden="true"
													/>
													<time dateTime={post.date}>
														{formatDate(post.date)}
													</time>
												</div>
												<div className="flex items-center gap-1.5">
													<Clock
														className="h-4 w-4"
														aria-hidden="true"
													/>
													<span>{post.readingTime}</span>
												</div>
											</div>

											{/* Read more link */}
											<Link
												href={`/blog/${post.slug}`}
												className="inline-flex items-center gap-2 font-heading font-semibold uppercase tracking-wide text-primary transition-colors hover:text-primary-dark"
											>
												Read More
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
											</Link>
										</div>
									</article>
								</StaggerItem>
							))}
						</Stagger>
					) : (
						<FadeIn>
							<div className="rounded-sm border-[5px] border-border bg-card px-8 py-20 text-center">
								<p className="font-heading text-lg text-muted">
									No posts found in this category. Try another category or check
									back soon!
								</p>
							</div>
						</FadeIn>
					)}
				</div>
			</Container>

			<Newsletter />
		</main>
	)
}
