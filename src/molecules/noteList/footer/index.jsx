import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
			<Toolbar>
				<Link passHref href="/home">
					<Button color="inherit" variant="outlined">
						Home
					</Button>
				</Link>
				©2022 JpunktWpunkt
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
