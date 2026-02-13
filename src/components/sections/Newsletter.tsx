import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
	return (
		<section className="py-section-sm">
			<Container>
				<SectionHeading
					title="Stay Connected"
					subtitle="Sign up for parenting tips, Montessori activities, and school updates."
				/>
				<div className="mx-auto max-w-md">
					<form className="flex gap-2">
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							required
							className="flex-1 rounded-sm border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
						/>
						<Button type="submit" variant="primary">
							Subscribe
						</Button>
					</form>
				</div>
			</Container>
		</section>
	)
}
