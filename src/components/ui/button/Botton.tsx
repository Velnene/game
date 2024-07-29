import { ReactNode } from 'react'
import style from './Button.module.scss'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export function Butoon({ children, ...rest }: Props) {
	return (
		<button className={style.button} {...rest}>
			{children}
		</button>
	)
}
