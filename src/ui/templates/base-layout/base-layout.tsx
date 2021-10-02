import css from 'styled-jsx/css';

import { Navbar } from 'ui/molecules';

import type { FC, CSSProperties } from 'react';

export const BaseLayout: FC<{ style?: CSSProperties; className?: string }> = ({
	style,
	className,
	children,
}) => (
	<>
		<main style={style} className={className}>
			{children}
		</main>
		<style jsx>{mainCSS}</style>

		<Navbar className='base-layout-navbar' />
		<style jsx>{navbarCSS}</style>
	</>
);

const mainCSS = css`
	main {
		@apply flex-1;
	}
`;

const navbarCSS = css`
	:global(.base-layout-navbar) {
		@apply flex-none;
		@apply mt-auto;
	}
`;
