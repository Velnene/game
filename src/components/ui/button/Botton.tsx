import cn from 'clsx';
import { ReactNode } from 'react'
import style from './Button.module.scss'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode,
	variant: 'primary' | 'secondary',
	isCircle?: boolean 
}

export function Butoon({ children, variant = 'primary', ...rest }: Props) {
	return (
		<button
			className={cn(
				style.button,
				style[variant],
				style.circle,
				rest.className
			)}
			{...rest}
		>
			{children} 
		</button>
	)
}
