'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { SITE } from '@/lib/constants'

const MobileMenu = dynamic(
	() => import('./MobileMenu').then((mod) => ({ default: mod.MobileMenu })),
	{ ssr: false },
)

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			<header className="sticky top-0 z-50 bg-background">
				<div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
					<div className="flex h-20 items-center justify-between md:h-24">
						{/* Logo */}
						<Link
							href="/"
							className="relative flex items-center transition-opacity duration-200 hover:opacity-80"
							aria-label={`${SITE.name} — Home`}
						>
							<Image
								src="/images/logos/oc-logo.png"
								alt={SITE.name}
								width={180}
								height={48}
								className="h-10 w-auto md:h-12"
								priority
							/>
						</Link>

						{/* Right Side: Phone + Menu */}
						<div className="flex items-center gap-6 md:gap-8">
							{/* Phone Link — desktop text, mobile icon */}
							<a
								href={SITE.phoneHref}
								className="link-underline hidden font-heading text-sm font-medium uppercase tracking-wide text-foreground sm:inline-block"
							>
								{SITE.phone}
							</a>
							<a
								href={SITE.phoneHref}
								className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary/10 sm:hidden"
								aria-label={`Call ${SITE.phone}`}
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
							</a>

							{/* Menu Button (always visible) */}
							<button
								type="button"
								onClick={() => setIsMenuOpen(true)}
								className="flex items-center gap-2 font-heading text-sm font-medium uppercase tracking-wider text-foreground transition-colors duration-200 hover:text-primary"
								aria-label="Open navigation menu"
								aria-expanded={isMenuOpen}
							>
								<span className="hidden sm:inline">Menu</span>
								<svg
									width="24"
									height="18"
									viewBox="0 0 24 18"
									fill="none"
									aria-hidden="true"
								>
									<line
										x1="0"
										y1="1"
										x2="24"
										y2="1"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<line
										x1="0"
										y1="9"
										x2="24"
										y2="9"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<line
										x1="0"
										y1="17"
										x2="24"
										y2="17"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>

			<MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</>
	)
}
