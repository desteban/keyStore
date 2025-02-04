import styles from './styles.module.css';

interface CardTitleProps {
	className?: string;
	children: React.ReactNode;
}

export function CardTitle({ children, className }: CardTitleProps) {
	let style = styles['card-title'];

	style += className ? ` ${className}` : '';
	return <div className={style}>{children}</div>;
}
