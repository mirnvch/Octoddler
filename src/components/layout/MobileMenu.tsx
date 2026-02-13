'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'

interface MobileMenuProps {
	isOpen: boolean
	onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	// Handle escape key press
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			// Prevent body scroll when menu is open
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose])

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
						onClick={onClose}
						aria-hidden="true"
					/>

					{/* Menu Panel */}
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
						className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-secondary shadow-2xl"
						role="dialog"
						aria-modal="true"
						aria-label="Mobile navigation menu"
					>
						<div className="flex flex-col h-full">
							{/* Close Button */}
							<div className="flex justify-end p-6">
								<button
									type="button"
									onClick={onClose}
									className="p-2 text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
									aria-label="Close mobile menu"
								>
									<X className="w-6 h-6" />
								</button>
							</div>

							{/* Navigation Links */}
							<nav className="flex-1 px-6 py-8" aria-label="Mobile navigation">
								<ul className="flex flex-col gap-6">
									{NAV_ITEMS.map((item, index) => (
										<motion.li
											key={item.href}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.05 + 0.1 }}
										>
											<Link
												href={item.href}
												onClick={onClose}
												className="block font-heading text-2xl font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors duration-200"
											>
												{item.label}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>

							{/* CTA Button */}
							<div className="p-6 border-t border-foreground/10">
								<Link
									href="/contact"
									onClick={onClose}
									className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-heading text-lg font-bold uppercase tracking-wide text-foreground transition-colors duration-200 hover:bg-primary/80"
								>
									Schedule a Tour
								</Link>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}
