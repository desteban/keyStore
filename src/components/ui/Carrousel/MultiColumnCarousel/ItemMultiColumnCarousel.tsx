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
			const minWidth = (100 / columnsByScreen).toString();
			container.current.style.minWidth = minWidth + '%';
		}
	}, [columnsByScreen]);

	return <div ref={container}>{children}</div>;
}
