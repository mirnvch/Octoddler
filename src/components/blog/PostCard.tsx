import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'
import { formatDate } from '@/lib/blog'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

interface PostCardProps {
	post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
	return (
		<Card className="group flex h-full flex-col overflow-hidden">
			{post.image ? (
				<div className="relative -m-8 mb-6 aspect-video w-full overflow-hidden">
					<Image
						src={post.image}
						alt={post.title}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				</div>
			) : (
				<div className="aspect-video w-full bg-border -m-8 mb-6" />
			)}

			{/* Category badge */}
			<Badge variant="primary" className="mb-3 w-fit">
				{post.category}
			</Badge>

			{/* Title */}
			<h3 className="mb-3 font-heading text-xl font-bold leading-tight">
				<Link
					href={`/blog/${post.slug}`}
					className="transition-colors hover:text-primary"
				>
					{post.title}
				</Link>
			</h3>

			{/* Excerpt */}
			<p className="mb-4 line-clamp-3 text-muted">{post.excerpt}</p>

			{/* Meta */}
			<div className="mb-4 mt-auto flex items-center gap-4 text-sm text-muted">
				<div className="flex items-center gap-1">
					<Calendar className="h-3.5 w-3.5" aria-hidden="true" />
					<time dateTime={post.date}>{formatDate(post.date)}</time>
				</div>
				<div className="flex items-center gap-1">
					<Clock className="h-3.5 w-3.5" aria-hidden="true" />
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
		</Card>
	)
}
