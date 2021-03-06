import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../ions/theme";
import Head from "next/head";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session}>
			<ThemeProvider theme={theme}>
				<Head>
					<link rel="stylesheet" href="https://use.typekit.net/fsk6wss.css" />
				</Head>
				<Global styles={globalStyle} />
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
};

export default App;
