import { useWidthScreen } from '@/hooks/WidthScreen';
import { createContext, useState } from 'react';

interface MultiColumnCarouselContextProps {
	columnsConfig: ColumnsConfig;
	columnsByScreen: number;
	widthScreen: number;
}

export interface ColumnsConfig {
	smScreenColumn: number;
	mdScreenColumn?: number;
	lgScreenColumn?: number;
	xlScreenColumn?: number;
}

const ColumnsConfig: ColumnsConfig = {
	lgScreenColumn: 2,
	mdScreenColumn: 2,
	smScreenColumn: 2,
	xlScreenColumn: 2,
};

export const MultiColumnCarouselContext = createContext<MultiColumnCarouselContextProps>({
	columnsConfig: ColumnsConfig,
	columnsByScreen: 2,
	widthScreen: 1024,
});

interface Props {
	children: React.ReactNode;
	columnsConfig: ColumnsConfig;
}

export function MultiColumnProvider({ children, columnsConfig }: Props) {
	const columnsInSmScreen = columnsConfig.smScreenColumn;
	const [columnsByScreen, setColumnsByScreen] = useState<number>(2);
	const { widthScreen } = useWidthScreen({
		onSm() {
			setColumnsByScreen(columnsConfig.smScreenColumn);
		},
		onMd() {
			setColumnsByScreen(columnsConfig.mdScreenColumn ?? columnsInSmScreen);
		},
		onLg() {
			setColumnsByScreen(columnsConfig.lgScreenColumn ?? columnsInSmScreen);
		},
		onXl() {
			setColumnsByScreen(columnsConfig.xlScreenColumn ?? columnsInSmScreen);
		},
	});

	return (
		<MultiColumnCarouselContext.Provider
			value={{ columnsConfig, columnsByScreen, widthScreen }}
		>
			{children}
		</MultiColumnCarouselContext.Provider>
	);
}
