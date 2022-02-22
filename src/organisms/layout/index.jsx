import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import { useSession, signIn } from "next-auth/react";
import HeaderLogin from "../login/header";
import Image from "next/image";
import logo from "../../images/logo_familyhub.png";
import Stack from "@mui/material/Stack";

const btnLogin = {
	borderRadius: "6px 6px 0 0",
	display: "flex",
	position: "fixed",
	width: "100vw",
	zIndex: 1,
	left: 0,
	fontSize: "1.5rem",
	bottom: "4.5rem",
	background: "#5B764A",
	padding: "0.5rem 1rem",
};

const Layout = ({ children }) => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<Header marginBottom="2em" />
				<Box marginTop="8em" marginBottom="8em">
					{children}
				</Box>
				<Footer />
			</>
		);
	}
	return (
		<>
			<HeaderLogin marginLeft="2em" />
			<Box marginTop="8em" marginBottom="3em">
				<Typography display="flex" marginLeft="2em" color="secondary">
					You' re not signed in
					<br />
				</Typography>
			</Box>
			<Box display="flex" justifyContent="center" flexWrap="wrap" marginBottom="10em">
				{/*//TODO margin um das Bild herum*/}
				<Image src={logo} alt="logo" />
				{/*//TODO ab hier soll der Text Mobil nicht mehr links am Rand kleben*/}
				<Stack spacing={2}>
					<Typography paddingLeft="1em" color="primary">
						<b>Welcome to my</b>
					</Typography>
					{/*//TODO Font Dauerhaft installieren alternativ Google handwritten Font*/}
					<Typography paddingLeft="0.2em" variant="h2">
						Capstone Project
					</Typography>
					<Typography
						paddingLeft="1em"
						display="flex"
						justifyContent="center"
						alignItems="center"
						color="primary"
					>
						The FamilyHub facilitates the organizational daily life of the peer group.
						With any number of registered users in a peer group, the app is particularly
						concerned with getting an overview of one's notes. Actually each User has
						his own notes, which it can view, delete, edit and create from anywhere, but
						also can read, update, delete or added another notes from his peer group.
						Other planned features are to implement a Role System to define different
						roles, to create different PeerGroups. Another Features are p.e. a
						timestamp, a reminder function or the connection to calendar systems and the
						creation of multiple peer groups. At last a shopping List will be allows all
						users of a peergroup to define items to a Shopping-List.
					</Typography>
					<Typography paddingLeft="1em" width="80vw" color="secondary">
						<b>Tech Stack:</b> JavaScript | React.js | Next.js | NextAuth | MongoDB |
						Axios | Mongoose | Material UI | CSS
					</Typography>
				</Stack>
			</Box>
			<Button
				sx={{ ...btnLogin }}
				position="fixed"
				variant="contained"
				onClick={() => signIn()}
			>
				Sign in
			</Button>
			<Footer />
		</>
	);
};

export default Layout;
