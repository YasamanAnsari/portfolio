import {
	myResumeTitle,
	myResumeSections,
	downloadFullResumeText,
} from 'lib/contents';
import { Button } from 'ui/atoms';
import { Experiences, Educations } from 'ui/molecules';

import type { FC } from 'react';

const { experiences, educations } = myResumeSections;
export const MyResume: FC = () => (
	<>
		<h2 className='mb-12'>{myResumeTitle}</h2>
		<h3 className='mb-6 text-secondary'>{experiences.title}:</h3>
		<Experiences className='mb-14' />
		<h3 className='mb-6 text-secondary'>{educations.title}:</h3>
		<Educations className='mb-14' />
		<a href='/Yasaman_Ansari_CV.pdf' target='_blank'>
			<Button iconSrc='/icons/pdf.svg' label={downloadFullResumeText} />
		</a>
	</>
);
