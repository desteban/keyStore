import styles from './styles.module.css';

interface CardChipProps {
	children: React.ReactNode;
	className?: string;
}

export function CardChip({ children, className }: CardChipProps) {
	return <div className={`${styles['card-chip']} ${className}`}>{children}</div>;
}
