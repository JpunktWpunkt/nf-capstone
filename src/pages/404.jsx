import { DeleteOutlined } from "@material-ui/icons";
import { CardContent, CardHeader, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const styles = {
	largeIcon: {
		width: 60,
		height: 60,
	},
	largeAddIcon: {
		width: 260,
		height: 260,
	},
};

const Page = () => {
	return (
		<AppBar>
			<Toolbar sx={{ backgroundColor: "#000" }}>
				<IconButton>
					<DeleteOutlined sx={{ backgroundColor: "#000" }} style={styles.largeIcon} />
				</IconButton>
			</Toolbar>

			<Card elevation="3">
				<CardHeader
					src="/logo_familyhub.png"
					layout="responsive"
					action={
						<IconButton>
							<DeleteOutlined style={styles.largeIcon} />
						</IconButton>
					}
				/>
				<CardContent>
					<Typography>Page Not found</Typography>{" "}
					<AddBoxIcon style={styles.largeAddIcon} />
				</CardContent>
			</Card>

			<Card elevation="3">
				<CardHeader
					sx={{ backgroundColor: "#000" }}
					backgroundColor="#D1495B"
					action={
						<Toolbar>
							<IconButton>
								<DeleteOutlined style={styles.largeIcon} />
							</IconButton>
						</Toolbar>
					}
				/>
				<Typography>Page Not found</Typography> <AddBoxIcon style={styles.largeAddIcon} />
			</Card>
		</AppBar>
	);
};

export default Page;
