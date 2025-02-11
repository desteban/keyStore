'use client';

import { useContext, useEffect, useRef } from 'react';
import { MultiColumnCarouselContext } from '@components/ui/Carrousel/MultiColumnCarousel/context/MultiColumnCarouselContext';
import { ScreenSize } from '@/types/ScreenSize';

interface Props {
	children: React.ReactNode;
}

export default function ItemMultiColumnCarousel({ children }: Props) {
	const { columnsByScreen, widthScreen } = useContext(MultiColumnCarouselContext);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (container.current) {
			if (widthScreen >= ScreenSize.Large) {
				const minWidth = (100 / columnsByScreen).toString();
				container.current.style.minWidth = minWidth + '%';
			}

			if (widthScreen < ScreenSize.Large) {
				container.current.style.minWidth = 'auto';
			}
		}
	}, [columnsByScreen, widthScreen]);

	return <div ref={container}>{children}</div>;
}
