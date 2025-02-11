import Link, { LinkProps } from 'next/link';
import { MatchVariant } from './MatchVariant';
import { Variants } from './Variants';
import styles from './styles.module.css';

type PropsComponent = {
	variant?: Variants;
	children?: React.ReactNode;
};

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		PropsComponent {
	typeOfButton?: 'button';
	// children: React.ReactNode
}

interface LinkPropsComponent extends LinkProps, PropsComponent {
	typeOfButton?: 'link';
	// children: React.ReactNode;
	className?: string;
}

type Props = ButtonProps | LinkPropsComponent;

export function Button(props: Props) {
	const { variant = 'primary', typeOfButton = 'button', className = '' } = props;
	let cssClass = styles.btn;
	cssClass += ` ${MatchVariant(variant)}`;
	cssClass += ' ' + className;

	if (typeOfButton === 'link') {
		const { href, ...linkProps } = props as LinkPropsComponent;
		return (
			<Link href={href} {...linkProps}>
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
