import Image from 'next/image';

import { ExternalLink } from 'ui/atoms';

import type { FC } from 'react';

interface SocialItemProps {
	socialName: string;
	iconSrc: string;
	hrefUrl: string;
	className?: string;
}

export const SocialItem: FC<SocialItemProps> = ({
	socialName,
	iconSrc,
	hrefUrl,
	className,
}) => (
	<li className={['flex flex-col', className].filter(Boolean).join(' ')}>
		<ExternalLink href={hrefUrl} tabIndex={-1}>
			<Image src={iconSrc} alt={hrefUrl} width={40} height={40} />
		</ExternalLink>
		<ExternalLink href={hrefUrl} className='mt-2 text-secondary'>
			{socialName}
		</ExternalLink>
	</li>
);
