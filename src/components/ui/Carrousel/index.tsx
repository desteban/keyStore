import React, { Children, useEffect, useState } from 'react';
import { ItemCarrousel } from './ItemCarrousel';
import { Button } from '../Button/Button';
import styles from './styles.module.css';

interface CarouselProps {
	className?: string;
	id?: string;
	interval?: number;
	children: React.ReactNode;
}

export default function Carrousel({
	id,
	className,
	interval = 3000,
	children,
}: CarouselProps) {
	const size = Children.count(children);
	const [currentItem, setCurrentItem] = useState(0);
	const stylesCarouselContainer = `${styles['carousel-container']} ${className}`;

	useEffect(() => {
		const intervalId = setInterval(() => {
			Next();
		}, interval);
		return () => clearInterval(intervalId);
	}, [currentItem, size]);

	const ChildrenWithProps = Children.map(children, (child, index) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child as React.ReactElement<ItemCarrousel>, {
				active: currentItem === index,
			});
		}

		return child;
	});

	const Prev = () => {
		setCurrentItem((item) => (item - 1 < 0 ? size - 1 : item - 1));
	};

	const Next = () => {
		setCurrentItem((currentItem + 1) % size);
	};

	return (
		<div id={id} className={stylesCarouselContainer}>
			<div>
				<Button variant="outline" onClick={Prev}>
					{'<'}
				</Button>
			</div>

			<div className={styles['carousel-slider-container']}>{ChildrenWithProps}</div>

			<div>
				<Button variant="outline" onClick={Next}>
					{'>'}
				</Button>
			</div>
		</div>
	);
}
