import { attachBrowserServerSideData } from 'lib/browser';

import type { BrowserObject } from 'lib/browser';
import type { GetServerSideProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

export function globalGetServerSideProps<
	Props = unknown,
	Query extends ParsedUrlQuery = ParsedUrlQuery
>(
	getServerSideProps: GetServerSideProps<Props, Query>
): GetServerSideProps<Props & BrowserObject, Query> {
	return async (ctx) => {
		const pageResult = await getServerSideProps(ctx);
		const hasProps = Object.getOwnPropertyNames(pageResult).some(
			(name) => name === 'props'
		);

		if (hasProps) {
			return {
				...pageResult,
				props: {
					// @ts-ignore
					...pageResult.props,
					...attachBrowserServerSideData(ctx.req),
				},
			};
		}

		return pageResult;
	};
}
