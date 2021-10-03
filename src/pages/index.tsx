import { MyProjects } from 'ui/templates/my-projects';

import { AboutMe, Landing, MyResume } from 'ui';

import type { NextPageWithLayout } from 'next';

const IndexPage: NextPageWithLayout = () => (
	<>
		<Landing />
		<MyProjects />
		<MyResume />
		<AboutMe />
	</>
);

export default IndexPage;
