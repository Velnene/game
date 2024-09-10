import { IHero, TPlayer } from '../../types/game.store.types'
import cn from 'clsx'

interface Props {
	player: Omit<IHero, 'deck'>
	typePlayer: TPlayer
}
export function PlayerInfo({ player, typePlayer }: Props) {
	const isPalyer = typePlayer === 'player'
	return (
		<div
			className={cn('absolute left-3', {
				'bottom-10': isPalyer,
				'top-10': !isPalyer,
			})}
		>
			<h2>{isPalyer ? 'Player' : 'Opponent'}</h2>
			<p>HP: {player.health}</p>
			<p>Mana: {player.mana}</p>
		</div>
	)
}
