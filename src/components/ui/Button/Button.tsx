import { MatchVariant } from './MatchVariant';
import { Variants } from './Variants';
import styles from './styles.module.css';

interface ButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
	variant?: Variants;
	'aria-label'?: string;
	title?: string;
}

export function Button({
	children,
	onClick,
	className = '',
	variant = 'primary',
	'aria-label': ariaLabel,
	title,
}: ButtonProps) {
	let cssClass = styles.btn;
	cssClass += ` ${MatchVariant(variant)}`;

	cssClass += ' ' + className;
	return (
		<button className={cssClass} onClick={onClick} aria-label={ariaLabel} title={title}>
			{children}
		</button>
	);
}
