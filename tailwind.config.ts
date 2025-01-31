import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				heading: 'var(--heading)',
				subHeading: 'var(--sub-heading)',
				backgroundButton: 'var(--background-button)',
				foregroundButton: 'var(--foreground-button)',
				cardBackground: 'var(--card-background)',
				cardHeading: 'var(---card-heading)',
				cardForeground: 'var(--card-foreground)',
				cardHighligh: 'var(--card-highlight)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)',
				links: 'var(--links)',
			},
		},
	},
	plugins: [],
} satisfies Config;
