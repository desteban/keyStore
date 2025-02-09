'use client';

import { useState } from 'react';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { MatchHeaderStyles, Variants } from './HeaderStyles';
import styles from './styles.module.css';
import { Button } from '../Button/Button';
import Drawer from '../Drawer/Drawer';
import MenuRounded from '@/assets/Icons/MenuRounded';
import CloseIcon from '@/assets/Icons/CloseIcon';

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
			<nav className={styles.nav}>
				<Button variant="none" onClick={toggleOpenDrawer}>
					<MenuRounded />
				</Button>
				<ChangeThemeButton />
			</nav>

			<Drawer open={open} onClose={toggleOpenDrawer}>
				<div>
					<div className="h-10 flex flex-row-reverse items-center">
						<Button variant="none" onClick={toggleOpenDrawer} className="!p-0">
							<CloseIcon />
						</Button>
					</div>
					<h5>Menu Drawer</h5>
					<ul>
						<li>Home</li>
						<li>Slides</li>
					</ul>
				</div>
			</Drawer>
		</header>
	);
}
