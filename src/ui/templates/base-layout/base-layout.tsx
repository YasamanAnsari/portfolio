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
		<style jsx>{`
			main {
				@apply flex-1 flex flex-col items-center justify-center;
			}
		`}</style>

		{/* <Navbar className='base-layout-navbar' />
		<style jsx>{navbarCSS}</style> */}
	</>
);

// const navbarCSS = css`
// 	:global(.base-layout-navbar) {
// 		@apply flex-none;
// 		@apply mt-auto;
// 	}
// `;
