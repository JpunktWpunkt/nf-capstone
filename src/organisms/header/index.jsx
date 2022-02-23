import Button from "@mui/material/Button";
import Image from "next/image";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSession, signOut } from "next-auth/react";
/*import logo2 from "../../images/familyhub.svg";*/
import logo from "../../images/familyhub300x300_3d.png";
/*import logo2 from "../../images/familyhub300x300.png";*/
import logo2 from "../../images/familyhubschriftwhite.png";

const abs = {
	borderRadius: "0 0 10px 10px",
	display: "flex",
	position: "fixed",
	background: "linear-gradient(45deg, #30638E 50%, #5B764A 100%)",
	padding: "0.5rem 0.5rem",
};

const Header = () => {
	const { data: session } = useSession();
	return (
		<Box sx={{ flexGrow: 0 }}>
			<AppBar sx={{ ...abs }} position="fixed">
				<Typography marginLeft="8rem" variant="h6">
					Signed in as {session.user.email}
				</Typography>
				<Toolbar>
					<Typography component="div" sx={{ flexGrow: 1 }}>
						<Image
							src={logo}
							alt="logo"
							width="80vw"
							height="80vw"
							justifyContent="left"
						/>
						<Image src={logo2} alt="logo" justifyContent="left" />
					</Typography>

					<Button color="inherit" variant="outlined" onClick={() => signOut()}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
