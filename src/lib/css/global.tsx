import { global } from 'styled-jsx/css';

export const safeAreaPaddingForNotchs = global`
  body {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
`;

export const fontOvverridesCSS = global`
  h1 {
    font-family: 'Roboto', sans-serif;
    @apply font-normal text-36px leading-42px uppercase;
    @apply text-primary-default text-center;
    @apply max-w-640px;

    letter-spacing: 0.48em;
  }

  p,
  span,
  button,
  a,
  li,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
    @apply font-normal text-14px leading-24px ;
    @apply text-primary-default text-center;
    @apply max-w-640px;
  }
`;

export const bodyCSS = global`
  body {
    @apply bg-dark;
  }

  :global(#__next) {
    @apply overflow-hidden;
    @apply min-h-screen max-w-screen;
    @apply relative flex flex-col items-center justify-center;
    @apply m-0 px-4;
  }
`;

export const GlobalCSS = () => (
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
