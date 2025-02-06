'use client';

import { ThemeContext } from '@/Context/ThemeContext';
import { useContext } from 'react';
import { Button } from '../Button/Button';

interface props {
	className?: string;
	'aria-label'?: string;
	title?: string;
}

export default function ChangeThemeButton({
	className = '',
	'aria-label': ariaLabel,
	title,
}: props) {
	const { changeTheme, theme } = useContext(ThemeContext);
	const sizeIcons = 20;

	const MoonIcon = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeIcons}
			height={sizeIcons}
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M9.5 20q3.325 0 5.663-2.337T17.5 12t-2.337-5.663T9.5 4h-.525q-.25 0-.475.05q1.425 1.65 2.213 3.688T11.5 12t-.788 4.263T8.5 19.95q.225.05.475.05zm0 2q-.875 0-1.75-.175T6.075 21.3q-.275-.125-.45-.375t-.175-.55q0-.225.1-.425t.3-.35q1.75-1.375 2.7-3.375T9.5 12t-.962-4.213T5.825 4.4q-.175-.15-.275-.35t-.1-.425q0-.3.163-.55T6.05 2.7q.825-.35 1.7-.525T9.5 2q2.075 0 3.9.788t3.175 2.137T18.713 8.1T19.5 12t-.788 3.9t-2.137 3.175t-3.175 2.138T9.5 22m2-10"
			/>
		</svg>
	);

	const SunIcon = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeIcons}
			height={sizeIcons}
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"
			/>
		</svg>
	);

	const Icon = () => (theme === 'light' ? <MoonIcon /> : <SunIcon />);

	return (
		<Button
			variant="none"
			onClick={changeTheme}
			aria-label={ariaLabel || 'Cambiar el tema de la pagina'}
			title={title}
			className={className}
		>
			<Icon />
		</Button>
	);
}
