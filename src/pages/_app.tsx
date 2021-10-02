import App from 'next/app';
import Head from 'next/head';
import { global } from 'styled-jsx/css';

import { BrowserProvider, extractBrowserServerSideData } from 'lib/browser';

import { BaseLayout } from 'ui';
import 'tailwindcss/tailwind.css';

import Error from './_error';

import type { AppWithLayoutProps, NextWebVitalsMetric } from 'next/app';

const globalCSS = global`
	*:not(i) {
		font-family: Inter sans-serif;
	}

	:global(#__next) {
		@apply relative flex flex-col min-h-screen m-0 overflow-hidden text-base max-w-screen;


		padding: env(safe-area-inset-top) env(safe-area-inset-right)
			env(safe-area-inset-bottom) env(safe-area-inset-left);
	}
`;

const DefaultCSS = () => (
	<style jsx global>
		{globalCSS}
	</style>
);

const DefaultHead = () => (
	<Head>
		<meta charSet='utf-8' />
		<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
		<meta
			name='viewport'
			content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes'
		/>
		<title>Next.js</title>
	</Head>
);

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
					<Error />
					<DefaultHead />
					<DefaultCSS />
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
				<DefaultHead />
				<DefaultCSS />
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

export default MyApp;
