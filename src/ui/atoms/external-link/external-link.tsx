import type { FC } from 'react';

export const ExternalLink: FC<{ href: string; className?: string }> = ({
	href,
	className,
	children,
}) => (
	<a href={href} target='_blank' rel='noreferrer' className={className}>
		{children}
	</a>
);
