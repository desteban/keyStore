'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

type Themes = 'light' | 'dark';

const IS_SERVER = typeof window === 'undefined';

interface Context {
	theme: Themes | null;
	changeTheme(): void;
}

export const ThemeContext = createContext<Context>({
	theme: 'light',
	changeTheme() {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
	const [isClient, setIsClient] = useState(false);
	const [theme, setTheme] = useState<Themes | null>(null);

	useEffect(() => {
		if (IS_SERVER === false) {
			console.log('cliente');
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}

		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			if (theme === 'dark') {
				document.querySelector('html')?.classList.add('dark');
				document.querySelector('html')?.classList.remove('light');
			} else {
				document.querySelector('html')?.classList.remove('dark');
				document.querySelector('html')?.classList.add('light');
			}
		}
	}, [theme, isClient]);

	const changeTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
