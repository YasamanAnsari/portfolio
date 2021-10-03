import type { FC } from 'react';

interface ResumeSectionProps {
	name: string;
	field: string;
	duration: string;
	className?: string;
}

export const ResumeSection: FC<ResumeSectionProps> = ({
	name,
	field,
	duration,
	className,
}) => (
	<li className={className}>
		<h4 className='mb-2'>{name}</h4>
		<h5 className='mb-2 font-bold'>{field}</h5>
		<h6 className='text-primary-light'>{duration}</h6>
	</li>
);
