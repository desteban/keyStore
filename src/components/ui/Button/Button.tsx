import Link from 'next/link';
import { MatchVariant } from './MatchVariant';
import { Variants } from './Variants';
import styles from './styles.module.css';

type PropsComponent = {
	variant?: Variants;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	title?: string;
};

interface ButtonProps extends PropsComponent {
	typeOfButton?: 'button';
}

interface LinkPropsComponent extends PropsComponent {
	typeOfButton?: 'link';
	href: string;
}

type Props = ButtonProps | LinkPropsComponent;

export function Button(props: Props) {
	const { variant = 'primary', typeOfButton = 'button', className = '' } = props;
	let cssClass = styles.btn;
	cssClass += ` ${MatchVariant(variant)}`;
	cssClass += ' ' + className;

	if (typeOfButton === 'link') {
		const { href, typeOfButton, ...linkProps } = props as LinkPropsComponent;
		return (
			<Link href={href} {...linkProps} className={cssClass}>
				{props.children}
			</Link>
		);
	}
	const { ...buttonProps } = props as ButtonProps;

	return (
		<button {...buttonProps} className={cssClass}>
			{props.children}
		</button>
	);
}
