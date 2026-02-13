'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
	question: string
	answer: string
}

interface AccordionProps {
	items: readonly AccordionItem[]
	idPrefix?: string
}

export function Accordion({ items, idPrefix = 'accordion' }: AccordionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className="mx-auto max-w-3xl">
			{items.map((item, index) => {
				const questionId = `${idPrefix}-question-${index}`
				const answerId = `${idPrefix}-answer-${index}`
				const isOpen = openIndex === index

				return (
					<div key={index} className="border-b border-border py-4">
						<button
							onClick={() => toggleQuestion(index)}
							className="flex w-full items-center justify-between gap-4 text-left"
							aria-expanded={isOpen}
							aria-controls={answerId}
							id={questionId}
						>
							<h3 className="font-heading text-lg font-medium">{item.question}</h3>
							<ChevronDown
								className={cn(
									'h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200',
									isOpen && 'rotate-180',
								)}
								aria-hidden="true"
							/>
						</button>
						<div
							id={answerId}
							role="region"
							aria-labelledby={questionId}
							className={cn(
								'grid transition-all duration-200 ease-in-out',
								isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
							)}
						>
							<div className="overflow-hidden">
								<p className="pb-2 pt-3 text-muted">{item.answer}</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
