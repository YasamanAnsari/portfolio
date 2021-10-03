import { myResumeSections } from 'lib/contents';

import { ResumeSection } from './resume-section';

import type { FC } from 'react';

const { educations } = myResumeSections;
export const Educations: FC<{ className?: string }> = ({ className }) => (
	<ul className={['flex', className].filter(Boolean).join(' ')}>
		{educations.list.map((education, index) => (
			<ResumeSection
				key={index}
				name={education.universityName}
				field={education.field}
				duration={education.duration}
				className='w-240px'
			/>
		))}
	</ul>
);
