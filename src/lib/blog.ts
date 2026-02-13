import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
	slug: string
	title: string
	excerpt: string
	date: string
	author: string
	category: BlogCategory
	image?: string
	content: string
	readingTime: string
}

export type BlogCategory =
	| 'Montessori Philosophy'
	| 'Activities & Learning'
	| 'Parenting Tips'
	| 'School News'
	| 'Child Development'

export const BLOG_CATEGORIES: BlogCategory[] = [
	'Montessori Philosophy',
	'Activities & Learning',
	'Parenting Tips',
	'School News',
	'Child Development',
]

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

function getPostFiles(): string[] {
	if (!fs.existsSync(POSTS_DIR)) return []
	return fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'))
}

export function getAllPosts(): BlogPost[] {
	const files = getPostFiles()

	const posts = files
		.map((filename) => {
			const slug = filename.replace('.md', '')
			return getPostBySlug(slug)
		})
		.filter((post): post is BlogPost => post !== null)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

	return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
	const filePath = path.join(POSTS_DIR, `${slug}.md`)

	if (!fs.existsSync(filePath)) return null

	const fileContent = fs.readFileSync(filePath, 'utf-8')
	const { data, content } = matter(fileContent)
	const stats = readingTime(content)

	return {
		slug,
		title: data.title ?? '',
		excerpt: data.excerpt ?? '',
		date: data.date ?? '',
		author: data.author ?? 'Octoddler Team',
		category: data.category ?? 'School News',
		image: data.image,
		content,
		readingTime: stats.text,
	}
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
	return getAllPosts().filter((post) => post.category === category)
}

export function getAllSlugs(): string[] {
	return getPostFiles().map((file) => file.replace('.md', ''))
}

export function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}
