import Button from "@mui/material/Button";
import Image from "next/image";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSession, signIn, signOut } from "next-auth/react";
/*import logo2 from "../../images/familyhub.svg";*/
import logo from "../../images/familyhub300x300_3d.png";
/*import logo from "../../images/familyhub300x300.png";*/
import logo2 from "../../images/familyhubschriftwhite.png";

const abs = {
	borderRadius: "0 0 6px 6px",
	display: "flex",
	position: "fixed",
	/*	width: "100vw",
	zIndex: 1,
	left: 0,
	fontSize: "1.5rem",
	bottom: "3.5rem",*/
	background: "linear-gradient( 45deg, #30638E 50%, #5B764A 100%)",
	padding: "0.5rem 1rem",
};

const Header = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<Box sx={{ flexGrow: 0 }}>
				<AppBar sx={{ ...abs }} position="fixed">
					<Toolbar>
						<Typography component="div" sx={{ flexGrow: 1 }}>
							<Image
								src={logo}
								alt="logo"
								width="100vw"
								height="100vw"
								justifyContent="left"
							/>
							<Image src={logo2} alt="logo" justifyContent="left" />
						</Typography>

						<Button color="inherit" variant="outlined" onClick={() => signOut()}>
							Logout
						</Button>
					</Toolbar>
					<Typography variant="h6">Signed in as {session.user.email}</Typography>
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
