import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import { useSession, signIn } from "next-auth/react";
import HeaderLogin from "../login/header";

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
			<HeaderLogin />
			<Box marginLeft="20em">
				<Typography>
					Not signed in <br />
				</Typography>
				<Button color="inherit" variant="outlined" onClick={() => signIn()}>
					Sign in
				</Button>
			</Box>
		</>
	);
};

export default Layout;
