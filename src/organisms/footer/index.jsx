import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

const Footer = () => {
	return (
		<AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
			<Toolbar>
		©2022	JpunktWpunkt
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
