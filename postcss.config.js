const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const tailwindcss = require('tailwindcss')

module.exports = {
	plugins: [
		tailwindcss('./tailwind.config.js'),
		require('autoprefixer'),
		cssnano({ preset: 'default' }),
		'postcss-preset-env',
		tailwindcss,
	],
}
