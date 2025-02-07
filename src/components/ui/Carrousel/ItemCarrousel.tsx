'use client';
import style from './styles.module.css';

export interface ItemCarrousel {
	className?: string;
	children: React.ReactNode;
}

export function CarouselItem({ children, className }: ItemCarrousel) {
	const classSlide = `${style['carousel-inner-item']} ${className || ''}`;

	return (
		<div className={`${classSlide} ${style['carousel-inner-item-close']}`}>
			{children}
		</div>
	);
}
