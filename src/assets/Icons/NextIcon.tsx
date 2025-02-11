import React from 'react';

export default function NextIcon({ className, height, size = 20, width }: IconProps) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
			/>
		</svg>
	);
}
