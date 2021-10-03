import { aboutMe, aboutMeTitle } from 'lib/contents';

import type { FC } from 'react';

export const AboutMe: FC = () => (
	<article>
		<h2 className='mb-6 text-left'>{aboutMeTitle}</h2>
		{aboutMe.map((paragraph, index) => (
			<p key={index} className='mb-1 text-left leading-18px last:mb-0'>
				{paragraph}
			</p>
		))}
	</article>
);
