import { useRef, useState } from 'react'
import { Butoon } from '../../../components/ui/button/Botton'
import { Pause, Play } from 'lucide-react'
// НЕ работает аудио. Не находит музыку по ссылке 
export function AudioPlayer() {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const handlePlayPause = () => {
		if (!audioRef.current) return null
		if (isPlaying) {
			audioRef.current.pause()
		} else {
			audioRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}
	return (
		<Butoon variant='secondary' isCircle onClick={handlePlayPause}>
			<audio ref={audioRef} loop>
				<source src='../../../../music/a.mp3' type='audio/mp3' />
				<a href='../../../../music/a.mp3'>link to the audio</a>
				Тег audio не поддерживается вашим браузером.
			</audio>
			{isPlaying ? <Pause /> : <Play />}
		</Butoon>
	)
}
