'use client';

import { Button } from '@/components/ui/Button/Button';
import Carrousel from '@/components/ui/Carrousel';
import { CarouselImage } from '@/components/ui/Carrousel/ItemCarrousel';
import image1 from '@assets/1.jpg';
import image2 from '@assets/2.jpg';
import image3 from '@assets/3.jpg';
import image4 from '@assets/4.jpg';
import { useState } from 'react';

function Ele({ active }: { active?: boolean }) {
	return (
		<div className="bg-primary w-full overflow-hidden p-4">
			<h2>title</h2>
			<p>algo para leer</p>
			<div>
				<Button>Clic</Button>
			</div>
		</div>
	);
}

export default function Slides() {
	const [slide, setSlide] = useState(0);

	return (
		<div className="relative">
			<Carrousel id="offer" interval={600000}>
				<CarouselImage>
					<Ele />
				</CarouselImage>
				{/* <CarouselImage>
					<Ele />
				</CarouselImage> */}
				<CarouselImage alt="random" src={image2.src} />
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
