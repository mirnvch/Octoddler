export const SITE = {
	name: 'Octoddler School',
	description:
		'Nurturing independence, confidence, and natural curiosity in children 12 months to 6 years through Montessori education.',
	url: 'https://www.octoddlerschool.com',
	email: 'info@octoddlerschool.com',
	phone: '(949) 484-9990',
	phoneHref: 'tel:+19494849990',
	socials: {
		facebook: 'https://www.facebook.com/octoddlerschool',
		instagram: 'https://www.instagram.com/octoddlerschool',
	},
} as const

export const NAV_ITEMS = [
	{ label: 'About', href: '/about' },
	{ label: 'Programs', href: '/programs' },
	{ label: 'Team', href: '/team' },
	{ label: 'Admissions', href: '/admissions' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'FAQ', href: '/faq' },
] as const

export const PROGRAMS = [
	{
		title: 'Toddler Program',
		age: '12–24 months',
		slug: 'toddler',
		description:
			'A nurturing environment where toddlers begin their journey of independence through exploration and sensory activities.',
		price: '$1,310/mo',
	},
	{
		title: 'Preschool Program',
		age: '24–36 months',
		slug: 'preschool',
		description:
			'Building confidence and social skills through hands-on Montessori materials and group activities.',
		price: '$1,240/mo',
	},
	{
		title: 'Pre-K Program',
		age: '3–6 years',
		slug: 'pre-k',
		description:
			'Preparing children for academic success through advanced Montessori curriculum and self-directed learning.',
		price: '$1,120/mo',
	},
] as const

export const STATS = [
	{ number: '100+', label: 'Happy Families' },
	{ number: '10+', label: 'Years of Experience' },
	{ number: '4', label: 'Locations' },
	{ number: '3', label: 'Programs' },
	{ number: '1:6', label: 'Teacher-Student Ratio' },
	{ number: '100%', label: 'Montessori Certified' },
] as const

export const LOCATIONS = [
	{
		name: 'Irvine — Alton',
		slug: 'irvine-alton',
		address: 'Irvine, CA',
	},
	{
		name: 'Irvine — Culver',
		slug: 'irvine-culver',
		address: 'Irvine, CA',
	},
	{
		name: 'Irvine — Sand Canyon',
		slug: 'irvine-sand-canyon',
		address: 'Irvine, CA',
	},
	{
		name: 'Ladera Ranch',
		slug: 'ladera-ranch',
		address: 'Ladera Ranch, CA',
	},
] as const
