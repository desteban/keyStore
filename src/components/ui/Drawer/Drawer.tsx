import styles from './styles.module.css';
import Background from './Background';
import { useEffect } from 'react';

interface Props {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
}

export default function Drawer({ children, onClose, open }: Props) {
	useEffect(() => {
		const body = document.querySelector('body');
		if (open) {
			body?.classList.add('overflow-hidden');
		} else {
			body?.classList.remove('overflow-hidden');
		}
	}, [open]);

	return (
		<>
			<Background isOpen={open} onClose={onClose} />

			<div
				className={`${styles['drawer-container']} ${
					open ? styles['drawer-container-open'] : styles['drawer-container-close']
				}`}
			>
				{children}
			</div>
		</>
	);
}
