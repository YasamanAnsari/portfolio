import css from 'styled-jsx/css';

import type { FC } from 'react';

export const Navbar: FC<{ className: string }> = ({ className }) => (
	<>
		<nav className={className}>Navbar!</nav>
		<style jsx>{navbarCSS}</style>
	</>
);

const navbarCSS = css`
	nav {
	}
`;
