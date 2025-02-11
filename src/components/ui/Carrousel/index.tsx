'use client';

import React, { Children, useEffect, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import styles from './styles.module.css';
import PrevIcon from '@/assets/Icons/PrevIcon';
import NextIcon from '@/assets/Icons/NextIcon';

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
	const stylesCarouselContainer = `${
		scrollType === 'smooth' ? styles['carousel-container'] : styles['simply-container']
	} ${className}`;
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
				// carouselInner.current?.children[index].classList.remove(
				// 	styles['hide-content-smooth'],
				// );
			} else {
				carouselInner.current?.children[index].classList.remove(openSlide);
				// carouselInner.current?.children[index].classList.add(
				// 	styles['hide-content-smooth'],
				// );
			}
		}
	};

	const simplyScroll = (scrollBySliding: number) => {
		if (carouselInner.current) {
			carouselInner.current.style.transform = `translateX(-${scrollBySliding * 100}%)`;
		}
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
			<div className={styles['carousel-control-prev']}>
				<Button variant="outline" onClick={Prev}>
					<PrevIcon />
				</Button>
			</div>

			<Wrapper scrollType={scrollType}>
				<div
					ref={carouselInner}
					className={
						scrollType === 'smooth'
							? styles['carousel-slider-container']
							: styles['simply-carousel-inner']
					}
				>
					{children}
				</div>
			</Wrapper>

			<div className={styles['carousel-control-next']}>
				<Button variant="outline" onClick={Next}>
					<NextIcon />
				</Button>
			</div>
		</div>
	);
}

function Wrapper({
	children,
	scrollType,
}: {
	children: React.ReactNode;
	scrollType: ScrollType;
}) {
	if (scrollType === 'simply') {
		return <div className={styles['simply-carousel']}>{children}</div>;
	}

	return <>{children}</>;
}
