'use client';

import Carrousel from '@/components/ui/Carrousel';
import { CarouselImage } from '@/components/ui/Carrousel/CarouselImage';
import { CarouselItem } from '@/components/ui/Carrousel/ItemCarrousel';
import image1 from '@assets/1.jpg';
import image2 from '@assets/2.jpg';
import image3 from '@assets/3.jpg';
import image4 from '@assets/4.jpg';

type ScrollType = 'simply' | 'smooth'

interface Props {
	scrollType?: ScrollType
}

export default function Slides(props?: Props) {
	const { scrollType = 'simply' } = props || {}
	return (
		<div className="relative px-5">
			<Carrousel
				id="offer"
				interval={3000000}
				className="mt-4 h-56 md:h-96"
				scrollType={scrollType}
			>
				<CarouselImage alt="random" src={image1.src} />
				<CarouselItem>
					<div className="flex flex-col items-center justify-center h-full">
						<h5>Hola</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nulla nam
							totam ab quidem cumque, nesciunt quibusdam rerum neque dolor sed,
							perspiciatis adipisci voluptas hic, beatae obcaecati tenetur. Mollitia,
							illum.
						</p>
					</div>
				</CarouselItem>
				<CarouselImage alt="random" src={image2.src} />
				<CarouselImage alt="random" src={image3.src} />
				<CarouselImage alt="random" src={image4.src} />
			</Carrousel>
		</div>
	);
}
