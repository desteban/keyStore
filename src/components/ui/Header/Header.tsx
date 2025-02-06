'use client';

import { useState } from 'react';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { MatchHeaderStyles, Variants } from './HeaderStyles';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';

interface props {
	variant?: Variants;
	className?: string;
}

export default function Header({ variant = 'static', className = '' }: props) {
	const [isOpen, setIsOpen] = useState(false);
	const headerStyles = styles.header + ' ' + MatchHeaderStyles(variant) + className;

	const toggleOpen = () => {
		const next = !isOpen;
		document.querySelector('body')?.classList.toggle('overflow-hidden');

		setIsOpen(next);
	};

	const Background = () => {
		if (isOpen) {
			return (
				<div
					className={`${styles.background} ${styles['background-open']}`}
					onClick={toggleOpen}
				></div>
			);
		}

		return null;
	};

	return (
		<header className={headerStyles}>
			<div>
				<nav>
					<button onClick={toggleOpen}>open</button>
					<ChangeThemeButton title="Cambiar tema de la aplicación" />
				</nav>
			</div>

			<div></div>

			{createPortal(<Background />, document.body)}
		</header>
	);
}
