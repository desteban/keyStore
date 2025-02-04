import { useEffect, useState } from 'react';
import { ItemCarrousel, CarouselImage } from './ItemCarrousel';
import { Button } from '../Button/Button';

interface CarouselProps {
	className?: string;
	id?: string;
	items: ItemCarrousel[];
	interval?: number;
}

export default function Carrousel({
	id,
	items,
	className,
	interval = 3000,
}: CarouselProps) {
	const [currentItem, setCurrentItem] = useState(0);
	const stylesCarouselContainer = `relative flex flex-row items-center overflow-hidden h-56 md:h-96 gap-1 ${className}`;

	useEffect(() => {
		const intervalId = setInterval(() => {
			Next();
		}, interval);
		return () => clearInterval(intervalId);
	}, [currentItem, items.length]);

	const Prev = () => {
		setCurrentItem((item) => (item - 1 < 0 ? items.length - 1 : item - 1));
	};

	const Next = () => {
		setCurrentItem((currentItem + 1) % items.length);
	};

	return (
		<div id={id} className={stylesCarouselContainer}>
			<div>
				<Button variant="outline" onClick={Prev}>
					{'<'}
				</Button>
			</div>

			<div className="px-2 h-full flex overflow items-center justify-center">
				{items.map((item, index) => (
					<CarouselImage
						key={index}
						{...item}
						className={index === currentItem ? 'flex-1' : 'flex-[0]'}
					/>
				))}
			</div>

			<div>
				<Button variant="outline" onClick={Next}>
					{'>'}
				</Button>
			</div>
		</div>
	);
}
