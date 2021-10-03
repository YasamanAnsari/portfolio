/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-default-export */

import { websiteDescription, websiteTitle } from 'lib/contents';

export default {
	title: websiteTitle,
	description: websiteDescription,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		site_name: websiteTitle,
	},
	twitter: {
		handle: '@handle',
		site: '@site',
		cardType: 'summary_large_image',
	},
};
