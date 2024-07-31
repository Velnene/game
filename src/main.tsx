import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '../src/index.css'
import { Butoon } from './components/ui/button/Botton'
import { Settings } from 'lucide-react'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<App />
		<Butoon variant='primary' isCircle><Settings/></Butoon>
	</React.StrictMode>
)
