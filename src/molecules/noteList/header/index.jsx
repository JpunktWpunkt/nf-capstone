import axios from "axios";
import Router, { useRouter } from "next/router";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
	const { query } = useRouter();
	const handleAddNote = () => {
		axios.post("/api/notes", { userId: query.id });
		/*	window.location.reload();*/
		Router.reload();
		console.log("page loaded");
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<div>Hallo {query.name}</div>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
