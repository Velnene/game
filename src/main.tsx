import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '../src/index.css'
import { Butoon } from './components/ui/button/Botton'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<App />
		<Butoon>Start</Butoon>
	</React.StrictMode>
)
