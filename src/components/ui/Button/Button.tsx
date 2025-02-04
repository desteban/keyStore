import { Variants } from './Variants';
import styles from './styles.module.css';

interface ButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
	variant?: Variants;
}

// type Matchchest = Record<Variants, string>;

// function MatchVariant(variant: Variants) {
// 	const matchers: Matchchest = {
// 		primary: styles.primary,
// 		outline: styles.outline,
// 		text: styles.text,
// 	};
// 	return matchers[variant] ?? styles.primary;
// }

export function Button({
	children,
	onClick,
	className,
	variant = 'primary',
}: ButtonProps) {
	let cssClass = styles.btn;

	if (variant === 'primary') {
		cssClass += ` ${styles.primary}`;
	}

	if (variant === 'outline') {
		cssClass += ` ${styles.outline}`;
	}

	if (variant === 'text') {
		cssClass += ` ${styles.text}`;
	}

	cssClass += className ? ` ${className}` : '';
	return (
		<button className={cssClass} onClick={onClick}>
			{children}
		</button>
	);
}
