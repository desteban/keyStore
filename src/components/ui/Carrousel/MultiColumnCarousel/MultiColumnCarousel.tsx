'use client';

import { ScreenSize } from '@/types/ScreenSize';
import { ColumnsConfig, MultiColumnProvider } from './context/MultiColumnCarouselContext';
import styles from './styles.module.css';
import { Children, useEffect } from 'react';
import { useWidthScreen } from '@/hooks/WidthScreen';
import { useMultiColumnCarousel } from './hooks/useMultiColumnCarousel';
import CarouselControls from './components/CarouselControls';

interface Props {
	children: React.ReactNode;
	columns: ColumnsConfig;
	className?: string;
}

export default function MultiColumnCarousel({
	children,
	columns = { smScreenColumn: 2 },
	className,
}: Props) {
	const size = Children.count(children);
	const { widthScreen } = useWidthScreen();
	const { setTotalScroll, carouselInner, Next, Prev } = useMultiColumnCarousel({
		columns,
	});

	useEffect(() => {
		if (widthScreen > 0 && widthScreen < ScreenSize.Medium) {
			setTotalScroll(calculateTotalScroll(columns.smScreenColumn));
		}

		if (widthScreen >= ScreenSize.Medium && widthScreen < ScreenSize.Large) {
			setTotalScroll(
				calculateTotalScroll(columns.mdScreenColumn ?? columns.smScreenColumn),
			);
		}

		if (widthScreen >= ScreenSize.Large && widthScreen < ScreenSize.ExtraLarge) {
			setTotalScroll(
				calculateTotalScroll(columns.lgScreenColumn ?? columns.smScreenColumn),
			);
		}

		if (widthScreen >= ScreenSize.ExtraLarge) {
			setTotalScroll(
				calculateTotalScroll(columns.xlScreenColumn ?? columns.smScreenColumn),
			);
		}
	}, [widthScreen]);

	const calculateTotalScroll = (columns: number) => Math.ceil(size / columns);

	return (
		<MultiColumnProvider columnsConfig={columns}>
			<div className="relative">
				<div className={[styles.container, className].join(' ')}>
					<div className={`${styles.carousel}`} ref={carouselInner}>
						{children}
					</div>
				</div>
				<CarouselControls onNext={Next} onPrev={Prev} />
			</div>
		</MultiColumnProvider>
	);
}
