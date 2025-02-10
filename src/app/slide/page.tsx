import image1 from '@assets/1.jpg';
import image2 from '@assets/2.jpg';
import image3 from '@assets/3.jpg';
import image4 from '@assets/4.jpg';
import MultiColumnCarousel from '@/components/ui/Carrousel/MultiColumnCarousel/MultiColumnCarousel';
import ItemMultiColumnCarousel from '@/components/ui/Carrousel/MultiColumnCarousel/ItemMultiColumnCarousel';

export default function page() {
	return (
		<main className="container mx-auto px-7 py-10">
			<div>
				<MultiColumnCarousel
					columns={{ smScreenColumn: 2, xlScreenColumn: 4 }}
					className="h-96"
				>
					<ItemMultiColumnCarousel>
						<picture>
							<img src={image1.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>

					<ItemMultiColumnCarousel>
						<picture>
							<img src={image2.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>

					<ItemMultiColumnCarousel>
						<picture>
							<img src={image3.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>

					<ItemMultiColumnCarousel>
						<picture>
							<img src={image4.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>

					<ItemMultiColumnCarousel>
						<picture>
							<img src={image1.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>

					<ItemMultiColumnCarousel>
						<picture>
							<img src={image2.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>

					<ItemMultiColumnCarousel>
						<picture>
							<img src={image3.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>

					<ItemMultiColumnCarousel>
						<picture>
							<img src={image4.src} alt="random" className="w-full h-full object-cover" />
						</picture>
					</ItemMultiColumnCarousel>
				</MultiColumnCarousel>
			</div>
		</main>
	);
}
