import { useTransition } from 'react'
import { Butoon } from '../../components/ui/button/Botton'
import { useGameStore } from '../../store/game.store'
import { AudioPlayer } from '../GameBoard/audio-player/AudioPlayer'
import { MyLoader } from '../../components/ui/loader/Loader'

export function Home() {
	const [isPending, startTransition] = useTransition()

	const { startGame } = useGameStore()
	const onClickStartGame = () => {
		startTransition(() => {
			startGame()
		})
	}
	return (
		<div className='flex items-center flex-col justify-center gap-4 h-screen'>
			<h1 className='text-7xl text-white font-bold'>Go Play Game </h1>
			<div className='page text-blue-700'>
				<Butoon variant='primary' onClick={onClickStartGame} isCircle>
					{isPending ? <MyLoader /> : 'Start'}
				</Butoon>
				<AudioPlayer />
				<div className='card'></div>
			</div>
		</div>
	)
}
