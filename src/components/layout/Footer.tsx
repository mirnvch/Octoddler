import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/lib/constants'

export function Footer() {
	return (
		<footer role="contentinfo" className="bg-primary py-16 text-foreground">
			<Container>
				{/* Social Icons Row */}
				<div className="mb-12 flex items-center justify-center gap-4">
					<a
						href={SITE.socials.facebook}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-1.5"
						aria-label="Follow us on Facebook"
					>
						<Facebook className="h-6 w-6" />
					</a>
					<a
						href={SITE.socials.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-1.5"
						aria-label="Follow us on Instagram"
					>
						<Instagram className="h-6 w-6" />
					</a>
				</div>

				{/* Three-Column Links Section */}
				<div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
					{/* Column 1 */}
					<div className="flex flex-col gap-3">
						<Link href="/about" className="hover:underline">
							About
						</Link>
						<Link href="/programs" className="hover:underline">
							Programs
						</Link>
						<Link href="/team" className="hover:underline">
							Team
						</Link>
						<Link href="/admissions" className="hover:underline">
							Admissions
						</Link>
					</div>

					{/* Column 2 */}
					<div className="flex flex-col gap-3">
						<Link href="/blog" className="hover:underline">
							Blog
						</Link>
						<Link href="/contact" className="hover:underline">
							Contact
						</Link>
						<Link href="/faq" className="hover:underline">
							FAQ
						</Link>
						<Link href="/resources" className="hover:underline">
							Resources
						</Link>
					</div>

					{/* Column 3 */}
					<div className="flex flex-col gap-3">
						<p className="font-medium">{SITE.name}</p>
						<a href={`tel:${SITE.phone}`} className="hover:underline">
							{SITE.phone}
						</a>
						<a href={`mailto:${SITE.email}`} className="hover:underline">
							{SITE.email}
						</a>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/20 pt-8 md:flex-row">
					<p className="text-sm">
						© 2026 Octoddler School. All rights reserved.
					</p>
					<Link href="/privacy" className="text-sm hover:underline">
						Privacy Policy
					</Link>
				</div>
			</Container>
		</footer>
	)
}
