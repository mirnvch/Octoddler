import type { Metadata, Viewport } from 'next'
import { Abril_Fatface, DM_Sans, Josefin_Sans, Playfair_Display } from 'next/font/google'
import { SITE } from '@/lib/constants'
import { generateOrganizationSchema } from '@/lib/schema'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const josefinSans = Josefin_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-josefin-sans',
	display: 'swap',
})

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-dm-sans',
	display: 'swap',
})

const playfairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-playfair-display',
	display: 'swap',
	style: ['normal', 'italic'],
})

const abrilFatface = Abril_Fatface({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-abril-fatface',
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		default: `${SITE.name} — Montessori Education in Irvine, CA`,
		template: `%s | ${SITE.name}`,
	},
	description: SITE.description,
	metadataBase: new URL(SITE.url),
	alternates: {
		canonical: SITE.url,
	},
	openGraph: {
		title: `${SITE.name} — Montessori Education in Irvine, CA`,
		description: SITE.description,
		url: SITE.url,
		siteName: SITE.name,
		images: [{ url: '/og/default.jpg', width: 1200, height: 630 }],
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export const viewport: Viewport = {
	themeColor: '#9fc7aa',
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${josefinSans.variable} ${dmSans.variable} ${playfairDisplay.variable} ${abrilFatface.variable}`}
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(generateOrganizationSchema()),
					}}
				/>
				<noscript>
					<style
						dangerouslySetInnerHTML={{
							__html:
								'[style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }',
						}}
					/>
				</noscript>
			</head>
			<body>
				<a href="#main-content" className="skip-nav">
					Skip to main content
				</a>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
