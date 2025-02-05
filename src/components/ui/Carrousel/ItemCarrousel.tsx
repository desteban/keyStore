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
			className={`relative duration-700 ease-in-out max-h-full overflow-hidden  ${
				className || ''
			}
			${status == 'enable' ? 'flex-1' : 'flex-[0]'}`}
			data-carousel-item
		>
			<ShowChildren />
			<ShowImage />
		</div>
	);
}
