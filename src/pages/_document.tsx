import Document, { Html, Head, Main, NextScript } from 'next/document';

import { tailwindConfig } from 'lib/css';

const { dark: backgroundColor } = tailwindConfig.theme.backgroundColor;

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body style={{ backgroundColor }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
