'use client';

import React, { Children, useEffect, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import styles from './styles.module.css';

type ScrollType = 'simply' | 'smooth';

interface CarouselProps {
	className?: string;
	id?: string;
	interval?: number;
	children: React.ReactNode;
	scrollType?: ScrollType;
}

export default function Carrousel({
	id,
	className,
	interval = 3000,
	children,
	scrollType = 'smooth',
}: CarouselProps) {
	const size = Children.count(children);
	const [currentItem, setCurrentItem] = useState(0);
	const stylesCarouselContainer = `${styles['carousel-container']} ${className}`;
	const carouselInner = useRef<HTMLDivElement>(null);
	const openSlide = styles['carousel-inner-item-open'];

	useEffect(() => {
		const intervalId = setInterval(() => {
			Next();
		}, interval);
		return () => clearInterval(intervalId);
	}, [interval, size, currentItem]);

	useEffect(() => {
		carouselInner.current?.children[0].classList.add(openSlide);
	}, []);

	const smoothScroll = (scrollBySliding: number) => {
		for (let index = 0; index < size; index++) {
			if (scrollBySliding === index) {
				carouselInner.current?.children[index].classList.add(openSlide);
				carouselInner.current?.children[index].classList.remove(
					styles['hide-content-smooth'],
				);
			} else {
				carouselInner.current?.children[index].classList.remove(openSlide);
				carouselInner.current?.children[index].classList.add(
					styles['hide-content-smooth'],
				);
			}
		}
	};

	const simplyScroll = (scrollBySliding: number) => {
		console.log('simply', scrollBySliding);
	};

	const changeSlide = (slide: number) => {
		if (scrollType === 'simply') {
			simplyScroll(slide);
		}

		if (scrollType === 'smooth') {
			smoothScroll(slide);
		}
	};

	const Prev = () => {
		const slide = currentItem - 1 < 0 ? size - 1 : currentItem - 1;
		setCurrentItem(slide);
		changeSlide(slide);
	};

	const Next = () => {
		const slide = (currentItem + 1) % size;
		setCurrentItem(slide);
		changeSlide(slide);
	};

	return (
		<div id={id} className={stylesCarouselContainer}>
			<div>
				<Button variant="outline" onClick={Prev}>
					{'<'}
				</Button>
			</div>

			<div ref={carouselInner} className={styles['carousel-slider-container']}>
				{children}
			</div>

			<div>
				<Button variant="outline" onClick={Next}>
					{'>'}
				</Button>
			</div>
		</div>
	);
}
