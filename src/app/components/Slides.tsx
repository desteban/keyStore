'use client';

import { Button } from '@/components/ui/Button/Button';
import Carrousel from '@/components/ui/Carrousel';
import { CarouselImage } from '@/components/ui/Carrousel/CarouselImage';
import { CarouselItem } from '@/components/ui/Carrousel/ItemCarrousel';
import image1 from '@assets/1.jpg';
import image2 from '@assets/2.jpg';
import image3 from '@assets/3.jpg';
import image4 from '@assets/4.jpg';

type ScrollType = 'simply' | 'smooth';

interface Props {
	scrollType?: ScrollType;
}

export default function Slides(props?: Props) {
	const { scrollType = 'simply' } = props || {};
	return (
		<div className="relative px-5">
			<Carrousel
				id="offer"
				interval={10000}
				className="mt-4 h-56 md:h-96"
				scrollType={scrollType}
			>
				<CarouselItem>
					<picture className="overflow-hidden flex flex-col items-center justify-center h-full w-full">
						<img src={image2.src} alt="random" className="w-full object-cover" />
						<Button
							typeOfButton="link"
							href="/slide"
							className="absolute right-7 bottom-3"
							variant="primary"
						>
							Clic
						</Button>
					</picture>
				</CarouselItem>
				<CarouselImage alt="random" src={image1.src} />
				<CarouselImage alt="random" src={image2.src} />
				<CarouselImage alt="random" src={image3.src} />
				<CarouselImage alt="random" src={image4.src} />
			</Carrousel>
		</div>
	);
}
