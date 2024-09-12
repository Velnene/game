import cn from 'clsx'
import { ReactNode } from 'react'
import style from './Button.module.scss'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant: 'primary' | 'secondary'
	isCircle?: boolean
}

export function Butoon({
	children,
	variant = 'primary',
	className,
	...rest
}: Props) {
	return (
		<button
			className={cn(style.button, style[variant], style.circle, className)}
			{...rest}
		>
			{children}
		</button>
	)
}
