'use client';

import { ThemeContext } from '@/Context/ThemeContext';
import { useContext } from 'react';

export default function Home() {
	const { changeTheme } = useContext(ThemeContext);

	return (
		<div className="container mx-auto">
			<h1 className="text-4xl font-bold mt-10">Hello, world!</h1>
			<p className="mt-4">This is a Next.js project with Tailwind CSS and TypeScript.</p>
			<button
				className="px-4 py-2 rounded-md bg-backgroundButton text-foregroundButton font-semibold mt-4"
				onClick={changeTheme}
			>
				Change theme
			</button>
		</div>
	);
}
