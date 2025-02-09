'use client';

import { Button } from '../../Button/Button';
import styles from './styles.module.css';
import { Children, useEffect, useRef, useState } from 'react';

interface Props {
	children: React.ReactNode;
	columns: number;
	className?: string;
}

export default function MultiColumnCarousel({ children, columns, className }: Props) {
	const size = Children.count(children);
	const totalScroll = Math.ceil(size / columns);
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
		console.log(slide);

		if (slide < 0) {
			console.log('total', totalScroll);

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

	return (
		<div className="">
			<div className={[styles.container, className].join(' ')}>
				<div className={`${styles.carousel}`} ref={carouselInner}>
					{children}
				</div>
			</div>
			<div className="space-x-3 mt-3">
				<Button onClick={Prev}>back</Button>
				<Button onClick={Next}>next</Button>
			</div>
		</div>
	);
}
