import styles from './styles.module.css';

interface props {
	isOpen: boolean;
	onClose: () => void;
}

export default function Background({ onClose, isOpen }: props) {
	const BackgroundElement = () => {
		if (isOpen) {
			return (
				<div
					className={`${styles.background} ${styles['background-open']}`}
					onClick={onClose}
				></div>
			);
		}

		return null;
	};

	return (
		<>
			<BackgroundElement />
		</>
	);
}
