'use client';

import { useState } from 'react';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { MatchHeaderStyles, Variants } from './HeaderStyles';
import styles from './styles.module.css';
import { Button } from '../Button/Button';
import Drawer from '../Drawer/Drawer';
import MenuRounded from '@/assets/Icons/MenuRounded';
import CloseIcon from '@/assets/Icons/CloseIcon';
import Link from 'next/link';
import SearchInput from '../search/SearchInput';

interface props {
	variant?: Variants;
	className?: string;
}

export default function Header({ variant = 'static', className = '' }: props) {
	const [open, setOpen] = useState<boolean>(false);
	const headerStyles = styles.header + ' ' + MatchHeaderStyles(variant) + className;

	const toggleOpenDrawer = () => setOpen((old) => !old);
	// flex w-full justify-between gap-4 items-center
	return (
		<header className={headerStyles}>
			<div className="flex gap-4 justify-between">
				<div className="flex items-center space-x-1 lg:w-full">
					<Button variant="none" onClick={toggleOpenDrawer} className="!p-2 lg:hidden">
						<MenuRounded />
					</Button>
					<span className="text-2xl font-bold lg:hidden">KS</span>
					<span className={styles['brand-lg']}>
						<b>K</b>ey<b>S</b>tore
					</span>
				</div>
				<div className="lg:w-full flex flex-col items-center text-xl">
					<SearchInput className="" placeholder="Windows, Adobe, AutoCad..." />
					<nav>
						<ul className={styles.nav}>
							<li>
								<Link href={'/'}>Inicio</Link>
							</li>
							<li>
								<Link href={'#'}>Windows</Link>
							</li>
							<li>
								<Link href={'#'}>Office</Link>
							</li>
							<li>
								<Link href={'#'}>Antivirus</Link>
							</li>
							<li>
								<Link href={'#'}>Otros</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="flex lg:w-full items-center justify-end">
					<ChangeThemeButton className="!p-2" />
				</div>
			</div>

			<Drawer open={open} onClose={toggleOpenDrawer}>
				<div>
					<div className="h-10 flex flex-row-reverse items-center">
						<Button
							variant="none"
							onClick={toggleOpenDrawer}
							className="!p-0"
							aria-label="Cerrar menú"
							title="Cerrar menú"
						>
							<span className="visually-hidden">Cerrar menu</span>
							<CloseIcon />
						</Button>
					</div>

					<nav onClick={toggleOpenDrawer}>
						<ul className="space-y-4">
							<li>
								<Link href={'/'}>Inicio</Link>
							</li>
							<li>
								<Link href={'#'}>Windows</Link>
							</li>
							<li>
								<Link href={'#'}>Office</Link>
							</li>
							<li>
								<Link href={'#'}>Antivirus</Link>
							</li>
							<li>
								<Link href={'#'}>Otros</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Drawer>
		</header>
	);
}
