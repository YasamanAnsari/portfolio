/* eslint-disable @next/next/no-css-tags */
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import Head from 'next/head';

import { BrowserProvider, extractBrowserServerSideData } from 'lib/browser';
import { GlobalCSS } from 'lib/css';
import seoConfig from 'next-seo.config';

import Error from './_error';

import type { NextWebVitalsMetric } from 'next/app';

import 'tailwindcss/tailwind.css';

class MyApp extends App {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		const { hasError } = this.state;
		const { Component, pageProps } = this.props;
		const browserData = extractBrowserServerSideData(pageProps);

		return (
			<>
				{globalHead}
				<GlobalCSS />

				{hasError ? (
					<Error />
				) : (
					<BrowserProvider initialData={browserData}>
						<Component {...pageProps} />
					</BrowserProvider>
				)}
			</>
		);
	}
}

const IS_WEB_VITALS_ENABLE = process.env.NEXT_PUBLIC_WEB_VITALS === '1';
export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
	if (IS_WEB_VITALS_ENABLE) console.log(metric);
};

const globalHead = (
	<>
		<DefaultSeo {...seoConfig} />
		<Head>
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes'
			/>

			<link
				rel='preconnect'
				href='https://css.gstatic.com/'
				crossOrigin='true'
			/>
			<link rel='preload' as='style' href='/css/font.css' />
			<link rel='stylesheet' href='/css/font.css' />
		</Head>
	</>
);

export default MyApp;
