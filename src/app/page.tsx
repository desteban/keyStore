'use client';

import { ThemeContext } from '@/Context/ThemeContext';
import { Button } from '@/components/ui/Button/Button';
import { useContext } from 'react';

export default function Home() {
	const { changeTheme } = useContext(ThemeContext);

	return (
		<div className="container mx-auto">
			<h1 className="text-4xl font-bold mt-10">Hello, world!</h1>
			<p className="mt-4">This is a Next.js project with Tailwind CSS and TypeScript.</p>
			{/* <button
				className="px-4 py-2 rounded-md bg-background-button text-foreground-button font-semibold mt-4"
				onClick={changeTheme}
			>
				Change theme
			</button> */}
			<Button onClick={changeTheme} className="mt-4">
				Change theme
			</Button>

			<Button onClick={changeTheme} className="mt-4" variant='outline'>
				Change theme
			</Button>
		</div>
	);
}
