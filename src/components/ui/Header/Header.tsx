'use client';

import { useState } from 'react';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { MatchHeaderStyles, Variants } from './HeaderStyles';
import styles from './styles.module.css';
import { Button } from '../Button/Button';
import Drawer from '../Drawer/Drawer';

interface props {
	variant?: Variants;
	className?: string;
}

export default function Header({ variant = 'static', className = '' }: props) {
	const [open, setOpen] = useState<boolean>(false);
	const headerStyles = styles.header + ' ' + MatchHeaderStyles(variant) + className;

	const toggleOpenDrawer = () => setOpen((old) => !old);

	return (
		<header className={headerStyles}>
			<div>
				<nav>
					<Button variant="none" onClick={toggleOpenDrawer}>
						menu
					</Button>
					<ChangeThemeButton />
				</nav>
			</div>

			<Drawer open={open} onClose={toggleOpenDrawer}>
				<div>
					<h5>Menu Drawer</h5>
				</div>
			</Drawer>
		</header>
	);
}
