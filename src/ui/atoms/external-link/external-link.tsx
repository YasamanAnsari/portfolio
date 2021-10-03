import type { FC, HTMLAttributes } from 'react';

export const ExternalLink: FC<{
	href: string;
	tabIndex?: HTMLAttributes<HTMLAnchorElement>['tabIndex'];
	className?: string;
}> = ({ href, tabIndex, className, children }) => (
	<a
		href={href}
		tabIndex={tabIndex}
		target='_blank'
		rel='noreferrer'
		className={className}
	>
		{children}
	</a>
);
