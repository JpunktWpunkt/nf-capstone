import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import React from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";

const Footer = () => {
	return (
		<AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
			<Container>
				<Toolbar>
					<Link passHref href="/">
						<CottageOutlinedIcon variant="outlined" fontSize="large">
							Home
						</CottageOutlinedIcon>
					</Link>
					<Button
						onClick={() => console.log("Yeah")}
						type="submit"
						startIcon={<CottageOutlinedIcon variant="outlined" fontSize="large" />}
					>
						Home
					</Button>
					©2022 JpunktWpunkt
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Footer;
