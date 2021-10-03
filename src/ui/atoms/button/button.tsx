import Image from 'next/image';

import type { FC, MouseEventHandler } from 'react';

interface ButtonProps {
	label?: string;
	iconSrc?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export const Button: FC<ButtonProps> = ({
	label,
	iconSrc,
	onClick,
	className,
	children,
}) => (
	<button onClick={onClick} className={className}>
		{iconSrc && (
			<Image
				src={iconSrc}
				width={32}
				height={32}
				alt={label}
				className='mr-2'
			/>
		)}

		{label || children}

		<style jsx>{`
			button {
				@apply flex items-center;
				@apply bg-white rounded;
				@apply text-primary-on-dark-bg text-18px leading-24px;
				@apply py-2 px-7;
			}
		`}</style>
	</button>
);
