import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import * as React from "react";
import NoteItem from "../noteItem";
import { Grid } from "@contour/react";
import Container from "@mui/material/Container";

const btn = {
	display: "flex",
	justifyContent: "center",
	position: "fixed",
	zIndex: 2,
	left: 0,
	fontSize: 30,
	bottom: 50,
	backgroundColor: "#00798C",
};

//runs client, die auf Z.16-26 gefetchte User-ID wird hier übergeben
const NoteList = ({ userId }) => {
	console.log("NoteList userId: ", userId);
	const [notes, setNotes] = React.useState(null);

	React.useEffect(() => {
		//TODO show loading spinner

		//das hier läuft asynchron und fetch die USer ID von der DB
		const items = async () => {
			const result = await axios.get("/api/notes", { params: { userId: userId } });
			setNotes(result.data);
		};
		items();
	}, [userId]); //wird als parameter hier eingefügt, um sie für den Axios zu nutzen

	if (!notes) {
		return null;
	}

	//Z25-30 nur für die Add Funktion da
	const handleAddNote = async () => {
		await axios.post("/api/notes", { userId: userId });
		const result = await axios.get("/api/notes", { params: { userId: userId } });
		setNotes(result.data);
	};

	return (
		<>
			<Container>
				<h3>NoteList</h3>
				<Grid strategy="grid" colCount={{ s: 1, m: 2, l: 3, xl: 4 }}>
					{notes.map(note => {
						return (
							<NoteItem
								key={note._id}
								note={note}
								userId={userId}
								className={note}
								setNotes={setNotes}
							/>
						); //Methode setNotes wird von useState übergeben damit man im child (noteItem) den Zustand von parent verändern kann.
					})}
				</Grid>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Button
						variant="contained"
						color="success"
						sx={{ ...btn }}
						onClick={handleAddNote}
					>
						+ Add Note
					</Button>
				</div>
			</Container>
			<Container height="80" width="auto">
				{/*	<NodesFooter />*/}
			</Container>
		</>
	);
};

export default NoteList;
