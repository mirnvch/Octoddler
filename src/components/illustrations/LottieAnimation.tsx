'use client'

import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'

interface LottieAnimationProps {
	src: string
	className?: string
	loop?: boolean
	autoplay?: boolean
	ariaLabel?: string
}

export function LottieAnimation({
	src,
	className = '',
	loop = true,
	autoplay = true,
	ariaLabel,
}: LottieAnimationProps) {
	const [animationData, setAnimationData] = useState<unknown>(null)
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		setPrefersReducedMotion(mediaQuery.matches)

		const handler = (e: MediaQueryListEvent) =>
			setPrefersReducedMotion(e.matches)
		mediaQuery.addEventListener('change', handler)
		return () => mediaQuery.removeEventListener('change', handler)
	}, [])

	useEffect(() => {
		fetch(src)
			.then((res) => res.json())
			.then(setAnimationData)
			.catch(() => {
				// Silently fail — animation is decorative
			})
	}, [src])

	if (!animationData) {
		return (
			<div
				className={`flex h-full w-full items-center justify-center bg-secondary/20 ${className}`}
				aria-hidden="true"
			/>
		)
	}

	return (
		<div
			ref={containerRef}
			className={`flex h-full w-full items-center justify-center ${className}`}
			role={ariaLabel ? 'img' : undefined}
			aria-label={ariaLabel}
			aria-hidden={!ariaLabel}
		>
			<Lottie
				animationData={animationData}
				loop={prefersReducedMotion ? false : loop}
				autoplay={prefersReducedMotion ? false : autoplay}
				className="h-full w-full"
			/>
		</div>
	)
}
