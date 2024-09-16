import { motion } from 'framer-motion'
import { useNotificationStore } from '../../../store/notification/notification.store'
import cn from 'clsx'

export function Notification() {
	const { messege, type } = useNotificationStore()

	return  !!messege && (

		<div className='fixed z-50 w-full left-0 top-10'>
			<motion.div
				className={cn(
					'rounded-xl text-white py-2 px-4 mx-auto w-max',
					{
						'bg-green-500': type === 'win',
						'bg-red-500': type === 'lose',
						' bg-slate-500' : type === 'info'
					}
				)}
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
				{messege}
			</motion.div>
		</div>
	)
}
