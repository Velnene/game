import { Settings } from 'lucide-react'
import { Butoon } from './components/ui/button/Button'
import { useGameStore } from './store/game.store'
import { GameBoard } from './pages/GameBoard/GameBoard'
import { Home } from './pages/home/Home'

function App() {
	const { startGame, isGameStarted } = useGameStore()
	return <main>{isGameStarted ? <GameBoard /> : <Home />}</main>
}

export default App
