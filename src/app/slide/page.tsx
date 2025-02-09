import image1 from '@assets/1.jpg';
import image2 from '@assets/2.jpg';
import image3 from '@assets/3.jpg';
import image4 from '@assets/4.jpg';
import MultiColumnCarousel from '@/components/ui/Carrousel/MultiColumnCarousel/MultiColumnCarousel';

export default function page() {
	return (
		<main className="container mx-auto px-7 py-10">
			<div>
				<MultiColumnCarousel columns={2} className="h-96">
					<picture>
						<img src={image1.src} alt="random" className="w-full h-full object-cover" />
					</picture>

					<picture>
						<img src={image2.src} alt="random" className="w-full h-full object-cover" />
					</picture>

					<picture>
						<img src={image3.src} alt="random" className="w-full h-full object-cover" />
					</picture>

					<picture>
						<img src={image4.src} alt="random" className="w-full h-full object-cover" />
					</picture>
				</MultiColumnCarousel>
			</div>
		</main>
	);
}
