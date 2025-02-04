import styles from './styles.module.css';

interface CardHighlightProps {
	children: React.ReactNode;
	className?: string;
}

export function CardHighlight({ children, className }: CardHighlightProps) {
	return <div className={`${styles['card-highlight']} ${className}`}>{children}</div>;
}
