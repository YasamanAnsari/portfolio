import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

import { useMediaQuery } from 'lib/browser';
import {
	meTitle,
	aboutTabName,
	myResumeTabName,
	myProjectsTabName,
} from 'lib/contents';

import { AboutMe, Me, MyResume, MyProjects } from 'ui';

import type { NextPage } from 'next';

const IndexPage: NextPage = () => {
	const { md } = useMediaQuery();

	const tabs = [
		meTitle,
		!md ? myProjectsTabName.mobile : myProjectsTabName.desktop,
		!md ? myResumeTabName.mobile : myResumeTabName.desktop,
		!md ? aboutTabName.mobile : aboutTabName.desktop,
	];
	const panels = [
		<Me key={0} />,
		<MyProjects key={1} />,
		<MyResume key={2} />,
		<AboutMe key={3} />,
	];

	return (
		<>
			<Tab.Group>
				<Tab.Panels as={Fragment}>
					{panels.map((panel, index) => (
						<Tab.Panel key={index} as='main' tabIndex={-1}>
							{panel}
						</Tab.Panel>
					))}
				</Tab.Panels>

				<Tab.List as='ul' className='tab-list'>
					{tabs.map((tab, index) => (
						<Tab key={index} as='li' className={getTabClassName}>
							{tab}
						</Tab>
					))}
				</Tab.List>
			</Tab.Group>

			<style jsx>{`
				:global(main) {
					@apply flex-1 flex flex-col items-center justify-center px-4 py-8 md:p-0;
				}

				:global(ul.tab-list) {
					@apply flex justify-center w-full bg-lightopacity py-7;
				}

				:global(li.tab-list-item) {
					@apply mr-6 md:mr-32 last:mr-0 text-18px leading-24px cursor-pointer;
				}
			`}</style>
		</>
	);
};

const getTabClassName = ({ selected }: { selected: boolean }) =>
	['tab-list-item', selected ? 'text-secondary' : ''].filter(Boolean).join(' ');

export default IndexPage;
