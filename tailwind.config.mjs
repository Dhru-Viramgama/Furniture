/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"neutral-soft-grey": "#F1F1F1",
				"neutral-white": "#FFFFFF",
				"neutral-black": "#242424",
				"primary-green": "#556652",
			},
		},
		fontFamily: {
			"syne": ["Syne", "system-ui"],
			"inter": ["Inter", "system-ui"],
		}
	},
	plugins: [],
}
