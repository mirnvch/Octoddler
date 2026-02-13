'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

interface AnimatedSunLogoProps {
	className?: string
	size?: number
}

export function AnimatedSunLogo({
	className = '',
	size = 40,
}: AnimatedSunLogoProps) {
	const ref = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			if (!ref.current) return

			const prefersReducedMotion = window.matchMedia(
				'(prefers-reduced-motion: reduce)',
			).matches
			if (prefersReducedMotion) return

			gsap.to(ref.current, {
				rotation: 360,
				duration: 60,
				repeat: -1,
				ease: 'none',
			})
		},
		{ scope: ref },
	)

	return (
		<div
			ref={ref}
			className={className}
			style={{ width: size, height: size }}
		>
			<Image
				src="/images/logos/oc-sun-square.png"
				alt=""
				width={size}
				height={size}
				className="h-full w-full"
				aria-hidden="true"
				priority
			/>
		</div>
	)
}
