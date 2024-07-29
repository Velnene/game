/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/constans/color'

module.exports = {
	content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: COLORS,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
