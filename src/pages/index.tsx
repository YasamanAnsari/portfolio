import { summeryAboutMe, websiteDescription, websiteTitle } from 'lib/contents';
import { Socials } from 'ui/molecules/socials';

import type { NextPageWithLayout } from 'next';

const IndexPage: NextPageWithLayout = () => (
	<>
		<h1 className='mb-4'>{websiteTitle}</h1>
		<h2 className='mb-2'>{websiteDescription}</h2>
		<span className='mb-4'>Connect me:</span>
		<Socials />
		<p className='mt-6'>{summeryAboutMe}</p>
	</>
);

export default IndexPage;
