import type { Metadata } from 'next'
import { SITE } from './constants'

export function createMetadata({
	title,
	description,
	path = '',
	image = '/og/default.jpg',
}: {
	title?: string
	description?: string
	path?: string
	image?: string
}): Metadata {
	const pageTitle = title ?? SITE.name
	const ogTitle = title ? `${title} | ${SITE.name}` : SITE.name
	const pageDescription = description ?? SITE.description
	const url = `${SITE.url}${path}`

	return {
		title: pageTitle,
		description: pageDescription,
		metadataBase: new URL(SITE.url),
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: ogTitle,
			description: pageDescription,
			url,
			siteName: SITE.name,
			images: [{ url: image, width: 1200, height: 630, alt: ogTitle }],
			type: 'website',
			locale: 'en_US',
		},
		twitter: {
			card: 'summary_large_image',
			title: ogTitle,
			description: pageDescription,
			images: [image],
		},
	}
}
