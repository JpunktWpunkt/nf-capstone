import Button from "@mui/material/Button";
import Link from "next/link";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



 const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>

					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						FamilyHub
					</Typography>
					<Link passHref href="/">
						<Button color="inherit" variant="outlined">Abmelden</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
