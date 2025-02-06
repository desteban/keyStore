import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { CardChip } from '@/components/ui/Card/CardChip';
import { CardTitle } from '@/components/ui/Card/CardTitle';
import Slides from './components/Slides';
import Header from '@/components/ui/Header/Header';

export default function Home() {
	return (
		<div className="container mx-auto">
			<div className="">
				<Header variant="sticky" />

				<Slides />
			</div>

			<h1 className="text-4xl font-bold mt-10">Hello, world!</h1>
			<p className="mt-4">
				This is a{' '}
				<a href="https://nextjs.org/" target="_blank">
					Next.js
				</a>{' '}
				project with Tailwind CSS and TypeScript.
			</p>
			<Button className="mt-4">Change theme</Button>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
				<Card>
					<h2>
						<CardTitle>Card Title</CardTitle>
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						voluptatum iure obcaecati assumenda architecto velit quibusdam officiis
						repellendus maiores dolore itaque sunt doloremque animi qui nisi,{' '}
						<a href="#">commodi</a> esse eos autem?
					</p>

					<div className="flex space-x-3 mt-4 rounded">
						<CardChip>Chip 1</CardChip>

						<CardChip>Chip 2</CardChip>

						<CardChip>Chip 3</CardChip>
					</div>
				</Card>

				<Card>
					<h2>
						<CardTitle>Card Title</CardTitle>
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						voluptatum iure obcaecati assumenda architecto velit quibusdam officiis
						repellendus maiores dolore itaque sunt doloremque animi qui nisi,{' '}
						<a href="#">commodi</a> esse eos autem?
					</p>

					<div className="flex space-x-3 mt-4 rounded">
						<CardChip>Chip 1</CardChip>

						<CardChip>Chip 2</CardChip>

						<CardChip>Chip 3</CardChip>
					</div>
				</Card>

				<Card>
					<h2>
						<CardTitle>Card Title</CardTitle>
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						voluptatum iure obcaecati assumenda architecto velit quibusdam officiis
						repellendus maiores dolore itaque sunt doloremque animi qui nisi,{' '}
						<a href="#">commodi</a> esse eos autem?
					</p>

					<div className="flex space-x-3 mt-4 rounded">
						<CardChip>Chip 1</CardChip>

						<CardChip>Chip 2</CardChip>

						<CardChip>Chip 3</CardChip>
					</div>
				</Card>

				<Card>
					<h2>
						<CardTitle>Card Title</CardTitle>
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						voluptatum iure obcaecati assumenda architecto velit quibusdam officiis
						repellendus maiores dolore itaque sunt doloremque animi qui nisi,{' '}
						<a href="#">commodi</a> esse eos autem?
					</p>

					<div className="flex space-x-3 mt-4 rounded">
						<CardChip>Chip 1</CardChip>

						<CardChip>Chip 2</CardChip>

						<CardChip>Chip 3</CardChip>
					</div>
				</Card>
			</div>
		</div>
	);
}
