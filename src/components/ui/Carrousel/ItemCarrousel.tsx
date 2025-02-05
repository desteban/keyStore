export interface ItemCarrousel {
	src: string;
	alt: string;
	active?: boolean;
	className?: string;
}

export function CarouselImage(props: ItemCarrousel) {
	return (
		<picture
			className={`duration-700 ease-in-out flex items-center justify-center ${
				props.className
			}
			${props.active ? 'flex-1' : 'flex-[0]'}`}
			data-carousel-item
		>
			<img {...props} className="h-full w-full object-cover" />
		</picture>
	);
}
