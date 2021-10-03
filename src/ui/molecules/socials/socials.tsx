import { githubUrl, linkedinUrl } from 'lib/contents';

import { SocialItem } from './item';

import type { FC } from 'react';

export const Socials: FC<{ className?: string }> = ({ className }) => (
	<ul className={['flex', className].filter(Boolean).join(' ')}>
		<SocialItem
			socialName='Linkedin'
			iconSrc='/icons/linkedin.svg'
			hrefUrl={linkedinUrl}
			className='mr-4'
		/>
		<SocialItem
			socialName='Github'
			iconSrc='/icons/github.svg'
			hrefUrl={githubUrl}
		/>
	</ul>
);
