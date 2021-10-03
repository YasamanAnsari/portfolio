import App from 'next/app';
import Head from 'next/head';

import { BrowserProvider, extractBrowserServerSideData } from 'lib/browser';
import { websiteDescription, websiteTitle } from 'lib/contents';
import { bodyCSS, fontOvverridesCSS, safeAreaPaddingForNotchs } from 'lib/css';

import { BaseLayout } from 'ui';

import Error from './_error';

import type { AppWithLayoutProps, NextWebVitalsMetric } from 'next/app';
import 'tailwindcss/tailwind.css';

class MyApp extends App<AppWithLayoutProps> {
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

		if (hasError) {
			return (
				<>
					{globalHead}
					{globalCSS}
					<Error />
				</>
			);
		}

		const Layout = Component.Layout?.Component || BaseLayout;
		const layoutProps =
			typeof Component.Layout?.props === 'function'
				? Component.Layout?.props(pageProps)
				: Component.Layout?.props || {};

		return (
			<>
				{globalHead}
				{globalCSS}
				<BrowserProvider initialData={browserData}>
					<Layout {...layoutProps}>
						<Component {...pageProps} />
					</Layout>
				</BrowserProvider>
			</>
		);
	}
}

const IS_WEB_VITALS_ENABLE = process.env.NEXT_PUBLIC_WEB_VITALS === '1';
export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
	if (IS_WEB_VITALS_ENABLE) console.log(metric);
};

const globalHead = (
	<Head>
		<title>{websiteTitle}</title>
		<meta name='description' content={websiteDescription} />
		<meta charSet='utf-8' />
		<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
		<meta
			name='viewport'
			content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes'
		/>

		<link rel='preconnect' href='https://css.gstatic.com/' crossOrigin='true' />
		<link rel='preload' as='style' href='/css/font.css' />
		{/* eslint-disable-next-line @next/next/no-css-tags */}
		<link rel='stylesheet' href='/css/font.css' />
	</Head>
);

const globalCSS = (
	<>
		<style jsx global>
			{bodyCSS}
		</style>
		<style jsx global>
			{safeAreaPaddingForNotchs}
		</style>
		<style jsx global>
			{fontOvverridesCSS}
		</style>
	</>
);

export default MyApp;
