import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/lib/constants'

export function Footer() {
	return (
		<footer role="contentinfo" className="bg-primary py-16 md:py-20">
			<Container>
				{/* Logo */}
				<div className="mb-10 flex justify-center">
					<Link href="/" aria-label={`${SITE.name} — Home`}>
						<Image
							src="/images/logos/oc-logo.png"
							alt={SITE.name}
							width={160}
							height={42}
							className="h-10 w-auto brightness-0 invert opacity-80"
						/>
					</Link>
				</div>

				{/* Social Icons Row */}
				<div className="mb-14 flex items-center justify-center gap-5">
					<a
						href={SITE.socials.facebook}
						target="_blank"
						rel="noopener noreferrer"
						className="hover-lift flex h-[72px] w-[72px] items-center justify-center rounded-full bg-foreground text-background md:h-20 md:w-20"
						aria-label="Follow us on Facebook"
					>
						<Facebook className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
					</a>
					<a
						href={SITE.socials.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className="hover-lift flex h-[72px] w-[72px] items-center justify-center rounded-full bg-foreground text-background md:h-20 md:w-20"
						aria-label="Follow us on Instagram"
					>
						<Instagram className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
					</a>
				</div>

				{/* Three-Column Links */}
				<div className="mb-14 grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
					{/* Column 1 — Programs */}
					<div className="flex flex-col items-center gap-3 md:items-start">
						<h3 className="mb-1 font-heading text-xs font-bold uppercase tracking-[0.166em] text-foreground/60">
							Programs
						</h3>
						<Link
							href="/programs/toddler"
							className="link-underline inline-block text-foreground"
						>
							Toddler Program
						</Link>
						<Link
							href="/programs/preschool"
							className="link-underline inline-block text-foreground"
						>
							Preschool Program
						</Link>
						<Link
							href="/programs/pre-k"
							className="link-underline inline-block text-foreground"
						>
							Pre-K Program
						</Link>
					</div>

					{/* Column 2 — School */}
					<div className="flex flex-col items-center gap-3 md:items-start">
						<h3 className="mb-1 font-heading text-xs font-bold uppercase tracking-[0.166em] text-foreground/60">
							School
						</h3>
						<Link href="/about" className="link-underline inline-block text-foreground">
							About
						</Link>
						<Link href="/team" className="link-underline inline-block text-foreground">
							Team
						</Link>
						<Link
							href="/admissions"
							className="link-underline inline-block text-foreground"
						>
							Admissions
						</Link>
						<Link href="/blog" className="link-underline inline-block text-foreground">
							Blog
						</Link>
						<Link href="/faq" className="link-underline inline-block text-foreground">
							FAQ
						</Link>
					</div>

					{/* Column 3 — Contact */}
					<div className="flex flex-col items-center gap-3 md:items-start">
						<h3 className="mb-1 font-heading text-xs font-bold uppercase tracking-[0.166em] text-foreground/60">
							Contact
						</h3>
						<a href={SITE.phoneHref} className="link-underline inline-block text-foreground">
							{SITE.phone}
						</a>
						<a
							href={`mailto:${SITE.email}`}
							className="link-underline inline-block text-foreground"
						>
							{SITE.email}
						</a>
						<Link
							href="/locations"
							className="link-underline inline-block text-foreground"
						>
							Our Locations
						</Link>
						<Link
							href="/contact"
							className="link-underline inline-block text-foreground"
						>
							Schedule a Tour
						</Link>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/20 pt-8 md:flex-row">
					<p className="text-sm text-foreground/70">
						&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
					</p>
					<Link
						href="/privacy"
						className="link-underline text-sm text-foreground/70"
					>
						Privacy Policy
					</Link>
				</div>
			</Container>
		</footer>
	)
}
