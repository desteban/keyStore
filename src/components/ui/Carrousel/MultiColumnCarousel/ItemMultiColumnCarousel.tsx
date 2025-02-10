'use client';

import { useContext, useEffect, useRef } from 'react';
import { MultiColumnCarouselContext } from './context/MultiColumnCarouselContext';

interface Props {
	children: React.ReactNode;
}

export default function ItemMultiColumnCarousel({ children }: Props) {
	const { columnsByScreen } = useContext(MultiColumnCarouselContext);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (container.current) {
			const width = (100 / columnsByScreen).toString();
			console.log('width', width);
			container.current.style.minWidth = width + '%';
		}
	}, [columnsByScreen]);

	return <div ref={container}>{children}</div>;
}
