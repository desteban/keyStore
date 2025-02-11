import React from 'react';

export default function PrevIcon({ className, height, size =20, width }: IconProps) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 24 24"
		>
			<path fill="currentColor" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z" />
		</svg>
	);
}
