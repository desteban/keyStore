'use client';

import { Button } from '@/components/ui/Button/Button';
import { useState } from 'react';
import styles from '../styles.module.css';
import PrevIcon from '@/assets/Icons/PrevIcon';
import NextIcon from '@/assets/Icons/NextIcon';

interface Props {
	onNext: () => void;
	onPrev: () => void;
}

export default function CarouselControls({ onNext, onPrev }: Props) {
	const [showButtons] = useState(true);

	return (
		<>
			<Button
				variant="none"
				className={showButtons ? styles.prev : 'hidden'}
				onClick={onPrev}
				title="Atrás"
				aria-label="Slide anterior"
			>
				<PrevIcon size={20} />
			</Button>
			<Button
				variant="none"
				className={showButtons ? styles.next : 'hidden'}
				onClick={onNext}
				title="Siguiente"
				aria-label="siguiente slide"
			>
				<NextIcon size={20} />
			</Button>
		</>
	);
}
