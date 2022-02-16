import Button from "@mui/material/Button";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							FamilyHub
						</Typography>
						Signed in as {session.user.email} <br />
						<Button color="inherit" variant="outlined" onClick={() => signOut()}>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		);
	}
	return (
		<>
			Not signed in <br />
			<Button onClick={() => signIn()}>Sign in</Button>
		</>
	);
};

export default Header;
