import { ScreenSize } from '@/types/ScreenSize';
import { useEffect, useState } from 'react';

interface Props {
	onSm?: () => void;
	onMd?: () => void;
	onLg?: () => void;
	onXl?: () => void;
}

export function useWidthScreen(Props: Props = {}) {
	const { onLg, onMd, onSm, onXl } = Props;
	const [widthScreen, setWidthScreen] = useState(0);

	useEffect(() => {
		setWidthScreen(window.innerWidth);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWidthScreen(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (widthScreen > 0 && widthScreen < ScreenSize.Medium && onSm) {
			onSm();
		}

		if (widthScreen >= ScreenSize.Medium && widthScreen < ScreenSize.Large && onMd) {
			onMd();
		}

		if (widthScreen >= ScreenSize.Large && widthScreen < ScreenSize.ExtraLarge && onLg) {
			onLg();
		}

		if (widthScreen >= ScreenSize.ExtraLarge && onXl) {
			onXl();
		}
	}, [widthScreen, onSm, onMd, onLg, onXl]);

	return {
		widthScreen,
	};
}
