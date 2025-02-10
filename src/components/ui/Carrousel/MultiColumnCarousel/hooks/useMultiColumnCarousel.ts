import { useEffect, useRef, useState } from 'react';
import { ColumnsConfig } from '../context/MultiColumnCarouselContext';

interface Props {
	columns: ColumnsConfig;
}

export function useMultiColumnCarousel({ columns }: Props) {
	const [totalScroll, setTotalScroll] = useState<number>(columns.smScreenColumn);
	const [currentItem, setCurrentItem] = useState(0);
	const carouselInner = useRef<HTMLDivElement>(null);

	useEffect(() => {
		simplyScroll();
	}, [currentItem]);

	const simplyScroll = () => {
		if (carouselInner.current) {
			carouselInner.current.style.transform = `translateX(-${currentItem * 100}%)`;
		}
	};

	const Prev = () => {
		let slide = currentItem - 1;

		if (slide < 0) {
			slide = totalScroll - 1;
		}

		setCurrentItem(slide);
	};

	const Next = () => {
		let slide = currentItem + 1;
		if (slide >= totalScroll) {
			slide = 0;
		}

		setCurrentItem(slide);
	};

	return { Prev, Next, setTotalScroll, carouselInner };
}
