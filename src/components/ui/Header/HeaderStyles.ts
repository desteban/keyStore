import styles from './styles.module.css';

export type Variants = 'static' | 'fixed' | 'sticky';

export function MatchHeaderStyles(variant: Variants) {
	const style: Record<Variants, string> = {
		fixed: styles['header-fixed'],
		static: styles['header-static'],
		sticky: styles['header-sticky'],
	};

	return style[variant];
}
