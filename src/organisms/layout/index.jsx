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
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const btnLoginGithub = {
	borderRadius: "6px 6px 0 0",
	display: "flex",
	width: "100%",
	justifyContent: "column",
	fontSize: "1.2rem",
	bottom: "4.5rem",
	background: "#5B764A",
	marginBottom: "0.1rem",
	padding: "0.5rem 1rem",
};

const btnLoginGoogle = {
	borderRadius: "0 0 0 0",
	display: "flex",
	width: "100%",
	justifyContent: "column",
	fontSize: "1.2rem",
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
			<HeaderLogin marginLeft="1em" />
			<Box marginTop="7em">
				<Typography display="flex" marginLeft="2em" color="secondary">
					You' re not signed in
					<br />
				</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				flexWrap="wrap"
				marginLeft="0.8em"
				marginRight="0.8em"
				marginBottom="5em"
			>
				<Image src={logo} alt="logo" />
				<Stack spacing={2}>
					<Typography paddingLeft="1em" color="primary">
						<b>Welcome to my</b>
					</Typography>
					<Typography paddingLeft="0.1em" variant="h3" sx={{ fontSize: "2.5rem" }}>
						Capstone Project
					</Typography>
					<Typography
						paddingLeft="1em"
						display="flex"
						justifyContent="center"
						alignItems="center"
						color="primary"
					>
						The FamilyHub facilitates the daily life of your peer group. With any number
						of registered users in a peer group, the app is particularly concerned with
						getting an overview of one's notes. Actually, each User has his own notes,
						which it can view, delete, edit and create from anywhere, but also can read,
						update, delete or added another notes from his peer group. Other planned
						features are to implement a Role System to define different roles, to create
						different Peer groups. Another Features are p.e. a timestamp, a reminder
						function or the connection to calendar systems and the creation of multiple
						peer groups. At last, a shopping List will be allowing all users of a Peer
						group to define items to a Shopping-List.
					</Typography>

					<Typography paddingLeft="1em" width="80vw" color="secondary">
						<b>Tech Stack:</b> JavaScript | React.js | Next.js | NextAuth | MongoDB |
						Axios | Mongoose | Material UI | CSS
					</Typography>
					<Typography variant="h4" paddingLeft="0.5em" color="primary">
						Let's go and sign in
					</Typography>
				</Stack>
			</Box>

			<Button
				sx={{ ...btnLoginGithub }}
				variant="contained"
				startIcon={<GitHubIcon />}
				onClick={() => {
					signIn("github");
				}}
			>
				{" "}
				Sign in with GitHub!
			</Button>
			<Button
				sx={{ ...btnLoginGoogle }}
				variant="contained"
				startIcon={<GoogleIcon />}
				onClick={() => {
					signIn("google");
				}}
			>
				{" "}
				Sign in with Google!
			</Button>

			<Footer />
		</>
	);
};

export default Layout;
