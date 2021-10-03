import {
	websiteTitle,
	websiteDescription,
	socialsTitle,
	summeryAboutMe,
} from 'lib/contents';
import { Socials } from 'ui/molecules';

import type { FC } from 'react';

export const Landing: FC = () => (
	<>
		<h1 className='mb-4'>{websiteTitle}</h1>
		<h3 className='mb-2 text-14px leading-24px'>{websiteDescription}</h3>
		<span className='mb-4'>{socialsTitle}</span>
		<Socials className='mb-6' />
		<p>{summeryAboutMe}</p>
	</>
);
