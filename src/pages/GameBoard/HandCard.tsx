import { CSSProperties, useState } from 'react'
import { ICard } from '../../types/cards'
import cn from 'clsx'
import { motion } from 'framer-motion'
import { getSstyleRotation } from './hand-card/get-style-rotation'

interface Props {
	card: ICard
	onClick: () => void
	isDisabled?: boolean
	isHided?: boolean
	style?: CSSProperties
	index: number
	arrayLength: number
}

export function HandCard({
	card,
	onClick,
	isDisabled,
	isHided,
	style,
	index,
	arrayLength,
}: Props) {
	const [isHovered, setIsHovered] = useState(false)
	const { rotate, translateY } = getSstyleRotation(index, arrayLength, !isHided)
	return (
		<motion.button
			className={cn(
				' w-40 bg-yellow-300 inline-block shadow -ml-9 rounded-lg',
				{ 'opacity-50': isDisabled, 'cursor-default': isHided }
			)}
			style={style}
			disabled={isDisabled}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			initial={{ scale: 1, zIndex: 0, y: 0 }}
			animate={
				isHovered && !isHided
					? { scale: 1.2, zIndex: 10, y: -70 }
					: {
							scale: 1,
							zIndex: 0,
							y: translateY,
							rotate,
						}
			}
			transition={{ type: 'just', stiffness: 300, damping: 20 }}
		>
			<img
				src={
					isHided
						? require('../../assets/cardsImage/backCard.jpg')
						: card.imageUrl
				}
				alt={card.name}
			/>
		</motion.button>
	)
}
