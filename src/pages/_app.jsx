import { Global } from "@emotion/react";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import { globalStyle } from "../ions/styles";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import theme from "../ions/theme";
import logo from "../images/logo_familyhub.png";
import Stack from "@mui/material/Stack";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session}>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyle} />
				<Component {...pageProps} />
				<Box display="flex" justifyContent="center" flexWrap="wrap">
					<Image src={logo} alt="logo" />
					<Stack spacing={2}>
						<Typography color="primary">
							<b>Welcome to my</b>
						</Typography>
						<Typography variant="h2">Capstone Project</Typography>
						<Typography width="80vw" color="primary">
							The FamilyHub facilitates the organizational daily life of the peer
							group. With any number of registered users in a peer group, the app is
							particularly concerned with getting an overview of one's notes as easily
							as possible without getting bogged down in one's message groups. Each
							user has his own notes, which it can view, delete, edit and create from
							anywhere. Other planned features include a timestamp, a reminder
							function or the connection to calendar systems and the creation of
							multiple peer groups. The shared shopping list allows all users in the
							group to quickly and easily add items they need to the list.
						</Typography>
						<Typography width="80vw" color="secondary">
							<b>Tech Stack:</b> JavaScript | React.js | Next.js | NextAuth | MongoDB
							| Axios | Mongoose | Material UI | CSS
						</Typography>
					</Stack>
				</Box>
			</ThemeProvider>
		</SessionProvider>
	);
};

export default App;
