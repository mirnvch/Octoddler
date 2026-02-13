'use client'

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_ITEMS, SITE } from '@/lib/constants'

interface MobileMenuProps {
	isOpen: boolean
	onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const menuRef = useRef<HTMLDivElement>(null)
	const closeButtonRef = useRef<HTMLButtonElement>(null)

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
				return
			}

			if (e.key === 'Tab' && menuRef.current) {
				const focusable = menuRef.current.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
				)
				const first = focusable[0]
				const last = focusable[focusable.length - 1]

				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault()
					last.focus()
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault()
					first.focus()
				}
			}
		},
		[onClose],
	)

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown)
			document.body.style.overflow = 'hidden'
			requestAnimationFrame(() => closeButtonRef.current?.focus())
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, handleKeyDown])

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
						className="fixed inset-0 z-50 bg-foreground/40"
						onClick={onClose}
						aria-hidden="true"
					/>

					{/* Menu Panel */}
					<motion.div
						ref={menuRef}
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
						className="fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-secondary"
						role="dialog"
						aria-modal="true"
						aria-label="Navigation menu"
					>
						{/* Close Button */}
						<div className="flex justify-end p-6">
							<button
								ref={closeButtonRef}
								type="button"
								onClick={onClose}
								className="p-2 text-foreground transition-colors duration-200 hover:text-foreground/70"
								aria-label="Close navigation menu"
							>
								<X className="h-7 w-7" />
							</button>
						</div>

						{/* Navigation Links */}
						<nav className="flex-1 px-10 py-4" aria-label="Main navigation">
							<ul className="flex flex-col gap-1">
								{NAV_ITEMS.map((item, index) => (
									<motion.li
										key={item.href}
										initial={{ opacity: 0, x: 30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.04 + 0.1 }}
									>
										<Link
											href={item.href}
											onClick={onClose}
											className="link-underline inline-block py-3 font-heading text-2xl font-bold uppercase tracking-wider text-foreground"
										>
											{item.label}
										</Link>
									</motion.li>
								))}
								<motion.li
									initial={{ opacity: 0, x: 30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: NAV_ITEMS.length * 0.04 + 0.1 }}
								>
									<Link
										href="/locations"
										onClick={onClose}
										className="link-underline inline-block py-3 font-heading text-2xl font-bold uppercase tracking-wider text-foreground"
									>
										Locations
									</Link>
								</motion.li>
							</ul>
						</nav>

						{/* Contact Info */}
						<div className="border-t border-foreground/10 p-10">
							<a
								href={SITE.phoneHref}
								className="block font-heading text-lg font-medium text-foreground"
							>
								{SITE.phone}
							</a>
							<a
								href={`mailto:${SITE.email}`}
								className="mt-2 block text-sm text-foreground/80"
							>
								{SITE.email}
							</a>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}
