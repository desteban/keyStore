'use client';
import style from './styles.module.css';
type status = 'enable' | 'disable';

export interface ItemCarrousel {
	src?: string;
	alt?: string;
	status?: status;
	className?: string;
	children?: React.ReactNode;
}

export function CarouselImage({
	alt,
	src,
	children,
	className,
	status = 'disable',
}: ItemCarrousel) {
	const classSlide = `${style.slide} ${className || ''}`;

	const ShowImage = () => {
		if (src) {
			return (
				<picture className="max-h-full overflow-hidden">
					<img src={src} alt={alt} className="h-auto w-full object-cover" />
				</picture>
			);
		}
	};

	const ShowChildren = () => {
		const classContainer =
			status !== 'enable' ? style['hide-content'] : style['show-content'];
		return <div className={`${classContainer}`}>{children}</div>;
	};

	return (
		<div
			className={`${classSlide} ${
				status == 'enable' ? style['slide-open'] : style['slide-close']
			}`}
		>
			<ShowChildren />
			<ShowImage />
		</div>
	);
}
