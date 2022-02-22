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
					You' re not signed in <br />
				</Typography>
			</Box>
			<Box display="flex" justifyContent="center" flexWrap="wrap" marginBottom="10em">
				<Image src={logo} alt="logo" />

				<Stack spacing={2}>
					<Typography color="primary">
						<b>Welcome to my</b>
					</Typography>
					<Typography variant="h2">Capstone Project</Typography>
					<Typography width="80vw" color="primary">
						The FamilyHub facilitates the organizational daily life of the peer group.
						With any number of registered users in a peer group, the app is particularly
						concerned with getting an overview of one's notes as easily as possible
						without getting bogged down in one's message groups. Each user has his own
						notes, which it can view, delete, edit and create from anywhere. Other
						planned features include a timestamp, a reminder function or the connection
						to calendar systems and the creation of multiple peer groups. The shared
						shopping list allows all users in the group to quickly and easily add items
						they need to the list.
					</Typography>
					<Typography width="80vw" color="secondary">
						<b>Tech Stack:</b> JavaScript | React.js | Next.js | NextAuth | MongoDB |
						Axios | Mongoose | Material UI | CSS
					</Typography>
				</Stack>
			</Box>
			<Button
				sx={{ ...btnLogin }}
				position="fixed"
				variant="outlined"
				onClick={() => signIn()}
			>
				Sign in
			</Button>
			<Footer />
		</>
	);
};

export default Layout;
