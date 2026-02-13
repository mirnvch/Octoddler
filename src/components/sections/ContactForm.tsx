'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface FormData {
	name: string
	email: string
	phone: string
	program: string
	message: string
}

interface FormErrors {
	name?: string
	email?: string
	message?: string
}

export function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		program: '',
		message: '',
	})

	const [errors, setErrors] = useState<FormErrors>({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {}

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required'
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!validateForm()) {
			return
		}

		setIsSubmitting(true)

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000))

		// Reset form and show success
		setFormData({
			name: '',
			email: '',
			phone: '',
			program: '',
			message: '',
		})
		setErrors({})
		setIsSubmitting(false)
		setIsSubmitted(true)
	}

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }))
		}
	}

	if (isSubmitted) {
		return (
			<div className="rounded-sm border border-primary/30 bg-primary/10 p-8 text-center" role="status">
				<p className="font-heading text-xl font-medium text-foreground mb-2">
					Thank you for your message!
				</p>
				<p className="text-muted">
					We'll get back to you soon. You can expect a response within 1–2 business days.
				</p>
				<button
					type="button"
					onClick={() => setIsSubmitted(false)}
					className="mt-4 text-sm font-medium text-primary hover:underline"
				>
					Send another message
				</button>
			</div>
		)
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<Input
				label="Name"
				type="text"
				name="name"
				value={formData.name}
				onChange={handleChange}
				error={errors.name}
				required
			/>

			<Input
				label="Email"
				type="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				error={errors.email}
				required
			/>

			<Input
				label="Phone (optional)"
				type="tel"
				name="phone"
				value={formData.phone}
				onChange={handleChange}
			/>

			<div className="flex flex-col gap-1.5">
				<label htmlFor="program" className="font-heading text-sm font-medium">
					Program Interest
				</label>
				<select
					id="program"
					name="program"
					value={formData.program}
					onChange={handleChange}
					className={cn(
						'rounded-sm border border-border bg-card px-4 py-3 text-foreground transition-colors',
						'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
						!formData.program && 'text-muted-light',
					)}
					aria-label="Select program of interest"
				>
					<option value="">Select a program</option>
					<option value="toddler">Toddler Program (12–24 months)</option>
					<option value="preschool">Preschool Program (24–36 months)</option>
					<option value="pre-k">Pre-K Program (3–6 years)</option>
					<option value="not-sure">Not sure yet</option>
				</select>
			</div>

			<div className="flex flex-col gap-1.5">
				<label htmlFor="message" className="font-heading text-sm font-medium">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					rows={6}
					required
					className={cn(
						'rounded-sm border border-border bg-card px-4 py-3 text-foreground transition-colors',
						'placeholder:text-muted-light',
						'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
						'resize-none',
						errors.message &&
							'border-red-500 focus:border-red-500 focus:ring-red-500/20',
					)}
					aria-invalid={errors.message ? 'true' : undefined}
					aria-describedby={errors.message ? 'message-error' : undefined}
					aria-required="true"
				/>
				{errors.message && (
					<p id="message-error" className="text-sm text-red-500" role="alert">
						{errors.message}
					</p>
				)}
			</div>

			<Button type="submit" size="lg" disabled={isSubmitting}>
				{isSubmitting ? 'Sending...' : 'Send Message'}
			</Button>
		</form>
	)
}
