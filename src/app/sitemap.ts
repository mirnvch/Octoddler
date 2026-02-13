import type { MetadataRoute } from 'next'
import { PROGRAMS, LOCATIONS } from '@/lib/constants'
import { getAllSlugs } from '@/lib/blog'

const BASE_URL = 'https://www.octoddlerschool.com'

export default function sitemap(): MetadataRoute.Sitemap {
	const blogSlugs = getAllSlugs()

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
		{ url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${BASE_URL}/programs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${BASE_URL}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
		{ url: `${BASE_URL}/admissions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${BASE_URL}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
		{ url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
		{ url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
		{ url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
	]

	const programRoutes: MetadataRoute.Sitemap = PROGRAMS.map((program) => ({
		url: `${BASE_URL}/programs/${program.slug}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: 0.8,
	}))

	const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
		url: `${BASE_URL}/locations/${location.slug}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}))

	const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
		url: `${BASE_URL}/blog/${slug}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: 0.6,
	}))

	return [...staticRoutes, ...programRoutes, ...locationRoutes, ...blogRoutes]
}
