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
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
};

interface ButtonProps extends PropsComponent {
	typeOfButton?: 'button';
	type?: 'button' | 'submit' | 'reset';
}

interface LinkPropsComponent extends PropsComponent {
	typeOfButton?: 'link';
	href: string;
}

type Props = ButtonProps | LinkPropsComponent;

export function Button(props: Props) {
	const {
		variant = 'primary',
		typeOfButton = 'button',
		className = '',
		children,
		...data
	} = props;
	let cssClass = styles.btn;
	cssClass += ` ${MatchVariant(variant)}`;
	cssClass += ' ' + className;

	if (typeOfButton === 'link') {
		const { href, ...linkProps } = data as LinkPropsComponent;
		return (
			<Link href={href} {...linkProps} className={cssClass}>
				{children}
			</Link>
		);
	}

	if (props.typeOfButton === 'button') {
	}

	const { ...buttonProps } = data as ButtonProps;

	return (
		<button {...buttonProps} className={cssClass}>
			{children}
		</button>
	);
}
