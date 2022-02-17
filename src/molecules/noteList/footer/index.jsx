import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import React from "react";

const btn = {
	fontSize: 30,
	bottom: 10,
	backgroundColor: "#00798C",
};

const NodesFooter = ({ userId }) => {
	const [notes, setNotes] = React.useState(null);

	React.useEffect(() => {
		const items = async () => {
			const result = await axios.get("/api/notes", { params: { userId: userId } });
			setNotes(result.data);
		};
		items();
	}, [userId]); //wird als parameter hier eingefügt, um sie für den Axios zu nutzen

	if (!notes) {
		return null;
	}
	const handleAddNote = async () => {
		await axios.post("/api/notes", { userId: userId });
		const result = await axios.get("/api/notes", { params: { userId: userId } });
		setNotes(result.data);
	};

	return (
		<AppBar position="fixed" color="primary" sx={{ height: 20 }}>
			<Toolbar>
				<Button variant="contained" color="success" sx={{ ...btn }} onClick={handleAddNote}>
					+ Add Note
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NodesFooter;
