import { SITE } from './constants'

export function generateOrganizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: SITE.name,
		url: SITE.url,
		email: SITE.email,
		telephone: SITE.phone,
		sameAs: [SITE.socials.facebook, SITE.socials.instagram],
	}
}

export function generateLocalBusinessSchema(location: {
	name: string
	slug: string
	address: string
	street?: string
	zip?: string
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ChildCare',
		name: `${SITE.name} — ${location.name}`,
		url: `${SITE.url}/locations/${location.slug}`,
		telephone: SITE.phone,
		email: SITE.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: location.street ?? '',
			addressLocality: location.address.replace(', CA', ''),
			addressRegion: 'CA',
			postalCode: location.zip ?? '',
			addressCountry: 'US',
		},
		openingHours: 'Mo-Fr 07:00-18:00',
		priceRange: '$$$',
	}
}

export function generateBreadcrumbSchema(
	items: { name: string; href: string }[],
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: `${SITE.url}${item.href}`,
		})),
	}
}

export function generateArticleSchema(post: {
	title: string
	excerpt: string
	slug: string
	date: string
	author: string
	image?: string
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		description: post.excerpt,
		url: `${SITE.url}/blog/${post.slug}`,
		datePublished: post.date,
		dateModified: post.date,
		author: {
			'@type': 'Person',
			name: post.author,
		},
		publisher: {
			'@type': 'Organization',
			name: SITE.name,
			url: SITE.url,
		},
		image: post.image ? `${SITE.url}${post.image}` : undefined,
	}
}

export function generateFAQSchema(
	questions: { question: string; answer: string }[],
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: questions.map((q) => ({
			'@type': 'Question',
			name: q.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: q.answer,
			},
		})),
	}
}
