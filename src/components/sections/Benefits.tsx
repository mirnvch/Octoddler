import { Heart, Shield, BookOpen, Users, Star, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const benefits = [
	{
		icon: Heart,
		title: 'Montessori Certified',
		description: 'AMI/AMS certified educators with deep understanding of child development',
	},
	{
		icon: Shield,
		title: 'Safe Environment',
		description: 'Licensed, inspected, child-safe facilities with highest safety standards',
	},
	{
		icon: BookOpen,
		title: 'Hands-On Learning',
		description: 'Authentic Montessori materials and activities for meaningful engagement',
	},
	{
		icon: Users,
		title: 'Small Class Sizes',
		description: '1:6 teacher-student ratio ensuring personalized attention for every child',
	},
	{
		icon: Star,
		title: 'Parent Partnership',
		description: 'Regular updates and parent conferences to support your child together',
	},
	{
		icon: Sparkles,
		title: 'Holistic Development',
		description: 'Nurturing social, emotional, cognitive, and physical growth in harmony',
	},
]

export function Benefits() {
	return (
		<section className="py-section">
			<Container>
				<SectionHeading title="Why Choose Octoddler?" />
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon
						return (
							<div key={index} className="flex flex-col items-center text-center">
								<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background">
									<Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
								</div>
								<h3 className="font-heading text-xl">{benefit.title}</h3>
								<p className="mt-2 text-muted">{benefit.description}</p>
							</div>
						)
					})}
				</div>
			</Container>
		</section>
	)
}
