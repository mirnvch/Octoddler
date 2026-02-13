'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

interface FAQItem {
	question: string
	answer: string
}

interface FAQProps {
	questions?: FAQItem[]
}

const defaultQuestions: FAQItem[] = [
	{
		question: 'What are your hours?',
		answer:
			'We are open Monday through Friday, from 7:00 AM to 6:00 PM. We follow a standard academic calendar with closures for major holidays.',
	},
	{
		question: 'What is the teacher-student ratio?',
		answer:
			'We maintain a 1:6 ratio for our toddler program and 1:8 for our preschool program, ensuring each child receives personalized attention and support.',
	},
	{
		question: 'How do I enroll my child?',
		answer:
			'Start by scheduling a tour of our facility. After the tour, if you decide to enroll, you can complete the enrollment process through our ProCare system. Our staff will guide you through each step.',
	},
	{
		question: 'Do you follow AMI/AMS standards?',
		answer:
			'Yes, all our educators are AMI (Association Montessori Internationale) or AMS (American Montessori Society) certified. We strictly adhere to Montessori principles and standards.',
	},
	{
		question: 'What ages do you accept?',
		answer:
			'We accept children from 12 months to 6 years old. We have separate programs for toddlers (12-36 months) and preschool/kindergarten (3-6 years).',
	},
]

export function FAQ({ questions = defaultQuestions }: FAQProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className="py-section">
			<Container>
				<SectionHeading title="Frequently Asked Questions" />
				<div className="mx-auto max-w-3xl">
					{questions.map((item, index) => (
						<div key={index} className="border-b border-border py-4">
							<button
								onClick={() => toggleQuestion(index)}
								className="flex w-full items-center justify-between gap-4 text-left"
							>
								<h3 className="font-heading text-lg font-medium">
									{item.question}
								</h3>
								<ChevronDown
									className={cn(
										'h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200',
										openIndex === index && 'rotate-180',
									)}
								/>
							</button>
							<div
								className={cn(
									'grid transition-all duration-200 ease-in-out',
									openIndex === index
										? 'grid-rows-[1fr] opacity-100'
										: 'grid-rows-[0fr] opacity-0',
								)}
							>
								<div className="overflow-hidden">
									<p className="pb-2 pt-3 text-muted">{item.answer}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
