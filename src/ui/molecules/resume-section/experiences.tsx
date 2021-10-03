import { myResumeSections } from 'lib/contents';

import { ResumeSection } from './resume-section';

import type { FC } from 'react';

const { experiences } = myResumeSections;
export const Experiences: FC<{ className?: string }> = ({ className }) => (
	<ul className={['flex', className].filter(Boolean).join(' ')}>
		{experiences.list.map((experience, index) => (
			<ResumeSection
				key={index}
				name={experience.jobTitle}
				field={experience.companyTitle}
				duration={experience.duration}
				className='w-240px'
			/>
		))}
	</ul>
);
