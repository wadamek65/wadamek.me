import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				...defaultTheme.colors,
				'puerto-rico': {
					50: '#f3faf7',
					100: '#d8efe7',
					200: '#b1decf',
					300: '#78c2ad',
					400: '#58a995',
					500: '#3e8e7b',
					600: '#2f7264',
					700: '#295c52',
					800: '#254a43',
					900: '#223f39',
					950: '#0f2421',
				},
				remy: {
					50: '#fdf2f7',
					100: '#fdebf3',
					200: '#fccee2',
					300: '#fba6c9',
					400: '#f76fa5',
					500: '#f04483',
					600: '#e0225e',
					700: '#c21446',
					800: '#a0143a',
					900: '#861534',
					950: '#52051a',
				},
				mirage: {
					50: '#f4f6fa',
					100: '#e6e9f3',
					200: '#d3d8ea',
					300: '#b4bedc',
					400: '#919dc9',
					500: '#7680bb',
					600: '#6369ad',
					700: '#585a9d',
					800: '#4c4c81',
					900: '#404168',
					950: '#1e1e2e',
				},
				'st-tropaz': {
					50: '#f4f7fb',
					100: '#e9eef5',
					200: '#cedce9',
					300: '#a2bed7',
					400: '#719bbf',
					500: '#4f7fa8',
					600: '#3c648d',
					700: '#375a7f',
					800: '#2c4660',
					900: '#293c51',
					950: '#1b2736',
				},
			},
			fontFamily: {
				sans: ['Neco-Regular', ...defaultTheme.fontFamily.sans],
				neco: ['Neco-Regular', ...defaultTheme.fontFamily.sans],
				pally: ['Pally-Regular', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
