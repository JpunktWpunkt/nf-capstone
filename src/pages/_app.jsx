import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session}>
			<Global styles={globalStyle} />
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default App;

/*
const App = ({ Component, pageProps }) => {
	return (
		<>
			<Global styles={globalStyle} />
			<Component {...pageProps} />
		</>
	);
};

export default App;*/
