import { MatchVariant } from './MatchVariant';
import { Variants } from './Variants';
import styles from './styles.module.css';

interface ButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
	variant?: Variants;
}

export function Button({
	children,
	onClick,
	className,
	variant = 'primary',
}: ButtonProps) {
	let cssClass = styles.btn;
	cssClass += ` ${MatchVariant(variant)}`;
	// if (variant === 'primary') {
	// 	cssClass += ` ${styles.primary}`;
	// }

	// if (variant === 'secondary') {
	// 	cssClass += ` ${styles.secondary}`;
	// }

	// if (variant === 'tertiary') {
	// 	cssClass += ` ${styles.tertiary}`;
	// }

	// if (variant === 'outline') {
	// 	cssClass += ` ${styles.outline}`;
	// }

	// if (variant === 'text') {
	// 	cssClass += ` ${styles.text}`;
	// }

	cssClass += className ? ` ${className}` : '';
	return (
		<button className={cssClass} onClick={onClick}>
			{children}
		</button>
	);
}
