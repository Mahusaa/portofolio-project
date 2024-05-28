/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'highlight': '#6C00A2',
			}
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
			  '.selection\\:bg-highlight': {
				'::selection': {
				  'background-color': '#6C00A2',
				},
			  },
			});
		  },
	],
}
