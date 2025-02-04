import styles from './styles.module.css';

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className }: CardProps) {
	let style = styles.card;

	style += className ? ` ${className}` : '';

	return <div className={style}>{children}</div>;
}
