import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
	label: string
	href: string
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[]
	className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
	return (
		<nav aria-label="Breadcrumb" className={cn('py-4', className)}>
			<ol className="flex items-center gap-2 text-sm text-muted">
				<li>
					<Link href="/" className="transition-colors hover:text-foreground">
						Home
					</Link>
				</li>
				{items.map((item, index) => (
					<li key={item.href} className="flex items-center gap-2">
						<ChevronRight className="h-3 w-3" aria-hidden="true" />
						{index === items.length - 1 ? (
							<span aria-current="page" className="text-foreground font-medium">
								{item.label}
							</span>
						) : (
							<Link href={item.href} className="transition-colors hover:text-foreground">
								{item.label}
							</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}
