import { tailwindConfig } from 'lib/css';
import Document, { Html, Head, Main, NextScript } from 'next/document';

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
