import { Variants } from './Variants';
import styles from './styles.module.css';

type Match = Record<Variants, string>;

export function MatchVariant(variant: Variants): string {
	const variantsStyles: Match = {
		none: '',
		outline: styles.outline,
		primary: styles.primary,
		secondary: styles.secondary,
		tertiary: styles.tertiary,
		text: styles.btn,
	};

	return variantsStyles[variant];
}
