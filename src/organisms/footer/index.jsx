import { Container } from "@mui/material";
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
			<Container>
				<Toolbar>
					<Link passHref href="/">
						<CottageOutlinedIcon display="flex" variant="outlined" fontSize="large">
							Home
						</CottageOutlinedIcon>
					</Link>
					<Link passHref href="/shopping-list">
						<ShoppingCartOutlinedIcon
							display="flex"
							variant="outlined"
							fontSize="large"
						>
							Shopping-List
						</ShoppingCartOutlinedIcon>
					</Link>
					<Typography marginLeft="8rem" fontSize="0.8rem">
						©2022 JpunktWpunkt
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Footer;
