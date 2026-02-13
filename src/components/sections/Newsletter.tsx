import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

export function Newsletter() {
	return (
		<section className="py-section-sm">
			<Container>
				<FadeIn>
					<h2 className="text-center font-heading text-2xl font-bold uppercase tracking-wide md:text-3xl">
						Sign Up for School Updates
					</h2>

					<form className="mx-auto mt-8 max-w-[600px]">
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							required
							aria-label="Email address"
							className="w-full rounded-sm border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
						/>
						<button
							type="submit"
							className="mt-4 w-full rounded-sm bg-primary py-4 font-heading font-bold uppercase tracking-wide text-foreground transition-colors duration-200 hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
						>
							Subscribe
						</button>
					</form>
				</FadeIn>
			</Container>
		</section>
	)
}
