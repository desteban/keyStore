import style from './styles.module.css';

export interface ItemCarrousel {
	src?: string;
	alt?: string;
	className?: string;
}

export function CarouselImage({ alt, src, className }: ItemCarrousel) {
	const classSlide = `${style['carousel-inner-item']} ${className || ''}`;

	const ShowImage = () => {
		if (src) {
			return (
				<picture className="max-h-full overflow-hidden">
					<img src={src} alt={alt} className="h-auto w-full object-cover" />
				</picture>
			);
		}
	};

	return (
		<div className={`${classSlide} ${style['carousel-inner-item-close']}`}>
			<ShowImage />
		</div>
	);
}
