import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const abs = {
	display: "flex",
	position: "fixed",
	background: "linear-gradient(45deg, #30638E 50%, #5B764A 100%)",
	padding: "0.5rem 0.5rem",
	top: "auto",
	bottom: 0,
};
const Footer = () => {
	return (
		<AppBar sx={{ ...abs }}>
			<Toolbar sx={{ alignItems: "center" }}>
				<Stack direction="row" gap={5} sx={{ flexGrow: 1 }}>
					<Link passHref href="/">
						<Box sx={{ color: "currentColor" }}>
							<CottageOutlinedIcon
								display="flex"
								variant="outlined"
								fontSize="large"
							/>
						</Box>
					</Link>
					<Link passHref href="/shopping-list">
						<Box sx={{ color: "currentColor" }}>
							<ShoppingCartOutlinedIcon fontSize="large" />
						</Box>
					</Link>
				</Stack>
				<Typography variant="caption">©2022 JpunktWpunkt</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
