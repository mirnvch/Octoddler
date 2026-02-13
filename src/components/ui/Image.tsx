import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface ImageProps extends Omit<NextImageProps, 'alt'> {
	alt: string
	rounded?: boolean
}

export function Image({ className, rounded = false, alt, ...props }: ImageProps) {
	return (
		<NextImage
			className={cn(rounded && 'rounded-sm', className)}
			alt={alt}
			{...props}
		/>
	)
}
