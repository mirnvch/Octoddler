import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

const accreditations = [
	{
		name: 'AMI',
		src: '/images/partners/ami-logo.png',
	},
	{
		name: 'AMS',
		src: '/images/partners/ams-logo.png',
	},
	{
		name: 'CHS',
		src: '/images/partners/chs-logo.png',
	},
	{
		name: 'Irvine Chamber',
		src: '/images/partners/irvine-chamber-logo.png',
	},
] as const

export function FeaturedIn() {
	return (
		<section className="py-12 md:py-16">
			<Container>
				<FadeIn>
					<p className="mb-8 text-center text-xs font-light uppercase tracking-[0.166em] text-foreground/60">
						Accredited by
					</p>
				</FadeIn>

				<FadeIn delay={0.1}>
					<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
						{accreditations.map((logo) => (
							<div key={logo.name} className="relative h-[60px] w-[120px]">
								<Image
									src={logo.src}
									alt={`${logo.name} accreditation`}
									fill
									className="object-contain invert grayscale opacity-60"
									sizes="120px"
								/>
							</div>
						))}
					</div>
				</FadeIn>
			</Container>
		</section>
	)
}
