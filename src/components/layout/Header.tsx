'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, SITE } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<>
			<header className="sticky top-0 z-50 bg-background border-b border-foreground/10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link
							href="/"
							className="font-heading text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
						>
							{SITE.name}
						</Link>

						{/* Desktop Navigation */}
						<nav
							className="hidden lg:flex items-center gap-8"
							aria-label="Main navigation"
						>
							{NAV_ITEMS.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'relative font-heading text-sm font-medium uppercase tracking-wide text-foreground',
										'transition-colors duration-200 hover:text-primary',
										'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200',
										'hover:after:w-full',
									)}
								>
									{item.label}
								</Link>
							))}
						</nav>

						{/* Desktop CTA */}
						<div className="hidden lg:block">
							<Button href="/contact" size="sm">
								Schedule a Tour
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<button
							type="button"
							className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
							onClick={() => setIsMobileMenuOpen(true)}
							aria-label="Open mobile menu"
							aria-expanded={isMobileMenuOpen}
						>
							<Menu className="w-6 h-6" />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</>
	)
}
