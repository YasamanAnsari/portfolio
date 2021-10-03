import { myResumeSections } from 'lib/contents';

import { ResumeSection } from './resume-section';

import type { FC } from 'react';

const { experiences } = myResumeSections;
export const Experiences: FC<{ className?: string }> = ({ className }) => (
	<ul
		className={['flex flex-col md:flex-row', className]
			.filter(Boolean)
			.join(' ')}
	>
		{experiences.list.map((experience, index) => (
			<ResumeSection
				key={index}
				name={experience.jobTitle}
				field={experience.companyTitle}
				duration={experience.duration}
				className='mb-8 last:mb-0 w-240px md:mb-0'
			/>
		))}
	</ul>
);
