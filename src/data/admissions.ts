export const ENROLLMENT_STEPS = [
	{
		step: 1,
		title: 'Schedule a Tour',
		description:
			'Visit our campus to see our Montessori classrooms in action. Meet our educators and ask questions about our approach.',
	},
	{
		step: 2,
		title: 'Submit Application',
		description:
			'Complete the enrollment application through our ProCare system. We will review your information and check availability.',
	},
	{
		step: 3,
		title: 'Meet & Greet',
		description:
			'Bring your child for a short visit to meet their future teachers and explore the classroom environment.',
	},
	{
		step: 4,
		title: 'Enrollment Confirmed',
		description:
			'Once accepted, we will provide all the details you need for a smooth transition, including start date and what to bring.',
	},
] as const

export const TUITION_INFO = [
	{
		program: 'Toddler Program',
		age: '12–24 months',
		ratio: '1:6',
		fullDay: '$1,310/mo',
		halfDay: '$980/mo',
		features: [
			'Full-day: 7:00 AM – 6:00 PM',
			'Half-day: 7:00 AM – 12:30 PM',
			'Snacks provided daily',
			'AMI/AMS certified lead teacher',
			'Monthly progress reports',
			'Parent-teacher conferences',
		],
	},
	{
		program: 'Preschool Program',
		age: '24–36 months',
		ratio: '1:8',
		fullDay: '$1,240/mo',
		halfDay: '$930/mo',
		features: [
			'Full-day: 7:00 AM – 6:00 PM',
			'Half-day: 7:00 AM – 12:30 PM',
			'Snacks provided daily',
			'AMI/AMS certified lead teacher',
			'Bi-weekly progress updates',
			'Art and music enrichment',
		],
	},
	{
		program: 'Pre-K Program',
		age: '3–6 years',
		ratio: '1:8',
		fullDay: '$1,120/mo',
		halfDay: '$840/mo',
		features: [
			'Full-day: 7:00 AM – 6:00 PM',
			'Half-day: 7:00 AM – 12:30 PM',
			'Snacks provided daily',
			'AMI/AMS certified lead teacher',
			'Kindergarten readiness program',
			'Weekly enrichment activities',
		],
	},
] as const

export const ADMISSIONS_FAQ = [
	{
		question: 'Is there a waitlist?',
		answer:
			'Availability varies by location and program. We recommend scheduling a tour as early as possible. If your preferred program is full, we will add you to our waitlist and contact you as soon as a spot opens.',
	},
	{
		question: 'Is there a registration fee?',
		answer:
			'Yes, there is a one-time registration fee of $250 per child, which covers administrative costs, classroom materials, and your child\'s welcome kit.',
	},
	{
		question: 'Do you offer sibling discounts?',
		answer:
			'Yes, we offer a 10% discount on tuition for siblings enrolled simultaneously. This applies to the second child\'s tuition.',
	},
	{
		question: 'What is your cancellation policy?',
		answer:
			'We require 30 days written notice for withdrawal. The registration fee is non-refundable, but unused tuition for the notice period will be prorated.',
	},
] as const
