import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
	title: 'Privacy Policy',
	description:
		"Learn how Octoddler School collects, uses, and protects your personal information and your child's data. We are committed to privacy and data security.",
	path: '/privacy',
})

const breadcrumbItems = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Privacy Policy',
		href: '/privacy',
	},
]

export default function PrivacyPage() {
	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
				}}
			/>

			{/* Breadcrumbs */}
			<Container>
				<Breadcrumbs
					items={[
						{
							label: 'Privacy Policy',
							href: '/privacy',
						},
					]}
				/>
			</Container>

			{/* Header */}
			<section className="pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
				<Container>
											<div className="max-w-3xl mx-auto text-center">
							<SectionHeading
								title="Privacy Policy"
								subtitle="Last updated: February 2026"
								as="h1"
							/>
						</div>
				</Container>
			</section>

			{/* Content */}
			<section className="pb-20 md:pb-28 lg:pb-36">
				<Container>
						<div className="max-w-3xl mx-auto space-y-16">
							{/* Introduction */}
							<div>
								<p className="text-muted text-lg leading-[1.85]">
									At Octoddler School, we are committed to protecting the privacy
									and security of your personal information and that of your
									children. This Privacy Policy explains how we collect, use,
									share, and safeguard information when you visit our website or
									enroll your child in our programs.
								</p>
							</div>

							{/* Information We Collect */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-wide mb-6">
									Information We Collect
								</h2>
								<div className="space-y-5 text-muted text-lg leading-[1.85]">
									<p>We may collect the following types of information:</p>
									<ul className="list-disc pl-6 space-y-3">
										<li>
											<strong className="text-foreground">
												Contact Information:
											</strong>{' '}
											Names, email addresses, phone numbers, and mailing
											addresses of parents and guardians.
										</li>
										<li>
											<strong className="text-foreground">
												Child Information:
											</strong>{' '}
											Your child's name, date of birth, emergency contacts,
											medical information, and educational records.
										</li>
										<li>
											<strong className="text-foreground">
												Financial Information:
											</strong>{' '}
											Payment details for tuition and fees, processed securely
											through our payment processor.
										</li>
										<li>
											<strong className="text-foreground">
												Website Usage Data:
											</strong>{' '}
											Information about your visit to our website, including IP
											address, browser type, and pages viewed.
										</li>
									</ul>
								</div>
							</div>

							{/* How We Use Your Information */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-wide mb-6">
									How We Use Your Information
								</h2>
								<div className="space-y-5 text-muted text-lg leading-[1.85]">
									<p>We use the information we collect to:</p>
									<ul className="list-disc pl-6 space-y-3">
										<li>
											Provide educational services and care for your child
										</li>
										<li>
											Communicate with parents and guardians about their
											child's progress
										</li>
										<li>
											Process enrollment applications and tuition payments
										</li>
										<li>
											Ensure the health and safety of all children in our care
										</li>
										<li>
											Comply with legal and regulatory requirements
										</li>
										<li>
											Improve our programs and website experience
										</li>
										<li>
											Send newsletters and updates (with your consent)
										</li>
									</ul>
								</div>
							</div>

							{/* Information Sharing */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-wide mb-6">
									Information Sharing
								</h2>
								<div className="space-y-5 text-muted text-lg leading-[1.85]">
									<p>
										We do not sell, rent, or trade your personal information. We
										may share information only in the following circumstances:
									</p>
									<ul className="list-disc pl-6 space-y-3">
										<li>
											<strong className="text-foreground">
												With Your Consent:
											</strong>{' '}
											When you authorize us to share information with third
											parties.
										</li>
										<li>
											<strong className="text-foreground">
												Service Providers:
											</strong>{' '}
											With trusted partners who assist in operating our school
											(e.g., payment processors, software providers) under
											strict confidentiality agreements.
										</li>
										<li>
											<strong className="text-foreground">
												Legal Requirements:
											</strong>{' '}
											When required by law, regulation, or legal process, or to
											protect the rights and safety of our students and staff.
										</li>
										<li>
											<strong className="text-foreground">
												Emergency Situations:
											</strong>{' '}
											With emergency responders or medical professionals in
											case of a health or safety emergency.
										</li>
									</ul>
								</div>
							</div>

							{/* Data Security */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-wide mb-6">
									Data Security
								</h2>
								<div className="space-y-5 text-muted text-lg leading-[1.85]">
									<p>
										We implement appropriate technical and organizational
										measures to protect your personal information against
										unauthorized access, alteration, disclosure, or destruction.
										These measures include:
									</p>
									<ul className="list-disc pl-6 space-y-3">
										<li>
											Secure storage of physical and digital records
										</li>
										<li>
											Encryption of sensitive data transmitted online
										</li>
										<li>
											Regular security assessments and updates
										</li>
										<li>
											Limited access to personal information by authorized
											staff only
										</li>
										<li>
											Training of staff on privacy and data protection
											practices
										</li>
									</ul>
								</div>
							</div>

							{/* Children's Privacy */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-wide mb-6">
									Children's Privacy
								</h2>
								<div className="space-y-5 text-muted text-lg leading-[1.85]">
									<p>
										Protecting children's privacy is especially important to us.
										We comply with the Children's Online Privacy Protection Act
										(COPPA) and do not knowingly collect personal information
										from children under 13 through our website without parental
										consent.
									</p>
									<p>
										Information about enrolled children is collected directly
										from parents or guardians and is used solely for educational
										and care purposes. Parents have the right to review, update,
										or request deletion of their child's information at any
										time.
									</p>
								</div>
							</div>

							{/* Your Rights */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-wide mb-6">
									Your Rights
								</h2>
								<div className="space-y-5 text-muted text-lg leading-[1.85]">
									<p>You have the right to:</p>
									<ul className="list-disc pl-6 space-y-3">
										<li>
											Access and review the personal information we hold about
											you and your child
										</li>
										<li>
											Request corrections to inaccurate or incomplete
											information
										</li>
										<li>Opt out of receiving marketing communications</li>
										<li>
											Request deletion of your information, subject to legal
											retention requirements
										</li>
										<li>
											Withdraw consent for data processing where applicable
										</li>
									</ul>
								</div>
							</div>

							{/* Contact Us */}
							<div>
								<h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-wide mb-6">
									Contact Us
								</h2>
								<div className="space-y-5 text-muted text-lg leading-[1.85]">
									<p>
										If you have any questions or concerns about this Privacy
										Policy or our data practices, please contact us:
									</p>
									<div className="mt-6 rounded-sm border-[5px] border-border bg-card p-8">
										<p className="font-heading text-lg font-medium text-foreground mb-4">
											Octoddler School
										</p>
										<div className="space-y-2 text-muted text-base leading-relaxed">
											<p>
												Email:{' '}
												<a
													href="mailto:info@octoddlerschool.com"
													className="link-underline text-foreground"
												>
													info@octoddlerschool.com
												</a>
											</p>
											<p>
												Phone:{' '}
												<a
													href="tel:+19494849990"
													className="link-underline text-foreground"
												>
													(949) 484-9990
												</a>
											</p>
											<p>
												Address: 100 Alton Parkway, Irvine, CA 92618
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Updates */}
							<div className="pt-10 border-t-[3px] border-border">
								<p className="text-sm text-muted leading-[1.85]">
									We may update this Privacy Policy from time to time to reflect
									changes in our practices or legal requirements. We will notify
									you of any material changes by posting the updated policy on
									our website and updating the &ldquo;Last updated&rdquo; date at
									the top of this page.
								</p>
							</div>
						</div>

				</Container>
			</section>
		</main>
	)
}
