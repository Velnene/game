import cn from 'clsx'
import { ReactNode } from 'react'
import style from './Button.module.scss'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant: 'primary' | 'secondary' | 'disabled'
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
