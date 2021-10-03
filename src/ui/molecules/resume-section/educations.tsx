import { myResumeSections } from 'lib/contents';

import { ResumeSection } from './resume-section';

import type { FC } from 'react';

const { educations } = myResumeSections;
export const Educations: FC<{ className?: string }> = ({ className }) => (
	<ul
		className={['flex flex-col md:flex-row', className]
			.filter(Boolean)
			.join(' ')}
	>
		{educations.list.map((education, index) => (
			<ResumeSection
				key={index}
				name={education.universityName}
				field={education.field}
				duration={education.duration}
				className='mb-8 last:mb-0 md:mb-0 w-240px'
			/>
		))}
	</ul>
);
