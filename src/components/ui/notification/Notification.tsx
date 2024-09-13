import React from 'react'
import { motion } from 'framer-motion'

interface Props {
	children: React.ReactNode
}
export function Notification({ children }: Props) {
	return (
		<div className='fixed z-50 w-full left-0 top-1/2'>
			<motion.div
				className='rounded-xl text-white py-2 px-4 mx-auto bg-orange-600 w-max'
				initial={{
					scale: 0.5,
					y: 20,
					rotate: -15,
					opacity: 0,
					x: -10,
				}}
				animate={{ scale: 1, rotate: 0, y: 0, opacity: 1, x: 0 }}
				transition={{ type: 'just', stiffness: 300, damping: 30, mass: 1 }}
			>
				{children}
			</motion.div>
		</div>
	)
}
