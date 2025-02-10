import { ScreenSize } from './src/types/ScreenSize';
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: ScreenSize.Small + 'px',
			md: ScreenSize.Medium + 'px',
			lg: ScreenSize.Large + 'px',
			xl: ScreenSize.ExtraLarge + 'px',
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				heading: 'var(--heading)',
				subHeading: 'var(--sub-heading)',
				'background-button': 'var(--background-button)',
				'background-button-hover': 'var(--background-button-hover)',
				'foreground-button': 'var(--foreground-button)',
				'card-background': 'var(--card-background)',
				'card-heading': 'var(---card-heading)',
				'card-foreground': 'var(--card-foreground)',
				'card-highligh': 'var(--card-highlight)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)',
				links: 'var(--links)',
			},
		},
	},
	plugins: [],
} satisfies Config;
