import { Heart, Shield, BookOpen, Users, Star, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const benefits = [
	{
		icon: Heart,
		title: 'Montessori Certified',
		description:
			'All lead educators hold AMI or AMS certification, ensuring authentic Montessori education rooted in decades of proven methodology.',
	},
	{
		icon: Shield,
		title: 'Safe Environment',
		description:
			'Licensed, regularly inspected facilities designed with child safety as the top priority at every level.',
	},
	{
		icon: BookOpen,
		title: 'Hands-On Learning',
		description:
			'Authentic Montessori materials and purposeful activities that encourage exploration, discovery, and deep engagement.',
	},
	{
		icon: Users,
		title: 'Small Class Sizes',
		description:
			'A 1:6 teacher-to-student ratio ensures every child receives the personalized attention they deserve.',
	},
	{
		icon: Star,
		title: 'Parent Partnership',
		description:
			'Regular updates, parent conferences, and an open-door policy keep you connected to your child\'s growth.',
	},
	{
		icon: Sparkles,
		title: 'Holistic Development',
		description:
			'Nurturing social, emotional, cognitive, and physical growth in harmony — preparing children for life, not just school.',
	},
]

export function Benefits() {
	return (
		<section className="py-section">
			<Container>
				<FadeIn>
					<SectionHeading title="Why Choose Octoddler" />
				</FadeIn>

				{/* Top decorative line */}
				<div className="border-t border-border" />

				<Stagger
					className="mt-10 grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2"
					staggerDelay={0.08}
				>
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon
						const isLastRow =
							benefits.length % 2 === 0
								? index >= benefits.length - 2
								: index >= benefits.length - 1
						return (
							<StaggerItem key={index}>
								<div
									className={`flex items-start gap-4 py-8 ${
										!isLastRow ? 'border-b-[5px] border-border' : ''
									}`}
								>
									<div className="flex-shrink-0">
										<Icon
											className="h-7 w-7 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h3 className="font-heading text-lg font-bold uppercase tracking-wide">
											{benefit.title}
										</h3>
										<p className="mt-2 text-muted">
											{benefit.description}
										</p>
									</div>
								</div>
							</StaggerItem>
						)
					})}
				</Stagger>

				{/* Bottom decorative line */}
				<div className="mt-0 border-t border-border" />
			</Container>
		</section>
	)
}
