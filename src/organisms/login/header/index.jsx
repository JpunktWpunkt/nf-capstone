import Image from "next/image";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../../images/familyhub300x300_3d.png";
import logo2 from "../../../images/familyhubschriftwhite.png";

const abs = {
	borderRadius: "0 0 10px 10px",
	display: "flex",
	position: "fixed",
	background: "linear-gradient(45deg, #30638E 50%, #5B764A 100%)",
	padding: "0.5rem 0.5rem",
};

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ ...abs }} position="fixed">
				<Toolbar>
					<Typography component="div" sx={{ flexGrow: 1 }}>
						<Image src={logo} alt="logo" width="80vw" height="80vw" />
						<Image src={logo2} alt="Logo 3d FamilyHub" />
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
