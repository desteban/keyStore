'use client';

import Carrousel from '@/components/ui/Carrousel';
import { CarouselImage } from '@/components/ui/Carrousel/ItemCarrousel';
import image1 from '@assets/1.jpg';
import image2 from '@assets/2.jpg';
import image3 from '@assets/3.jpg';
import image4 from '@assets/4.jpg';

export default function Slides() {
	return (
		<div className="relative">
			<Carrousel id="offer" interval={6000} className="mt-4">
				<CarouselImage alt="random" src={image1.src} />
				<CarouselImage>
					<figure className="w-full h-full">
						<img alt="random" src={image2.src} className="w-full object-cover" />
					</figure>
				</CarouselImage>
				<CarouselImage alt="random" src={image3.src} />
				<CarouselImage alt="random" src={image4.src} />
			</Carrousel>
		</div>
	);
}
