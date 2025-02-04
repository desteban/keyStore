export interface ItemCarrousel {
	src: string;
	alt: string;
	hidden?: boolean;
	className?: string;
}

export function CarouselImage(props: ItemCarrousel) {
	return (
		<figure
			className={`duration-700 ease-in-out flex items-center justify-center ${props.className}`}
			data-carousel-item
		>
			<img {...props} className="h-full w-full object-cover" />
		</figure>
	);
}
