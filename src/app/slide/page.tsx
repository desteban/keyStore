import image1 from '@assets/1.jpg';
import image2 from '@assets/2.jpg';
import image3 from '@assets/3.jpg';
import image4 from '@assets/4.jpg';
import MultiColumnCarousel from '@/components/ui/Carrousel/MultiColumnCarousel/MultiColumnCarousel';
import Header from '@/components/ui/Header/Header';
import ItemMultiColumnCarousel from '@/components/ui/Carrousel/MultiColumnCarousel/components/ItemMultiColumnCarousel';
import Slides from '../components/Slides';

export default function page() {
	return (
		<main className="">
			<Header variant="static" />

			<section className="mt-5">
				<h2>Multi Column</h2>
				<div className="px-5">
					<MultiColumnCarousel
						columns={{ smScreenColumn: 2, lgScreenColumn: 3, xlScreenColumn: 4 }}
						className="h-96"
					>
						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image1.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>

						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image2.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>

						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image3.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>

						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image4.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>

						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image1.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>

						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image2.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>

						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image3.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>

						<ItemMultiColumnCarousel>
							<picture>
								<img
									src={image4.src}
									alt="random"
									className="w-full h-full object-cover"
								/>
							</picture>
						</ItemMultiColumnCarousel>
					</MultiColumnCarousel>
				</div>

				<h2>Simply</h2>
				<Slides />

				<h2>Smooth</h2>
				<Slides scrollType="smooth" />
			</section>
		</main>
	);
}
